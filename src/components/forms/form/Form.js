import React from 'react';
import { PrimaryForm } from './Form.styles';

const Form = (props) => {
  const { children, onSubmit, ...formProps } = props;

  formProps.onSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return <PrimaryForm {...formProps}>{children}</PrimaryForm>;
};

export default Form;
