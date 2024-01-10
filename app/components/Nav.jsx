import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import HandleLogout from './HandleLogout';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return !session ? (
    ''
  ) : (
    <div className="navbar bg-primary ">
      <div className="w-4/6 mx-auto justify-between ">
        <Link href="/" prefetch={false}>
          <IoHome
            size={30}
            className="text-base-300 hover:text-base-200 ml-5"
          />
        </Link>
        <HandleLogout session={session?.user} />
      </div>
    </div>
  );
};

export default Nav;
