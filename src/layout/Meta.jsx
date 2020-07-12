import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Meta = ({ title, description, image, pathname, isArticle = false }) => {
  const siteMetadata = useSiteMetadata();

  const meta = {
    title: title || siteMetadata.name,
    description: description || siteMetadata.description,
    image: `${siteMetadata.url}/${image || siteMetadata.image}`,
    type: isArticle ? 'article' : 'website',
    url: pathname ? `${siteMetadata.url}/${pathname}` : siteMetadata.url,
  };

  return (
    <Helmet title={title} defaultTitle={siteMetadata.name} titleTemplate={`%s | ${siteMetadata.name}`}>
      <html lang="en" />

      {/* Primary Meta Tags */}
      <meta name="google-site-verification" content="_L_KtvxI0HssJtpNjtz1o85SACSUiFOYn-rZXKZWSV4" />
      <meta name="description" content={meta.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@rmnvsl" />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />

      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
    </Helmet>
  );
};
