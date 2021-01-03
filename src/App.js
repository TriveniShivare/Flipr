import React from "react";
import "./App.css";
import StateCounter from "./Components/StateCounter/StateCounter";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <StateCounter />
    </React.Fragment>
  );
}

export default App;
