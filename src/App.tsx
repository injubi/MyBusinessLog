import React from "react";
import Calendar from "./components/Calendar";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Calendar />
      </div>
    </>
  );
}

export default App;
