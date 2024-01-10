'use client';
import { sendScore } from '@/lib/fetch';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

import { useEffect, useState } from 'react';

const QuizPage = ({ quiz, userId }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    const sendScoreAsync = async () => {
      const total = (result.score / 25) * 100;
      await sendScore(userId, total);
    };
    if (showResult) {
      sendScoreAsync();
    }
  }, [result, showResult, userId]);
  const { data } = quiz;
  const { title, options, correctIndex } = data[activeQuestion];

  // select and check option
  const onAnswerSelected = (option, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    setSelectedAnswer(index === correctIndex);
  };
  // calculate score and increment to next title
  const nextQuestion = async () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== data.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div>
      {/* QUESTIONS */}
      {!showResult ? (
        <div className="flex flex-col h-screen items-center justify-center font-poppins">
          <div className="w-4/6 mx-auto h-5/6 bg-slate-100 rounded-lg shadow-xl p-10">
            <h2 className="text-2xl mt-8 underline font-mono font-bold decoration-primary">
              Question {activeQuestion + 1} <span> of {data.length}</span>
            </h2>
            <h3 className="text-xl mt-4 font-semibold">
              {data[activeQuestion].title}?
            </h3>
            <div className="flex flex-col gap-4 mt-6 w-full">
              {options.map((option, index) => (
                <div key={index}>
                  <button
                    onClick={() => onAnswerSelected(option, index)}
                    className={`${
                      // logika index yang dipilih
                      selectedAnswerIndex === index
                        ? 'btn btn-secondary active:bg-primary btn-active'
                        : ''
                    } btn hover:bg-secondary hover:text-base-100 w-full`}
                  >
                    <span className="">{option}</span>
                  </button>
                </div>
              ))}
              {checked ? (
                <>
                  <button
                    className="btn btn-success text-base-100 mt-5"
                    onClick={nextQuestion}
                  >
                    {activeQuestion === data.length - 1 ? 'Finish' : 'Next'}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-disabled text-base-100 mt-5"
                    onClick={nextQuestion}
                  >
                    {activeQuestion === data.length - 1 ? 'Finish' : 'Next'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        // ---------------- RESULT ------------------
        <div className="flex flex-col h-screen items-center justify-center font-poppins">
          <div className="w-4/6 mx-auto h-auto bg-slate-100 rounded-lg shadow-xl p-10 text-center">
            <h3 className="text-4xl font-mono font-bold underline decoration-primary ">
              Quiz Summary
            </h3>
            <h2 className="text-xl underline decoration-warning font-bold mt-5 mb-3">
              Congratulations!
            </h2>
            <h3 className="text-lg font-semibold">
              You&apos;ve scored{' '}
              <span className="text-success">{(result.score / 25) * 100}</span>{' '}
              point !
            </h3>
            <div className="w-3/4 h-1/4 flex flex-row mx-auto divide-secondary/60  items-center gap-3 rounded-lg divide-x-2 mt-5 ">
              <div className="flex items-center flex-col w-1/3">
                <div className="flex flex-row items-center gap-2">
                  <FaQuestionCircle size={20} className="text-secondary" />{' '}
                  <span className="text-2xl font-bold font-mono">
                    {data.length}
                  </span>
                </div>
                <div className="text-xs">Total questions</div>
              </div>
              <div className="flex items-center flex-col w-1/3">
                <div className="flex flex-row items-center gap-2">
                  <FaCheckCircle size={20} className="text-success" />{' '}
                  <span className="text-2xl font-bold font-mono">
                    {result.correctAnswers}
                  </span>
                </div>
                <div className="text-xs">Correct</div>
              </div>
              <div className="flex items-center flex-col  w-1/3">
                <div className="flex flex-row items-center gap-2">
                  <IoMdCloseCircle size={20} className="text-error" />{' '}
                  <span className="text-2xl font-bold font-mono">
                    {result.wrongAnswers}
                  </span>
                </div>
                <div className="text-xs">Wrong</div>
              </div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="btn btn-secondary rounded-full w-3/4 mt-10"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
