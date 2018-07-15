/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';
import * as app from '../reducers';

import {Column} from '../components/structure';
import {IntroText, Pretitle, Text, Title} from '../components/typography';

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
        const {page, errorMessage, isFetching} = this.props;
        if (isFetching && !page.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !page.length) {
            return <p>{errorMessage}</p>;
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
        page: app.getPage(state.app),
        isFetching: app.isFetching(state.app),
        errorMessage: app.errorMessage(state.app),
        pageName: pageName
    };
};

const CurrentPage = withRouter(connect(
    mapStateToPageProps,
    actions
)(Page));

export default CurrentPage;