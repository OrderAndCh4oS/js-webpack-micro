import React from 'react';
import {Pretitle, Title} from './typography';
import {Column} from './structure';
import ContactForm from './contact-form';

const ContactPage = () => (
    <Column>
        <Pretitle>For more information</Pretitle>
        <Title>Get in Touch</Title>
        <ContactForm/>
    </Column>
);

export default ContactPage;
