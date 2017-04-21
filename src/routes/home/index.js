/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../../components/Layout';

export default {

  path: '/',
  children: [
    {
      path: '/',
      action({ path, store, params }) {
        return require.ensure([], require => require('./Home').default, 'home')
          .then(Home => ({
            title: 'Home',
            chunk: 'home',
            component: <Provider store={store}><Layout><Home /></Layout></Provider>,
          }));
      },
    },
  ],
};
