/* eslint-disable react/prop-types */
import React from 'react';

import {Column} from './elements/structure';
import {IntroText, Pretitle, Text, Title} from './elements/typography';

const HomePage = () =>
    <Column span={12}>
        <Pretitle>Welcome</Pretitle>
        <Title>Home Page</Title>
        <IntroText>Intro Text</IntroText>
        <Text>Text</Text>
    </Column>
;

export default HomePage;