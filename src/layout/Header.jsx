import React from 'react';
import { Link } from 'gatsby';
import { Navigation } from './Navigation';
import { Gravatar } from '../components/Gravatar';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="logo">
        <Link to="/" className="logo__link">
          <Gravatar size={200} />
        </Link>

        <div className="about">
          <span className="about__name">Roman Veselý</span>
          <strong className="about__title">software developer</strong>
          <div className="about__social">
            <a href="https://twitter.com/rmnvsl" title="twitter">
              <i className="icon-twitter"></i>
              <span className="sr-only">twitter</span>
            </a>
            <a href="https://github.com/crazko" title="github">
              <i className="icon-github-circled"></i>
              <span className="sr-only">github</span>
            </a>
            <a href="https://www.linkedin.com/in/veselyroman" title="linkedin">
              <i className="icon-linkedin"></i>
              <span className="sr-only">linkedin</span>
            </a>
            <a href="https://romanvesely.com/rss.xml" title="RSS feed">
              <i className="icon-rss"></i>
              <span className="sr-only">RSS feed</span>
            </a>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  </header>
);
