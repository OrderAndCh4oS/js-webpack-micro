import React from 'react'
import {Pretitle, Text, Title} from "../typography";
import {Column} from "../structure";

const PageNotFound = () =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Sorry</Pretitle>
            <Title>Page not found</Title>
            <Text>Intro here</Text>
        </div>
    </Column>;

export default PageNotFound;