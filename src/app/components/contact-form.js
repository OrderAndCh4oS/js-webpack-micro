/* eslint-disable react/prop-types,indent */
import React from 'react';
import {Input, Select, Switch, TextArea} from './form-elements';
import {Form, withFormik} from 'formik';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as contactForm from '../reducers/contact-form';
import * as Yup from 'yup';

let ContactForm = ({
                       redux,
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       isSubmitting,
                       isValid,
                       setFieldValue,
                       setFieldTouched
                   }) => {
    if (redux.contactForm.sent) {
        return <p>Thank you for your message</p>;
    }
    return (
        <Form>
            <Input name="fullname"
                   label="Full Name"
                   value={values.fullname || ''}
                   type="text"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.fullname && errors.fullname}
            />
            <Input name="email"
                   label="Email"
                   value={values.email || ''}
                   type="email"
                   classes={['email-field']}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.email && errors.email}
            />
            <Select name="subject"
                    label="Subject"
                    value={values.subject || ''}
                    options={[
                        {value: 'enquiry', name: 'Enquiry'},
                        {value: 'request', name: 'Request'}
                    ]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.subject && errors.subject}
            />
            <TextArea name="message"
                      label="Message"
                      value={values.message || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && errors.message}
            />
            <Switch
                name="newsletter"
                label="Newsletter"
                value={values.newsletter || false}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={touched.message && errors.message}
            />
            <button type="submit" disabled={isSubmitting || !isValid}>Submit</button>
            {isSubmitting ? <p>Sending...</p> : null}
        </Form>

    );
};

ContactForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, props: {postContactForm}}
    ) => {
        delete values.redux;
        console.log('values', values);
        postContactForm(values).then(() => {
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
            .required('Message is required'),
        newsletter: Yup.boolean()
    })
})(ContactForm);

const mapStateToContactFormProps = (state) => {
    return {
        redux: {
            contactForm: contactForm.getContactForm(state.app.contactForm),
            isFetching: contactForm.isFetching(state.app.contactForm),
            isInvalid: contactForm.invalidRequest(state.app.contactForm),
            errorMessage: contactForm.errorMessage(state.app.contactForm)
        }
    };
};

ContactForm = connect(
    mapStateToContactFormProps,
    actions
)(ContactForm);

export default ContactForm;
