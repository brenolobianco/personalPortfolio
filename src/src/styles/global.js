import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  

  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    scroll-behavior:smooth;
   
  
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background:whitesmoke;
  }
  body, input, button, textarea {
    font-family: 'Inter';
  }
  button {
    cursor: pointer;
  }
  `;
