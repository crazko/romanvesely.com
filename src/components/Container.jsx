import React from 'react';

export const Container = ({ children, wide = false }) => (
  <div className={`container ${wide ? 'container--wide' : ''}`}>{children}</div>
);
