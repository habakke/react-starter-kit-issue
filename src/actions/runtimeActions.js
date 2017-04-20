/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

import * as types from '../constants';

export function setRuntimeVariable({ name, value }) {
  return {
    type: types.SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}
