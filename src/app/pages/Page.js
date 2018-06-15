import React from 'react';
import {Column} from '../components/structure';
import {IntroText, Pretitle, Text, Title} from '../components/typography';
import PropTypes from 'prop-types';

const Page = ({pretitle, title, introText, text}) =>
    <Column span={12}>
        <div>
            <Pretitle>{pretitle}</Pretitle>
            <Title>{title}</Title>
            <IntroText>{introText}</IntroText>
            <Text>{text}</Text>
        </div>
    </Column>;

Page.propTypes = {
    pretitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    introText: PropTypes.string.isRequired
};

export default Page;