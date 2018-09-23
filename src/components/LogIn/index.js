import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import WrapperLogIn from './WrapperLogIn';

const required = value => value ? undefined : 'Required'
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue4 = minValue(4)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Fragment>
    <label>{label}</label>
    <input {...input} type={type}/>
    {touched && (error && <span>{error}</span>)}
  </Fragment>
)

const LogIn = ({ loading, handleSubmit, pristine, submitting, invalid }) => (
  <WrapperLogIn>
    {loading && <h5>Loading...</h5>}
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        component={renderField} label="Username"
        validate={[ required, email ]}
      />
      <Field name="password" type="password"
        component={renderField} label="Password"
        validate={[ required, minValue4 ]}
      />
      <button type="submit" disabled={ submitting || pristine || invalid }>Log In</button>
    </form>
  </WrapperLogIn>
)

LogIn.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool
};

export default LogIn;
