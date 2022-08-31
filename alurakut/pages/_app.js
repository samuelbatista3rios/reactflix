/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset Css */
  * {
    margin:0;
    padding: 0%;
    box-sizing: border-box;
  }


body{
  font-family: sans-serif ;
  background-color: #120a8f ;
}

#__next {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}
`;
const theme = {
  colors: {
    primary: 'red',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
