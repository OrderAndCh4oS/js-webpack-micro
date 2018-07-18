/* eslint-disable react/prop-types */

import React from 'react';

const Label = ({label, htmlFor}) => <label htmlFor={htmlFor} className="form-label">{label}</label>;

const FormError = ({error}) => error ? <p className="form-error">{error}</p> : null;

export const Field = ({type, classes = [], children, error, name}) => (
    <div className={['form-field', type, ...classes].join(' ')}>
        {children}
        <FormError error={error} name={name}/>
    </div>
);

export const Input = ({label, name, type, error, classes = [], ...props}) => (
    <Field type={type} error={error}>
        <Label label={label} htmlFor={name}/>
        <input {...props} id={name} name={name} type={type}
               className={['form-input', error ? 'form-error' : '', ...classes].join(' ')}/>
    </Field>
);

export const TextArea = ({label, name, error, classes = [], ...props}) => (
    <Field type='text-area' error={error}>
        <Label label={label} htmlFor={name}/>
        <textarea {...props} id={name} name={name}
                  className={['form-text-area', error ? 'form-error' : '', ...classes].join(' ')}/>
    </Field>
);

export const Select = ({label, name, error, classes = [], options = [], initialField = 'Select an option', ...props}) => {
    return (
        <Field type='select' error={error}>
            <Label label={label} htmlFor={name}/>
            <select {...props} id={name} name={name}
                    className={['form-select', error ? 'form-error' : '', classes].join(' ')}>
                <option value="">{initialField}</option>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </Field>
    );
};

export const Switch = ({value = false, label, name, error, classes = [], onChange, onBlur, ...props}) => {
    classes = ['switch', classes, value ? 'on' : ''].join(' ');
    const title = [value ? 'on' : 'off'].join(' ');
    return (
        <Field type='switch' error={error}>
            <Label label={label} htmlFor={name}/>
            <button type='button' id={name} title={title} className={classes}
                    onBlur={() => {
                        onBlur(true);
                    }}
                    onClick={() => {
                        onChange(name, !value);
                    }}
                    {...props}
            />
        </Field>
    );
};