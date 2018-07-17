/* eslint-disable indent */
import {data, notFound} from '../data/index.js';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchPage = (page = 'home') => {
    return delay(500).then(() => {
        if (Math.random() < 0.9) {
            if (data.pages.hasOwnProperty(page)) {
                return data.pages[page];
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
