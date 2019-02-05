import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";
import media from "./media";
const GlobalStyle = createGlobalStyle`

:root {
    --color-primary: #C0E7F0;
    --color-secoundary: #0389ff;
  }

  html,
  body {
    font-family: 'Dubai-Regular', sans-serif;
    text-align:center;
    color: black;
    font-size:18px;
    background-color: #e8e8e8;
    -webkit-tap-highlight-color: transparent; 
    
    ${media.phone`
        font-size:22px;
    `}
    a:visited,a:link{
  color:black;
  text-decoration:none;
}

textarea:required,input:required {
    box-shadow: none;
}
*{
outline: none;

}


  }


 
`;

export default GlobalStyle;
