import React, {Component} from 'react';
import {Pretitle, Title} from './typography';
import {Column} from './structure';
import ContactForm from './contact-form';

export default class ContactPage extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values);
    };

    render() {
        return (
            <Column>
                <Pretitle>For more information</Pretitle>
                <Title>Get in Touch</Title>
                <ContactForm onSubmit={this.submit}/>
            </Column>
        );
    }
}