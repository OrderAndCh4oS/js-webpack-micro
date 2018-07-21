/* eslint-disable react/prop-types,indent */
import React from 'react';
import {Input} from './form-elements';
import {Form, withFormik} from 'formik';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as fromReducers from '../reducers';
import * as Yup from 'yup';

let LoginForm = ({
                     redux,
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     isSubmitting,
                     isValid
                 }) => {
    if (redux.didComplete) {
        return <p>Logged in</p>;
    }
    return (
        <Form>
            <Input name="username"
                   label="Username"
                   value={values.username || ''}
                   type="text"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.username && errors.username}
            />
            <Input name="password"
                   label="Password"
                   value={values.password || ''}
                   type="password"
                   classes={['password-field']}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.password && errors.password}
            />
            <button type="submit" disabled={isSubmitting || !isValid}>Login</button>
            {isSubmitting ? <p>Checking credentials...</p> : null}
        </Form>
    );
};

LoginForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, props: {postCredentials}}
    ) => {
        delete values.redux;
        console.log('values', values);
        postCredentials(values).then(() => {
            setSubmitting(false);
            resetForm();
        }).then(() => {
            console.log('done!');
        });
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required!'),
        password: Yup.string()
            .required('Password is required!')
    })
})(LoginForm);

const mapStateToLoginFormProps = (state) => {
    return {
        redux: {
            loginForm: fromReducers.getLoginForm(state),
            isFetching: fromReducers.isFetchingLoginForm(state),
            isInvalid: fromReducers.loginFormInvalidRequest(state),
            errorMessage: fromReducers.loginFormErrorMessage(state)
        }
    };
};

LoginForm = connect(
    mapStateToLoginFormProps,
    actions
)(LoginForm);

export default LoginForm;
