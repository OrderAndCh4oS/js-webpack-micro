import React from 'react';
import PropTypes from 'prop-types';


export const Container = ({classes = [], children}) =>
    <div className={'container ' + classes.join(' ')}>{children}</div>;

Container.propTypes = {
    classes: PropTypes.array,
    children: PropTypes.element.isRequired
};

export const Row = ({children}) => <div className={'row'}>{children}</div>;

Row.propTypes = {
    children: PropTypes.element.isRequired
};

export const Column = ({span, children}) =>
    <div className="row">
        <div className={'column ' + span}>
            <div>
                {children}
            </div>
        </div>
    </div>
;

Column.propTypes = {
    span: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
};
