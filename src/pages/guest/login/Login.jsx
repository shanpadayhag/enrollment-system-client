import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from 'pages/guest/login/Login.component';
import LoginApi from 'services/account/login.api';
import RequestFailedException from 'exceptions/RequestFailedException';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const args = {username, password};
      const result = await LoginApi(args);

      localStorage.setItem('accessToken', result.access_token);

      navigate('/user');
    } catch (e) {
      if (e instanceof RequestFailedException && e.statusCode === 404) {
        alert(e.message);
      }
      alert('Something went wrong');
    }
  };

  const autoLogin = () => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      navigate('/user');
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return <LoginComponent
    login={login}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
  />;
};

export default Login;