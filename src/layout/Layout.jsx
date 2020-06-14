import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Meta } from './Meta';
import { Header } from './Header';
import { Footer } from './Footer';
import { Tip } from '../components/Tip';
import { Log } from '../components/Log';
import { CanIUse } from '../components/CanIUse';

const components = {
  Tip,
  Log,
  CanIUse,
};

export const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    <MDXProvider components={components}>{children}</MDXProvider>
    <Footer />
  </>
);
