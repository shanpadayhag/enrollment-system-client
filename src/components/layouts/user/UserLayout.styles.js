import styled from 'styled-components';
import { BACKGROUND_LOGIN } from 'assets/images';

export const UserLayoutBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${BACKGROUND_LOGIN});
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const UserPagesContainer = styled.div`
  display: block;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
`;

export const UserPagesBody = styled.div`
  padding: 30px 50px;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;