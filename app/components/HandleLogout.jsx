'use client';
import { signOut } from 'next-auth/react';
import { FaSignOutAlt } from 'react-icons/fa';
const HandleLogout = ({ session }) => {
  return (
    <div className="">
      <FaSignOutAlt
        size={25}
        className="text-error cursor-pointer hover:text-error/75 mr-5"
        title={`${session.name}`}
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/sign-in`,
          })
        }
      />
    </div>
  );
};

export default HandleLogout;
