import React from 'react';
import { Link } from 'gatsby';

export const Navigation = () => (
  <nav role="navigation" className="navigation">
    <ul className="nav">
      <li className="nav__item">
        <Link to="/" activeClassName="nav__link--active">
          home
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/about" activeClassName="nav__link--active">
          about
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/log" activeClassName="nav__link--active">
          log
        </Link>
      </li>
    </ul>
  </nav>
);
