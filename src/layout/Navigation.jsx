import React from 'react';
import { Link } from 'gatsby';

const links = {
  home: '/',
  about: '/about',
  log: '/log',
  blogroll: '/blogroll',
};

export const Navigation = () => (
  <nav role="navigation" className="navigation">
    <ul className="nav">
      {Object.entries(links).map(([title, to]) => (
        <li className="nav__item">
          <Link to={to} activeClassName="nav__link--active">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
