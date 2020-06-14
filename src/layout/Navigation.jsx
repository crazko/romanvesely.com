import React from 'react';
import { Link } from 'gatsby';

export const Navigation = () => (
  <nav role="navigation" className="navigation">
    <ul className="nav">
      <li className="nav__item">
        <Link to="/about/" activeClassName="nav__link--active">
          about
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" activeClassName="nav__link--active">
          notes
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/log" activeClassName="nav__link--active">
          log
        </Link>
      </li>
      <li className="nav__item nav__item--funky">
        <Link to="/playground" className="nav__link--funky" activeClassName="nav__link--active">
          {[...'playground'].map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/projects" activeClassName="nav__link--active">
          projects
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/talks" activeClassName="nav__link--active">
          talks
        </Link>
      </li>
    </ul>
  </nav>
);
