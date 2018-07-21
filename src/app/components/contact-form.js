/* eslint-disable react/prop-types,indent */
import React from 'react';
import {Input, MySlider, Select, Switch, TextArea} from './form-elements';
import {Form, withFormik} from 'formik';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as fromReducers from '../reducers';
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
    if (redux.didComplete) {
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
                error={touched.newsletter && errors.newsletter}
            />
            <MySlider
                name="slider"
                label="Slider"
                value={values.slider || 50}
                defaultValue={50} min={0} max={100} step={1}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={touched.slider && errors.slider}
            />
            <button type="submit" disabled={isSubmitting || !isValid}>Submit</button>
            {isSubmitting ? <p>Sending...</p> : null}
        </Form>
    );
};

ContactForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, props: {postContactForm, resetContactForm}}
    ) => {
        console.log('values', values);
        delete values.redux;
        console.log('values', values);
        postContactForm(values).then(() => {
            setSubmitting(false);
            resetForm();
        }).then(() => {
            console.log('reset form here');
            resetContactForm();
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
        slider: Yup.number()
            .min(0, 'At least 0')
            .max(100, 'At most 100')
        ,
        newsletter: Yup.boolean()
    })
})(ContactForm);

const mapStateToContactFormProps = (state) => {
    return {
        redux: {
            contactForm: fromReducers.getContactForm(state),
            isFetching: fromReducers.isFetchingContactForm(state),
            didComplete: fromReducers.didCompleteContactForm(state),
            isInvalid: fromReducers.contactFormInvalidRequest(state),
            errorMessage: fromReducers.contactFormErrorMessage(state)
        }
    };
};

ContactForm = connect(
    mapStateToContactFormProps,
    actions
)(ContactForm);

export default ContactForm;
