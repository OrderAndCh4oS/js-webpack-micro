/* eslint-disable indent */
import {data, notFound} from '../data/index.js';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchPage = (page = 'home') => {
    return delay(500).then(() => {
        if (Math.random() < 0.9) {
            if (data.pages.hasOwnProperty(page)) {
                return {data: data.pages[page]};
            } else {
                return notFound;
            }
        }
        throw new Error(`Something went wrong requesting ${page}`);
    });
};

export const postContactForm = (values) => {
    return delay(500).then(() => {
        const errors = {};
        if (!values.hasOwnProperty('username') || values.username !== '') {
            errors['username'] = 'Please provide a username';
        }
        if (!values.hasOwnProperty('email') || values.email !== '') {
            errors['email'] = 'Please provide an email';
        }
        if (!values.hasOwnProperty('message') || values.message !== '') {
            errors['message'] = 'Please provide an message';
        }
        if (errors.length) {
            return errors;
        }
        console.log(values);
        return {data: values};
        //throw new Error(`Something went wrong requesting ${page}`);
    });
};

export const postPlotForm = (values) => {
    console.log('values: ', values);
    return delay(500).then(() => {
        return {data: values};
        //throw new Error(`Something went wrong requesting ${page}`);
    });
};

export const postCredentials = (values) => {
    return delay(500).then(() => {
        const errors = [];
        if (!values.hasOwnProperty('username') || values.username !== '') {
            errors['username'] = 'Please provide a username';
        }
        if (!values.hasOwnProperty('password') || values.password !== '') {
            errors['password'] = 'Please provide a password';
        }
        if (errors.length) {
            return errors;
        }
        if (['admin', 'user'].find(k => k === values.username) && values.password === 'secret') {
            return {data: values};
        } else {
            return {error: 'invalid credentials'};
        }

        //throw new Error(`Something went wrong requesting ${page}`);
    });
};
