import React, { useState } from "react";

function Calculator() {
  const [num, setNum] = useState(0);
  function increase() {
    const newNum = num + 1;
    setNum(newNum);
  }

  function decrease() {
    const newNum = num - 1;
    setNum(newNum);
  }
  return (
    <>
      <button onClick={decrease}>decrease</button>
      <p>{num}</p>
      <button onClick={increase}>increase</button>
    </>
  );
}

export default Calculator