import React, { useState } from "react";

import AddToListForm from "../global/AddtoListForm";

export default function CreateNewDish({ addDish }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [imgSrc, setImgSrc] = useState("");

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  function updatePrice(event) {
    setPrice(event.target.value);
  }

  function updateImgSrc(event) {
    setImgSrc(event.target.value);
  }

  function submitFormHandler() {
    const id = Math.floor(Math.random() * 100000);
    const newDish = {
      id,
      title,
      price,
      imgSrc,
    };
    addDish(newDish);
    setTitle("");
    setPrice(0);
    setImgSrc("");
  }

  return (
    <AddToListForm submitHandler={submitFormHandler} >
      <label>title:</label>
      <input onChange={updateTitle} value={title} type="text" />
      <br />
      <label>price:</label>
      <input onChange={updatePrice} value={price} step={5} type="number" />
      <br />
      <label>image url:</label>
      <input onChange={updateImgSrc} value={imgSrc} type="url" />
    </AddToListForm>
  );
}
