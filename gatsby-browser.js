import React from 'react';
import { Layout } from './src/layout/Layout';

import './src/assets/less/main.less';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
