import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    box-sizing : border-box;
    outline: 0;
  }

  body {
    text-rendering: optimizeLegability !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif
  }

`;

export default GlobalStyle;
