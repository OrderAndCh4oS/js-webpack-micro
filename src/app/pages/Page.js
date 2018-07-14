/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';
import * as page from '../reducers/page';

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
        console.log(page, isFetching);
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
    console.log(pageName);
    console.log(state.app[pageName]);
    return {
        page: page.getPage(state.app[pageName], pageName),
        isFetching: page.isFetching(state.app[pageName], pageName),
        errorMessage: page.errorMessage(state.app[pageName], pageName),
        pageName: pageName
    };
};

const CurrentPage = withRouter(connect(
    mapStateToPageProps,
    actions
)(Page));

export default CurrentPage;