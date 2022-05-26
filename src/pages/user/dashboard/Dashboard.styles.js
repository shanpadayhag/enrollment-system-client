import styled from 'styled-components';

export const DashboardBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DashboardColumn = styled.div`
  flex: 1;
`;

export const DashboardSectionContainer = styled.div`
  background: rgba(255, 255, 255, 20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 20px 30px;
`;

export const DashboardSectionTitle = styled.h2`
  color: #ffffff;
`;
