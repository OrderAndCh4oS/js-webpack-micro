import React from 'react';
import {Pretitle, Title} from './elements/typography';
import {Column} from './elements/structure';
import ContactForm from './contact-form';
import Map from './elements/map';

const ContactPage = () => (
    <Column>
        <Map/>
        <Pretitle>For more information</Pretitle>
        <Title>Get in Touch</Title>
        <ContactForm/>
    </Column>
);

export default ContactPage;
