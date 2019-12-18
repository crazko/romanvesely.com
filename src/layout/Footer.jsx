import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Footer = () => {
  const { name, email } = useSiteMetadata();

  return (
    <footer role="contentinfo" className="footer">
      &copy; {new Date().getUTCFullYear()} <a href={`mailto:${email}`}>{name}</a> &middot; <Link to="/now">now</Link>
      <span className="footer__extended">
        &middot; follow me <a href="twitter://user?screen_name=rmnvsl">@rmnvsl</a>
      </span>
      &middot; <a href="https://github.com/crazko/romanvesely.com">&lt;/&gt;</a> with{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> &middot; <a href="/rss.xml">rss</a>
    </footer>
  );
};
