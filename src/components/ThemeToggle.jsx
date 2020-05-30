import React from 'react';
import useDarkMode from 'use-dark-mode';

export const ThemeToggle = () => {
  const { value, toggle } = useDarkMode(false, {
    classNameDark: 'theme--dark',
    classNameLight: 'theme--light',
  });

  return (
    <div className="theme-toggle">
      <label className="theme-toggle__switch" htmlFor="switcher">
        <input type="checkbox" id="switcher" className="theme-toggle__switcher" checked={value} onChange={toggle} />
        <div className="theme-toggle__slider"></div>
      </label>
    </div>
  );
};
