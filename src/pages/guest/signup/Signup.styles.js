import styled from 'styled-components';
import { BACKGROUND_LOGIN } from 'assets/images';
import { Link } from 'components/forms';

export const SignupBody = styled.div`
  height: 100vh;
  background-image: url(${BACKGROUND_LOGIN});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupTitle = styled.h2`
  margin-bottom: 20px;
  color: #ffffff;
`;

export const SignupFormContainer = styled.div`
  background: rgba(255, 255, 255, 20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 20px 30px;
  width: 240px;
`;

export const SignupToLoginLink = styled(Link)`
  color: #ffffff;
`;
