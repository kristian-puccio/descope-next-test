import { Descope } from '@descope/nextjs-sdk';

export default function SignIn() {
  return (
    <div>
      <Descope
        flowId="sign-in-ecosystem-hub"
      // onSuccess={(e: any) => console.log(e.detail.user)}
      // onError={(e: any) => console.log('Could not log in!')}
      />
    </div>
  );
}
