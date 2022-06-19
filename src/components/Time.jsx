import React from 'react';

export const Time = ({ children, date }) => (
  <time dateTime={date} title={date} className="dt-published">
    {children}
  </time>
);
