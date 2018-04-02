import React from 'react'
import {Column} from "../structure";
import {IntroText, Pretitle, Text, Title} from "../typography";

const Page = ({pretitle, title, text, introText}) =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>{pretitle}</Pretitle>
            <Title>{title}</Title>
            <IntroText>{introText}</IntroText>
            <Text>{text}</Text>
        </div>
    </Column>;

export default Page;