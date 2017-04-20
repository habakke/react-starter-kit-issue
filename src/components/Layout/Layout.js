/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="wrapper">
                <div id="page-wrapper" className="gray-bg">
                    <div className="wrapper wrapper-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Layout);