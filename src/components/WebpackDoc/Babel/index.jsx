import React, { Component } from 'react';

import Title from '../../common/Title/index.jsx';

import './style.scss';

export default class Babel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Title title={'Babel 知识点梳理'} />
                I'm babel
            </div>
        )
    }
}