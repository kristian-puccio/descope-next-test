"use client"

import { Descope } from '@descope/nextjs-sdk';
import { useSession } from '@descope/nextjs-sdk/client';

export default function SignIn() {
  const { isAuthenticated, isSessionLoading } = useSession()
  console.log({ isAuthenticated, isSessionLoading }, '<<<<<<<<<<<<<< ')

  return (
    <div>
      <Descope
        flowId="sign-in-ecosystem-hub"
        redirectAfterSuccess="/"
        theme="dark"
      />
    </div>
  );
}
