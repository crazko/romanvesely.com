import React from 'react';
import { Link } from 'gatsby';
import { Navigation } from './Navigation';
import { Gravatar } from '../components/Gravatar';
import { Container } from '../components/Container';
import { ThemeToggle } from '../components/ThemeToggle';

export const Header = () => (
  <header className="header">
    <Container>
      <div className="header__container">
        <div className="logo h-card">
          <Link to="/" className="logo__link u-url">
            <Gravatar size={200} />
          </Link>

          <div className="about">
            <span className="about__name p-name">Roman Veselý</span>
            <div className="about__social">
              <a href="https://twitter.com/rmnvsl" title="twitter" rel="me">
                <i className="icon-twitter"></i>
                <span className="sr-only">twitter</span>
              </a>
              <a href="https://github.com/crazko" title="github" rel="me">
                <i className="icon-github-circled"></i>
                <span className="sr-only">github</span>
              </a>
              <a href="https://stackoverflow.com/users/5549874/crazko" title="stack overflow" rel="me">
                <i className="icon-stackoverflow"></i>
                <span className="sr-only">stack overflow</span>
              </a>
              <a href="https://dev.to/rmnvsl" title="dev.to" rel="me">
                <i className="icon-devto"></i>
                <span className="sr-only">dev.to</span>
              </a>
              <a href="https://www.linkedin.com/in/veselyroman" title="linkedin" rel="me">
                <i className="icon-linkedin"></i>
                <span className="sr-only">linkedin</span>
              </a>
              <a href="https://romanvesely.com/@roman" title="mastodon" rel="me">
                <i className="icon-mastodon"></i>
                <span className="sr-only">mastodon</span>
              </a>
              <a href="https://www.goodreads.com/user/show/53605807" title="goodreads" rel="me">
                <i className="icon-goodreads"></i>
                <span className="sr-only">goodreads</span>
              </a>
              <a href="https://romanvesely.com/rss.xml" title="RSS feed">
                <i className="icon-rss"></i>
                <span className="sr-only">RSS feed</span>
              </a>
            </div>
          </div>
        </div>

        <Navigation />
        <ThemeToggle />
      </div>
    </Container>
  </header>
);
