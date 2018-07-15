/* eslint-disable react/prop-types */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {isEmail, isRequired, maxLength} from '../validation';
import {Input, Select, TextArea} from './form-elements';

let ContactForm = ({handleSubmit}) =>
    <form onSubmit={handleSubmit}>
        <div>
            <Field name="fullname"
                   label="Full Name"
                   component={Input}
                   type="text"
                   validate={[isRequired, maxLength(5)]}
            />
        </div>
        <div>
            <Field name="email" component={Input} type="email"
                   validate={[isRequired, maxLength(254), isEmail]}
                   classes={['email-field']}
            />
        </div>
        <div>
            <Field name="subject"
                   component={Select}
                   options={[
                       {value: 'enquiry', name: 'Enquiry'},
                       {value: 'request', name: 'Request'}
                   ]}
                   validate={[isRequired]}
            />
        </div>
        <div>
            <Field name="message" component={TextArea}
                   validate={[isRequired]}
            />
        </div>
        <button type="submit">Submit</button>
    </form>
;

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm);

export default ContactForm;