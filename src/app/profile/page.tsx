'use client';

import { UserProfile } from '@descope/nextjs-sdk';
import { redirect } from 'next/navigation';

export default function Profile() {
  return (
    <div className="flex w-full items-center justify-center">
      <UserProfile
        widgetId="user-profile-widget"
        theme="dark"
        onLogout={() => {
          redirect('/sign-in');
        }}
      />
    </div>
  );
}
