import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Auraka from "../fonts/Auraka.ttf"
import NeuropolX from "../fonts/NeuropolX_regular.ttf"

const GlobalStyle = createGlobalStyle`

  @font-face {
        font-family: 'Auraka';
        src: url(${Auraka}) format('truetype');
        font-weight: 200;
  }
  @font-face {
      font-family: 'NeuropolX';
      src: url(${NeuropolX}) format('truetype');
      font-weight: 500;
  }
    
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