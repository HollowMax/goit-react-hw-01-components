import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #aaa;
    }
    ul{
      list-style: none;
    }
`;

export const theme = {
  colors: {
    bg: 'white',
  },
};

export const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
