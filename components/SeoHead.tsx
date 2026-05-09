import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://jray.me';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/favicon.png`;

const normalizePath = (path: string) => {
  if (!path || path === '/') {
    return '/';
  }

  return `${path.replace(/\/+$/, '')}/`;
};

export const absoluteUrl = (path: string) => `${SITE_URL}${normalizePath(path)}`;

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  children?: React.ReactNode;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_SOCIAL_IMAGE,
  children,
}) => {
  const url = absoluteUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="JRAY" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Helmet>
  );
};

export default SeoHead;
