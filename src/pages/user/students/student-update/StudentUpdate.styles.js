import styled from 'styled-components';
import { Form } from 'components/forms';

export const StudentUpdateContainer = styled.div`
  background: rgba(255, 255, 255, 20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;

  color: #ffffff;
`;

export const StudentUpdateLabel = styled.h3`
  margin-top: 20px;
`;

export const StudentUpdateForm = styled(Form)`
  align-items: unset;
`;

export const StudentUpdateColumnContainer = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const StudentUpdateColumn = styled.div`
  flex: 1;
  padding: 10px 30px;
`;
