import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
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
        background: white;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
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
        background: white;
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