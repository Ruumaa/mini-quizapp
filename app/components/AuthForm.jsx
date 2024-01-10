'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import loginPic from '@/public/form1.jpg';
import registerPic from '@/public/form9.jpg';

const AuthForm = ({ onSubmit, isRegister }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isUsernameFilled, setIsUsernameFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setIsUsernameFilled(!!value);
    } else if (name === 'password') {
      setIsPasswordFilled(!!value);
    }
  };

  return (
    <div className="flex h-screen items-center font-poppins">
      {/* CONTAINER */}
      <div className="w-4/6 mx-auto rounded-3xl bg-primary h-3/5">
        <div className="flex rounded-3xl shadow-lg w-full h-full relative">
          {/* IMAGE */}
          <div className="p-10 w-3/4 rounded-l-3xl z-0 absolute left-0 h-full">
            {isRegister ? (
              <>
                <Image
                  src={registerPic}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw"
                  objectFit="cover"
                  alt="register-page"
                  placeholder="blur"
                  className="rounded-3xl w-full"
                />
              </>
            ) : (
              <>
                <Image
                  src={loginPic}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw"
                  objectFit="cover"
                  alt="login-page"
                  placeholder="blur"
                  className=" rounded-3xl w-full"
                />
              </>
            )}
          </div>
          {/* FORM */}
          <div className="p-14 w-3/6 bg-white shadow-xl rounded-3xl z-20 absolute right-0 h-full">
            <h1 className="text-xl font-bold">
              {isRegister ? 'Create Account' : 'Sign In to your Account'}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5">
                <div className="relative mt-8">
                  <input
                    id="username"
                    type="text"
                    className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                    autoComplete="off"
                    {...register('username', { required: true })}
                    onChange={(e) => {
                      handleInputChange(e);
                      setValue('username', e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.username && (
                    <span className="text-error text-sm mt-1px">
                      This field is required
                    </span>
                  )}
                  {/* {console.log(isUsernameFilled)} */}
                  <label
                    htmlFor="username"
                    className={`absolute left-0 text-slate-500 cursor-text transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary ${
                      isUsernameFilled ? 'text-sm -top-3' : 'top-1 '
                    }`}
                  >
                    Username
                  </label>
                </div>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type="password"
                    className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors w-full peer"
                    autoComplete="off"
                    {...register('password', { required: true })}
                    // onChange={handleInputChange}
                    onChange={(e) => {
                      handleInputChange(e);
                      setValue('password', e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.password && (
                    <span className="text-error text-sm mt-1px">
                      This field is required
                    </span>
                  )}

                  <label
                    htmlFor="password"
                    className={`absolute  left-0 cursor-text transition-all text-slate-500 duration-300 peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary ${
                      isPasswordFilled ? 'text-sm -top-3' : 'top-1 '
                    }`}
                  >
                    Password
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary justify-center w-full rounded-full mt-10"
              >
                {isRegister ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
            <div className=" text-slate-500 text-xs text-center mt-3 ">
              {isRegister ? (
                <>
                  Already have an account?{' '}
                  <Link
                    href="/auth/sign-in"
                    className="text-secondary cursor-pointer underline hover:text-primary"
                  >
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/auth/sign-up"
                    className="text-secondary cursor-pointer underline hover:text-primary"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
