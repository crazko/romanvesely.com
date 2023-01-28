import React from 'react';
import { Link } from 'gatsby';

const links = {
  home: '/',
  about: '/about',
  log: '/log',
  blogroll: '/blogroll',
  bookmarks: '/bookmarks',
};

export const Navigation = () => (
  <nav role="navigation" className="navigation">
    <ul className="nav">
      {Object.entries(links).map(([title, to]) => (
        <li key={title} className="nav__item">
          <Link to={to} activeClassName="nav__link--active">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
