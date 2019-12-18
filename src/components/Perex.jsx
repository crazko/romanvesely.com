import React from 'react';

export const Perex = ({ children }) => (
  <div className="post__description" dangerouslySetInnerHTML={{ __html: children }} />
);
