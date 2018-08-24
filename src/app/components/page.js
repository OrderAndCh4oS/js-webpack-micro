/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions/index';
import * as fromReducers from '../reducers';

import {Column} from './elements/structure';
import {IntroText, Pretitle, Text, Title} from './elements/typography';
import ErrorMessage from './error-message';

class Page extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pageName !== this.props.pageName) {
            this.fetchData();
        }
    }

    fetchData() {
        const {pageName, fetchPage} = this.props;
        fetchPage(pageName).then(() => console.log('done!'));
    }

    render() {
        const {page, isFetching, isInvalid, errorMessage} = this.props;
        if (isFetching && !page.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !page.length) {
            return <ErrorMessage><Text>{errorMessage}</Text></ErrorMessage>;
        }

        if (isInvalid && !page.length) {
            return <ErrorMessage title="404 Error"><Text>{isInvalid}</Text></ErrorMessage>;
        }
        return (
            <Column span={12}>
                <Pretitle>{page.pretitle || ''}</Pretitle>
                <Title>{page.title || ''}</Title>
                <IntroText>{page.introText || ''}</IntroText>
                <Text>{page.text || ''}</Text>
            </Column>
        );
    }
}

const mapStateToPageProps = (state, {match}) => {
    const pageName = match.params.page || 'home';
    return {
        page: fromReducers.getPage(state),
        isFetching: fromReducers.isFetchingPage(state, pageName),
        isInvalid: fromReducers.pageInvalidRequest(state),
        errorMessage: fromReducers.pageErrorMessage(state),
        pageName: pageName
    };
};

const CurrentPage = withRouter(connect(
    mapStateToPageProps,
    actions
)(Page));

export default CurrentPage;