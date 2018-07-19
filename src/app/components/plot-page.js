import React from 'react';
import PlotForm from './plot-form';
import {Pretitle, Title} from './typography';
import {Column} from './structure';

const PlotPage = () => (
    <Column>
        <Pretitle>For more information</Pretitle>
        <Title>Get in Touch</Title>
        <PlotForm/>
    </Column>
);

export default PlotPage;