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
  async action({ path, store, params }) {
    const Home = await new Promise((resolve) => {
      require.ensure([], require => resolve(require('./Home').default), 'home');
    });

    const title = 'Home';
    return {
      title,
      chunk: 'home',
      description: 'Home',
      component: <Provider store={store}><Layout><Home /></Layout></Provider>,
    };
  }
};
