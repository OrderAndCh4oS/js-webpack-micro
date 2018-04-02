import React from 'react'

export const Title = ({tag = "h1", classes = [], children}) => {
    {
        const HeadingTag = `${tag}`;
        return (<HeadingTag className={"title " + classes.join(" ")}>{children}</HeadingTag>);
    }
};

export const Pretitle = ({classes = [], children}) => <p className={"pretitle " + classes.join(" ")}>{children}</p>;

export const IntroText = ({classes = [], children}) => <p className={"intro-text " + classes.join(" ")}>{children}</p>;

export const Text = ({classes = [], children}) => <p className={"text " + classes.join(" ")}>{children}</p>;
