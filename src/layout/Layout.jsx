import React from 'react';
import { Meta } from './Meta';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
    <Footer />
  </>
);
