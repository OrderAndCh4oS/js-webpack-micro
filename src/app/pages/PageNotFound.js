import React from 'react';
import {Pretitle, Text, Title} from '../components/typography';
import {Column} from '../components/structure';

const PageNotFound = () =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Sorry</Pretitle>
            <Title>Page not found</Title>
            <Text>Intro here</Text>
        </div>
    </Column>;

export default PageNotFound;