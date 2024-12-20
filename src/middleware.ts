import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'uz', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|apple-touch-icon.png|images/books|icons|manifest).*)'
  ]
};
