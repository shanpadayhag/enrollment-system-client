import React from 'react';

import { LoginBody, Container, Logo, HeaderText, SubHeaderText } from './Login.styles';
import { Button, Form, InputField, Link } from 'components/forms';
import { BUTTON, TERTIARY } from 'constants/components/form.constants';

const LoginComponent = ({
                          login,
                          username,
                          setUsername,
                          password,
                          setPassword
                        }) => (
  <LoginBody>
    <Container>
      <Logo/>

      <HeaderText>
        Pangantucan Community College {'\n'}
        <SubHeaderText>Enrollment System</SubHeaderText>
      </HeaderText>

      <Form onSubmit={login}>
        <InputField
          value={username}
          placeholder="Username"
          onChangeText={setUsername}/>

        <InputField
          value={password}
          placeholder="Password"
          type="password"
          onChangeText={setPassword}/>

        <Button>LOGIN</Button>

        <Link theme={TERTIARY} type={BUTTON} to="/signup">
          No Account? Create now
        </Link>
      </Form>

    </Container>
  </LoginBody>
);

export default LoginComponent;
