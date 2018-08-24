/* eslint-disable react/prop-types */
import React from 'react';

import {Column} from './elements/structure';
import {IntroText, Pretitle, Text, Title} from './elements/typography';
import CarouselPanel from './elements/carousel';

const HomePage = () =>
    <Column span={12}>
        <CarouselPanel>
            <img src="https://placehold.it/2000x1000/"/>
            <img src="https://placehold.it/2000x1000/"/>
            <img src="https://placehold.it/2000x1000/"/>
        </CarouselPanel>
        <Pretitle>Welcome</Pretitle>
        <Title>Home Page</Title>
        <IntroText>Intro Text</IntroText>
        <Text>Text</Text>
    </Column>
;

export default HomePage;