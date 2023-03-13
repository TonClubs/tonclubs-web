import { createGlobalStyle } from "styled-components";
import { fontsCss } from "./fonts";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  
  #__next,
  html,
  body {
    position: relative;
    height: 100%;
    background: #1e1d24;
    
  }
  body {
    color:#fff;
    background-color: #F2F2F2;
    font-family: 'Campton', sans-serif;
    font-style: normal;
    font-weight: 400;
  }
  
  textarea,
  input,
  button{
    font-family: 'Campton', sans-serif;
    font-weight: 400;
  }
  
  a {
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }

  ${fontsCss}
`;

export default GlobalStyles;
