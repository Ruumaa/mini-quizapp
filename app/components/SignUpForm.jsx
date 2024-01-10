'use client';
import React from 'react';
import AuthForm from './AuthForm';
import { SignUp } from '@/lib/fetch';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter();
  const handleRegister = async (values) => {
    const response = await SignUp(values);
    console.log(response);
    if (!response.data) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      router.push('/auth/sign-in');
      router.refresh();
    }
  };
  return (
    <div>
      <AuthForm onSubmit={handleRegister} isRegister={true} />
    </div>
  );
};

export default SignUpForm;
