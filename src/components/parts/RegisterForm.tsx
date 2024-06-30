'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useInput from '@/hooks/useInput';
import { useRouter } from 'next/navigation';
import { register } from '@/fetching/auth';
import toast from 'react-hot-toast';

function RegisterForm() {
  const [username, onUsernameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRegister = async () => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      setIsLoading(false);
      toast.error('The password you entered does not match');
      return;
    }
    try {
      await register({ username, email, password });
      toast.success('Account registered successfully');
      setTimeout(() => {
        setIsLoading(false);
        router.push('/login');
      }, 1000);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error('Account registered failed');
    }
  };

  return (
    <form action="" className="mt-5">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username" className="text-xs">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="john_doe"
          value={username}
          onChange={onUsernameChange}
          required
          disabled={isLoading}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="email" className="text-xs">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="joshndoe@example.com"
          value={email}
          onChange={onEmailChange}
          required
          disabled={isLoading}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="password" className="text-xs">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="example: 12345678"
          value={password}
          onChange={onPasswordChange}
          required
          disabled={isLoading}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
        <Label htmlFor="confirmPassword" className="text-xs">
          Confirm Password
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          required
          disabled={isLoading}
        />
      </div>
      <Button
        type="button"
        onClick={onRegister}
        className="w-full mt-5 bg-primary-one hover:bg-[#854f2f]"
        variant="outline"
      >
        <span className=" text-white">Register</span>
      </Button>
    </form>
  );
}

export default RegisterForm;
