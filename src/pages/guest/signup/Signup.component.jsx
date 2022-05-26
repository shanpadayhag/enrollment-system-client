import React from 'react';
import { SignupBody, SignupFormContainer, SignupTitle, SignupToLoginLink } from './Signup.styles';
import { Button, Form, InputField } from 'components/forms';
import { TERTIARY } from 'constants/components/form.constants';

const SignupComponent = (props) => (
  <SignupBody>
    <SignupFormContainer>
      <SignupTitle>Signup now</SignupTitle>

      <Form onSubmit={props.signupUser}>
        <InputField placeholder="First name" value={props.firstName} onChangeText={props.setFirstName}/>

        <InputField placeholder="Middle name" value={props.middleName} onChangeText={props.setMiddleName}/>

        <InputField placeholder="Last name" value={props.lastName} onChangeText={props.setLastName}/>

        <InputField placeholder="Username" value={props.username} onChangeText={props.setUsername}/>

        <InputField placeholder="Password" value={props.password} onChangeText={props.setPassword} type="password"/>

        <Button>Signup</Button>

        <SignupToLoginLink to="/" theme={TERTIARY}>Already have an account? Login now</SignupToLoginLink>
      </Form>
    </SignupFormContainer>
  </SignupBody>
);

export default SignupComponent;
