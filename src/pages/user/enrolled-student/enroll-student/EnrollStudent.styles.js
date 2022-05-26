import styled from 'styled-components';
import {Form} from 'components/forms';

export const EnrollStudentFormContainer = styled.div`
  background: rgba(255, 255, 255, 20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 20px 30px;
`;

export const EnrollStudentForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EnrollStudentFormColumn = styled.div`
  flex: 1;
  padding: 30px 20px 0 20px;

  @media (max-width: 768px) {
    padding: 30px 0 0 0;
  }
`;

export const EnrollStudentFormTitle = styled.h1`
  color: #ffffff;
`;