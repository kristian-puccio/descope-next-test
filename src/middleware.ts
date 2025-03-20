import { authMiddleware } from '@descope/nextjs-sdk/server';

export default authMiddleware({
  // The Descope project ID to use for authentication
  // Defaults to process.env.DESCOPE_PROJECT_ID
  projectId: '',
  baseUrl: 'http://localhost:4200',
  // redirectUrl: '/sign-in',

  // The URL to redirect to if the user is not authenticated
  // Defaults to process.env.SIGN_IN_ROUTE or '/sign-in' if not provided
  // NOTE: In case it contains query parameters that exist in the original URL, they will override the original query parameters. e.g. if the original URL is /page?param1=1&param2=2 and the redirect URL is /sign-in?param1=3, the final redirect URL will be /sign-in?param1=3&param2=2
  // redirectUrl?: string,

  // These are the public and private routes in your app. You can also use wildcards (e.g. /api/*) with routes as well in these definitions.
  // Read more about how to use these below.
  publicRoutes: ['/sign-in'],
  // privateRoutes?: string[]
  // If you having privateRoutes and publicRoutes defined at the same time, privateRoutes will be ignored.

  // Optional: log level for the middleware
  // Defaults to 'info'
  // logLevel: 'debug' | 'info' | 'warn' | 'error'
});

export const config = {
  // TODO: revisit this matcher
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
