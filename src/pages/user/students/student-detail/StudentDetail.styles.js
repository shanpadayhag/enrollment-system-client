import styled from 'styled-components';

export const StudentDetailContainer = styled.div`
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

export const StudentDetailLabel = styled.h3`
  margin-top: 20px;
`;

export const StudentDetailColumnContainer = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const StudentDetailColumn = styled.div`
  flex: 1;
`;