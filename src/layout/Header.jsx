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
        <div className="logo h-card p-author">
          <Link to="/" className="logo__link u-url u-uid">
            <Gravatar size={200} />
          </Link>

          <div className="about">
            <span className="about__name p-name">Roman Veselý</span>
            <span className="sr-only p-note">
              <span className="p-job-title">Software Engineer</span> from{' '}
              <span className="p-country-name">Slovakia</span>. Somewhere between trees and bytes of code.
            </span>
            <div className="about__social">
              <a href="https://twitter.com/rmnvsl" class="u-url" title="twitter" rel="me">
                <i className="icon-twitter"></i>
                <span className="sr-only">twitter</span>
              </a>
              <a href="https://github.com/crazko" class="u-url" title="github" rel="me">
                <i className="icon-github-circled"></i>
                <span className="sr-only">github</span>
              </a>
              <a href="https://stackoverflow.com/users/5549874/crazko" class="u-url" title="stack overflow" rel="me">
                <i className="icon-stackoverflow"></i>
                <span className="sr-only">stack overflow</span>
              </a>
              <a href="https://dev.to/rmnvsl" class="u-url" title="dev.to" rel="me">
                <i className="icon-devto"></i>
                <span className="sr-only">dev.to</span>
              </a>
              <a href="https://www.linkedin.com/in/veselyroman" class="u-url" title="linkedin" rel="me">
                <i className="icon-linkedin"></i>
                <span className="sr-only">linkedin</span>
              </a>
              <a href="https://mastodon.social/@romanvesely" class="u-url" title="mastodon" rel="me">
                <i className="icon-mastodon"></i>
                <span className="sr-only">mastodon</span>
              </a>
              <a href="https://www.goodreads.com/user/show/53605807" class="u-url" title="goodreads" rel="me">
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
