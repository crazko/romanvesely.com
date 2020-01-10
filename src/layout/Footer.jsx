import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../components/Container';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Footer = () => {
  const { name, email } = useSiteMetadata();

  return (
    <footer role="contentinfo" className="footer">
      <Container>
        <ul className="meta">
          <li className="meta__item">
            &copy; {new Date().getUTCFullYear()} <a href={`mailto:${email}`}>{name}</a>
          </li>
          <li className="meta__item">
            <Link to="/now">now</Link>
          </li>
          <li className="meta__item footer__extended">
            follow me <a href="twitter://user?screen_name=rmnvsl">@rmnvsl</a>
          </li>
          <li className="meta__item">
            <a href="https://github.com/crazko/romanvesely.com">&lt;/&gt;</a> with{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a>
          </li>
          <li className="meta__item">
            <a href="https://github.com/crazko/romanvesely.com/issues">Found a bug?</a>
          </li>
          <li className="meta__item">
            <a href="/rss.xml">RSS</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
