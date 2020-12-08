import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import gothamFont from "../fonts/GothamMedium.ttf"
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Gotham";
    src: url(${gothamFont});
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  ${reset}
  
  a {
    text-decoration: none;
  }
  
  input {
    all: unset;
    appearance: none;
    box-sizing: border-box;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
        position: relative;
        max-width: 500px;
        width: 100%;
        height: 100%;
        margin: auto !important;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
        background-color: #fff;
    }
    
    html,
    body {
        height: 100%;
    }
    
    #wrapper {
        flex: 1;
        overflow-y: auto;
        z-index: 0;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
    }
    
    #root {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    
        position: fixed;
        max-width: 500px;
        width: 100%;
        height: 100%;
    
        overflow: hidden;
    }
`
export default GlobalStyle;