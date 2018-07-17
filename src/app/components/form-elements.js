/* eslint-disable react/prop-types */

import React from 'react';

const Label = ({label, forName}) => <label htmlFor={forName} className="form-label">{label}</label>;

const FormError = ({error}) => error ? <div className="input-feedback">{error}</div> : null;

export const Field = ({type, classes = [], children, error}) => (
    <div className={['form-field', type, ...classes].join(' ')}>
        {children}
        <FormError error={error}/>
    </div>
);

export const Input = ({label, id, type, error, classes = [], ...props}) => (
    <Field type={type} error={error}>
        <Label label={label} forName={id}/>
        <input {...props} id={id} type={type} className={['form-input', ...classes].join(' ')}/>
    </Field>
);

export const TextArea = ({label, id, error, classes = [], ...props}) => (
    <Field type='text-area' error={error}>
        <Label label={label} forName={id}/>
        <textarea {...props} id={id} className={['form-text-area', ...classes].join(' ')}/>
    </Field>
);

export const Select = ({label, id, error, classes = [], options = [], initialField = 'Select an option', ...props}) => {
    return (
        <Field type='select' error={error}>
            <Label label={label} forName={id}/>
            <select {...props} className={['form-select', classes].join(' ')}>
                <option value="-1">{initialField}</option>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </Field>
    );
};

