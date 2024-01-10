import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import HighScoreDisplay from './components/HighScoreDisplay';
import { getUser } from '@/lib/fetch';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;
  const users = await getUser();

  return (
    <>
      <div className="flex h-screen items-center font-poppins">
        <div className="w-4/6 mx-auto h-4/4 text-center bg-slate-100 rounded-lg shadow-xl p-10">
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Quiz</span> Master
          </h1>
          <h1 className="text-4xl mt-8 underline font-mono decoration-primary ">
            Top Score
          </h1>
          <HighScoreDisplay users={users?.data} />
          <Link href={`/quiz/${id}`}>
            <button className="btn btn-secondary rounded-full w-1/2 mt-10">
              Let&apos;s Start
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
