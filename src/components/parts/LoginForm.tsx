'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import useAuthUserStore from '@/store/authUserStore';
import useInput from '@/hooks/useInput';
import { useRouter } from 'next/navigation';

function LoginForm() {
  const [username, onUsernameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { asyncSetAuthUser } = useAuthUserStore();

  const router = useRouter();

  const onLogin = async () => {
    setIsLoading(true);
    try {
      await asyncSetAuthUser({ username, password });
      setTimeout(() => {
        setIsLoading(false);
        router.push('/');
      }, 1700);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
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
        <Label htmlFor="password" className="text-xs">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
          required
          disabled={isLoading}
        />
      </div>
      <Button
        onClick={onLogin}
        type="button"
        className="w-full mt-5 bg-primary-one hover:bg-[#854f2f]"
        variant="outline"
        disabled={isLoading}
      >
        <span className=" text-white">Login</span>
      </Button>
    </form>
  );
}

export default LoginForm;
