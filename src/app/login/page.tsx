import Header from '@/components/parts/Header';
import LoginForm from '@/components/parts/LoginForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

function LoginPage() {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="content-login h-screen flex justify-center items-center">
        <div className="card-login mx-5 w-full xl:w-1/4 p-10 rounded-3xl min-h-96 border border-primary-one">
          <div className="top-card w-full">
            <h3 className="text-center font-bold text-xl">Agent Login</h3>
            <p className="text-center text-sm mt-3">
              Hey, Enter your details to get sign in to your account
            </p>
            <Button disabled className="w-full mt-5 gap-2" variant="outline">
              <FcGoogle />
              <span className="font-semibold">Login with Goggle</span>
            </Button>
            <div className="orlogin w-full mt-3 flex gap-2 xl:gap-6 justify-center items-center">
              <div className="line tracking-[-3px] text-primary-one">------------</div>
              <span className="text-[0.6rem]">or Login with Email</span>
              <div className="line tracking-[-3px] text-primary-one">------------</div>
            </div>
          </div>
          <LoginForm />
          <div className="bottom-card mt-3">
            <p className="text-xs">
              Don&apos;t have an account?{' '}
              <Link href='/register' className="font-semibold hover:font-bold cursor-pointer">Request Now</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
