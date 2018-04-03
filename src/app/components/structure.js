import React from 'react'

export const Container = ({classes = [], children}) =>
    <div className={"container " + classes.join(" ")}>{children}</div>;

export const Row = ({children}) => <div className={"row"}>{children}</div>;

export const Column = ({span, children}) =>
    <div className="row">
        <div className={"column " + span}>
            <div>
                {children}
            </div>
        </div>
    </div>
;