import React, { useState } from "react";

import Todos from "./components/Todos";
import Calculator from "./components/Calculator";
import Title from "./components/Title";
import Dishes from "./components/Dishes";

function App() {
  return (
    <>
      <h2>learn js</h2>
      <p>react is fun</p>
      <Todos />
      {/* 

      <Calculator /> */}
      <Dishes />
    </>
  );
}

export default App;
