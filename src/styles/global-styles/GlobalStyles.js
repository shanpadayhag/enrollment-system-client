import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 768px) {
      :not(svg) {
        font-size: 12px;
      }
    }
  }

  h1 {
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  h3 {
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
