/* eslint-disable react/prop-types,indent */
import React from 'react';
import {FormError, Input} from './form-elements';
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
                     isSubmitting
                 }) => {
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
            <button type="submit" disabled={isSubmitting}>Login</button>
            <FormError error={errors.general}/>
            {isSubmitting ? <p>Checking credentials...</p> : null}
        </Form>
    );
};

LoginForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, setErrors, props: {postCredentials}}
    ) => {
        delete values.redux;
        postCredentials(values).then((response) => {
            setSubmitting(false);
            resetForm();
            if (response.hasOwnProperty('error')) {
                setErrors({general: response.error});
            }
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
            loginForm: fromReducers.getAuth(state),
            isFetching: fromReducers.isFetchingAuth(state),
            isInvalid: fromReducers.authInvalidRequest(state),
            errorMessage: fromReducers.authErrorMessage(state)
        }
    };
};

LoginForm = connect(
    mapStateToLoginFormProps,
    actions
)(LoginForm);

export default LoginForm;
