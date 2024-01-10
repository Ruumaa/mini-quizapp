// import quiz from '@/lib/quiz';
import { getQuestions } from '@/lib/fetch';
import QuizPage from '../../components/QuizPage';

const Page = async ({ params }) => {
  const userId = params.id;
  const quiz = await getQuestions();
  return (
    <>
      <div className="">
        <QuizPage quiz={quiz} userId={userId} />{' '}
      </div>
    </>
  );
};

export default Page;
