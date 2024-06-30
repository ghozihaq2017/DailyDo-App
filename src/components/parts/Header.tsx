'use client';

import useAuthUserStore from '@/store/authUserStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Header() {
  const { asyncUnsetAuthUser, authUser } = useAuthUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onLogout = async () => {
    setIsLoading(true);
    try {
      await asyncUnsetAuthUser();
      toast.error('Logout Successfully');
      setTimeout(() => {
        setIsLoading(false);
        router.push('/login');
      }, 700);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toast.error('Logout Failed');
    }
  };
  return (
    <div className="navbar xl:px-8 bg-white border-b border-primary-one fixed top-0 z-10">
      <div className="flex-1">
        {authUser ? (
          <Link href='/' className="btn btn-ghost text-xl">
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5ZM2 10.9146C1.4174 10.7087 1 10.1531 1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H12.5C13.3284 2 14 2.67157 14 3.5V9.5C14 10.1531 13.5826 10.7087 13 10.9146V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V10.9146ZM12 11V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V11H12Z"
                fill="currentColor"
                fillRule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p>DailyDo</p>
          </Link>
        ) : (
          <a className="btn btn-ghost text-xl">
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5ZM2 10.9146C1.4174 10.7087 1 10.1531 1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H12.5C13.3284 2 14 2.67157 14 3.5V9.5C14 10.1531 13.5826 10.7087 13 10.9146V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V10.9146ZM12 11V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V11H12Z"
                fill="currentColor"
                fillRule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p>DailyDo</p>
          </a>
        )}
      </div>
      <div className="flex-none">
        {authUser && (
          <button
            onClick={onLogout}
            disabled={isLoading}
            className="btn btn-square btn-ghost flex w-24 justify-center items-center"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                fill="currentColor"
                fillRule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="font-medium">Logout</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
