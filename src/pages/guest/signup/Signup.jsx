import React, { useState } from 'react';
import SignupComponent from './Signup.component';
import signupApi from 'services/account/signup.api';
import RequestFailedException from 'exceptions/RequestFailedException';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  const signupUser = async () => {
    try {
      const args = {
        username,
        password,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
      };

      const result = await signupApi(args);

      localStorage.setItem('accessToken', result.access_token);

      navigate('/user');
    } catch (error) {
      if (error instanceof RequestFailedException) {
        alert(error.message);
      } else {
        alert('Something went wrong');
      }
    }
  };

  return <SignupComponent
    signupUser={signupUser}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    firstName={firstName}
    setFirstName={setFirstName}
    middleName={middleName}
    setMiddleName={setMiddleName}
    lastName={lastName}
    setLastName={setLastName}/>;
};

export default Signup;
