/* eslint-disable react/prop-types */

import React from 'react';

const Label = ({label, forName}) => <label htmlFor={forName} className="form-label">{label}</label>;

export const Input = ({input, label, type, classes = [], meta: {touched, error}}) => (
    <div className={['form-field', 'input', ...classes].join(' ')}>
        <Label label={label} forName={input.name}/>
        <div>
            <input {...input} type={type} placeholder={label}
                   className={['form-input', touched && error ? 'form-error' : ''].join(' ')}/>
            {touched && error && <p className='form-error'>{error}</p>}
        </div>
    </div>
);

export const TextArea = ({input, label, classes = [], meta: {touched, error}}) => (
    <div className={['form-field', 'text-area', ...classes].join(' ')}>
        <Label label={label} forName={input.name}/>
        <div>
            <textarea {...input} placeholder={label} className={[touched && error ? 'form-error' : ''].join(' ')}/>
            {touched && error && <p className='form-error'>{error}</p>}
        </div>
    </div>
);

export const Select = ({input, label, classes = [], options = [], initialField = 'Select option', meta: {touched, error}}) => {
    return (
        <div className={['form-field', 'select', ...classes].join(' ')}>
            <Label label={label} forName={input.name}/>
            <select {...input} className={[touched && error ? 'form-error' : ''].join(' ')}>
                <option value="-1">{initialField}</option>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
            {touched && error && <p className='form-error'>{error}</p>}
        </div>
    );
};
