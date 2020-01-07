import React from 'react';
import { Layout } from './src/layout/Layout';

import './src/assets/less/styles.less';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
