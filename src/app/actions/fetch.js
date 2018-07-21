const fetchData = (apiCall, isFetching, {REQUEST, SUCCESS, INVALID, FAILURE}) => (values) => (dispatch, getState) => {
    if (isFetching(getState(), values)) {
        return Promise.resolve();
    }
    dispatch({
        type: REQUEST,
        values: values
    });
    return apiCall(values).then(
        response => {
            if (!response.error) {
                dispatch({
                    type: SUCCESS,
                    values: values,
                    response: response.data
                });
            } else {
                dispatch({
                    type: INVALID,
                    values: values,
                    message: response.error
                });
            }
        },
        error => {
            dispatch({
                type: FAILURE,
                values: values,
                message: error.message || 'Something went wrong'
            });
        });
};

export default fetchData;
