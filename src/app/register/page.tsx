import Header from '@/components/parts/Header';
import RegisterForm from '@/components/parts/RegisterForm';
import Link from 'next/link';

import React from 'react';

function RegisterPage() {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="content-register h-screen flex justify-center items-center">
        <div className="card-register mx-5 w-full xl:w-1/4 p-10 rounded-3xl min-h-96 border border-primary-one">
          <div className="top-card w-full">
            <h3 className="text-center font-bold text-xl">Agent Register</h3>
            <p className="text-center text-sm mt-3">
              Hey, Enter your details to create new account
            </p>
          </div>
          <RegisterForm />
          <div className="bottom-card mt-3">
            <p className="text-xs">
              Already have an account? 
              <Link href='/login' className="font-semibold hover:font-bold cursor-pointer"> Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
