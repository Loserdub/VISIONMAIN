export const getSiteOrigin = () =>
  typeof window !== 'undefined' ? window.location.origin : '';

export const buildPageUrl = (pathname: string) => {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return `${getSiteOrigin()}${normalizedPath}`;
};
