/* eslint-disable indent */
import data from '../data/index.js';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchPage = (page = 'home') => {
    return delay(500).then(() => {
        if (data.pages.hasOwnProperty(page)) {
            return data.pages[page];
        }
        throw new Error(`Unknown page: ${page}`);
    });
};
