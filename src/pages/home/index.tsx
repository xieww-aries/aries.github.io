import React from 'react';
import './style.scss';

import Animation from '../../components/Home/3DAnimation';

import Title from '../../components/common/Title';

export default function Home() {
    return (
        <div styleName="home">
            <Title title={'我是首页'} />
            <Animation />
        </div>
    );
}