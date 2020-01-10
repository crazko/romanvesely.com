import React from 'react';

export const MetaList = ({ children }) => (
  <ul className="meta">
    {React.Children.map(children, (item, i) => (
      <li key={i} className="meta__item">
        {item}
      </li>
    ))}
  </ul>
);
