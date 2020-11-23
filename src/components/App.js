import React from "react";
import AppRouter from "./Router";
import GlobalStyle from "../styles/createGlobalStyle";

function App() {
  return (
      <React.Fragment>
        <GlobalStyle/>
        <AppRouter/>
      </React.Fragment>
  );
}

export default App;
