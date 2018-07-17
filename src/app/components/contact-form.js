/* eslint-disable react/prop-types */
import React from 'react';
import {Input, Select, TextArea} from './form-elements';

let ContactForm = ({handleSubmit}) =>
    <form onSubmit={handleSubmit}>
        <div>
            <Input name="fullname"
                   label="Full Name"
                   type="text"
            />
        </div>
        <div>
            <Input name="email"
                   label="Email"
                   type="email"
                   classes={['email-field']}
            />
        </div>
        <div>
            <Select name="subject"
                    label="Subject"
                    options={[
                        {value: 'enquiry', name: 'Enquiry'},
                        {value: 'request', name: 'Request'}
                    ]}
            />
        </div>
        <div>
            <TextArea name="message"
                      label="Message"
            />
        </div>
        <button type="submit">Submit</button>
    </form>
;

export default ContactForm;