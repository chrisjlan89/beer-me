import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 

 html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
    font-size: 2rem;
    background: #333;
    color: yellow;

}



`;

export default GlobalStyle;
