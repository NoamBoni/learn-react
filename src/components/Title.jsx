import React, { useState } from "react";

function Title(props) {
  const [title, setTitle] = useState(props.head);
  const [subtitle, setSubtitle] = useState(props.subtitle);

  function changeHead() {
    setTitle("omri");
  }

  function changeSubtitle(){
    setSubtitle("red")
  }

  return (
    <>
      <h4>{title}</h4>
      <h6 onMouseOver={changeSubtitle} >{subtitle}</h6>
      <button onClick={changeHead}>change head</button>
      <br />
    </>
  );
}

export default Title;
