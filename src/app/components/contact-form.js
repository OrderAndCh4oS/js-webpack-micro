/* eslint-disable react/prop-types,indent */
import React from 'react';
import {Input, Select, TextArea} from './form-elements';
import {Form, withFormik} from 'formik';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as contactForm from '../reducers/contact-form';
import * as Yup from 'yup';

let ContactForm = ({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       isSubmitting,
                       isValid
                   }) =>
    <Form>
        <div>
            <Input name="fullname"
                   label="Full Name"
                   value={values.fullname}
                   type="text"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.fullname && errors.fullname}
            />
        </div>
        <div>
            <Input name="email"
                   label="Email"
                   value={values.email}
                   type="email"
                   classes={['email-field']}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.email && errors.email}
            />
        </div>
        <div>
            <Select name="subject"
                    label="Subject"
                    value={values.subject}
                    options={[
                        {value: 'enquiry', name: 'Enquiry'},
                        {value: 'request', name: 'Request'}
                    ]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.subject && errors.subject}
            />
        </div>
        <div>
            <TextArea name="message"
                      label="Message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && errors.message}
            />
        </div>
        <button type="submit" disabled={isSubmitting || !isValid}>Submit</button>
    </Form>
;

ContactForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, props: {postContactForm}}
    ) => {

        postContactForm({
            fullname: values.fullname,
            email: values.email,
            subject: values.subject,
            message: values.message
        }).then(() => {
            setSubmitting(false);
            resetForm();
        });
    },
    validationSchema: Yup.object().shape({
        fullname: Yup.string()
            .required('Full name is required.'),
        subject: Yup.string()
            .required('Must choose a subject')
            .matches(/(request|enquiry)/, 'Must choose a subject'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        message: Yup.string()
            .required('Message is required')
    })
})(ContactForm);

const mapStateToContactFormProps = (state) => {
    return {
        contactForm: contactForm.getContactForm(state.app.contactForm),
        isFetching: contactForm.isFetching(state.app.contactForm),
        isInvalid: contactForm.invalidRequest(state.app.contactForm),
        errorMessage: contactForm.errorMessage(state.app.contactForm)
    };
};

ContactForm = connect(
    mapStateToContactFormProps,
    actions
)(ContactForm);

export default ContactForm;
