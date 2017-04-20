/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./config.prod.js')
} else {
    module.exports = require('./config.dev.js')
}
