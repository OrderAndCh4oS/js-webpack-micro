/* eslint-disable react/prop-types */
import React from 'react';
import {Field, reduxForm} from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.fullname) {
        errors.fullname = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email';
    }
    if (!values.message) {
        errors.message = 'Required';
    }
    return errors;
};

const renderInput = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label}
                   className={[touched && error ? 'form-error' : ''].join(' ')}/>
            {touched && error && <p className='form-error'>{error}</p>}
        </div>
    </div>
);

const renderTextArea = ({input, label, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} className={[touched && error ? 'form-error' : ''].join(' ')}/>
            {touched && error && <p className='form-error'>{error}</p>}
        </div>
    </div>
);

let ContactForm = ({handleSubmit}) =>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="fullname">First Name</label>
            <Field name="fullname" component={renderInput} type="text"/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component={renderInput} type="email"/>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <Field name="message" component={renderTextArea}/>
        </div>
        <button type="submit">Submit</button>
    </form>
;

ContactForm = reduxForm({
    form: 'contact',
    validate
})(ContactForm);

export default ContactForm;