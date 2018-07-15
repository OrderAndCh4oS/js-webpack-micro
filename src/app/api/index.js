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
