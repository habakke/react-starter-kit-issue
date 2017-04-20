/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

export const port = process.env.PORT || 3000
export const host = process.env.WEBSITE_HOSTNAME || "localhost:${port}"

export const webapi_port = process.env.WEBAPI_PORT || 8080
export const webapi_host = process.env.WEBAPI_HOSTNAME || "http://localhost:8080"

export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "XXXXXX"

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' }

}