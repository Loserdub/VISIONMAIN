const BASE = 'https://jray.me';

export const buildPageUrl = (pathname: string): string => {
  const clean = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${BASE}${clean}`;
};
