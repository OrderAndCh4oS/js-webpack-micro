/* eslint-disable react/prop-types,indent */
import React from 'react';

export const Container = ({classes = [], children}) =>
    <div className={['container', ...classes]}>{children}</div>;

export const ContainerPanel = ({classes = [], children}) =>
    <Container>
        <div className={['panel', ...classes]}>
            {children}
        </div>
    </Container>;

export const Row = ({children}) => <div className={'row'}>{children}</div>;

export const Column = ({span = 12, push = false, classes = [], children}) => {
    classes = [
        'column',
        'col-' + span,
        push ? ' push-' + push : '',
        ...classes
    ];
    return (
        <div className={classes}>
            <div>
                {children}
            </div>
        </div>
    );
};

export const Select = ({options = [], title = 'Select option', classes = [], reset = true, onChange}) => {
    let input;

    return (
        <div className={['field', ...classes]}>
            <select ref={node => input = node} title={title} onChange={() => {
                onChange(typeof options[input.value].value !== 'undefined' ? options[input.value].value : options[input.value]);
                if (reset) {
                    input.selectedIndex = 0;
                }
            }}>
                <option value="-1">{title}</option>
                {options.map((option, index) =>
                    <option key={index} value={index}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export const Table = ({headers = [], rows = [], classes = []}) =>
    <table className={classes}>
        <thead>
        <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {rows.map(
            (row, index) =>
                <tr key={index}>
                    {row.map((data, index) => <td key={index}>{data}</td>)}
                </tr>
        )}
        </tbody>
    </table>;

export const Button = ({object, classes, onClick, children}) =>
    <button onClick={() => onClick(object)} className={classes}>
        {children}
    </button>;

export const Switch = ({object, classes, onClick}) => {
    classes = ['switch', classes, object.isActive ? 'on' : ''].join(' ');
    const title = [object.name + ': ', object.isActive ? 'active' : 'inactive'].join(' ');
    return <button onClick={() => onClick(object)} className={classes} title={title}/>;
};

export const Radio = ({name, value, title, onChange, checked = false}) =>
    <div className="radio">
        <p className="input-label">{title}</p>
        <input type="radio" name={name} value={value} title={title} defaultChecked={checked}
               onChange={
                   (event) => {
                       const target = event.target;
                       onChange(target);
                   }}
        />
    </div>;

export const RadioButton = ({value, text, onClick, checked = false}) =>
    <button className={['radio-button', checked ? 'checked' : ''].join(' ')}
            onClick={() => onClick(value)}
    >
        {text}
    </button>;

export const Input = ({label, value, type = 'text', onChange, children, ...props}) =>
    <div className="text-input">
        <p className="input-label">{label}</p>
        {children}
        <input type={type} value={value} {...props} onChange={onChange}/>
    </div>;
