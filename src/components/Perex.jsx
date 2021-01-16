import React from 'react';

export const Perex = ({ children, className, as: Component = 'p' }) => (
  <Component className={`perex ${className ? className : ''}`.trim()}>{children}</Component>
);
