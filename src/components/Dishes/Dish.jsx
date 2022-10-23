import React from "react";

import style from "./Dish.module.css";
import RemoveButton from "../global/RemoveButtom";

function Dish(props) {
  return (
    <div className={style.container}>
      <h6>{props.title}</h6>
      <p>price: {props.price}$</p>
      <img alt="" src={props.imgSrc} />
      <br />
      <RemoveButton
        color={style.deleteButton}
        removeFunc={props.removeDish}
        id={props.id}
      />
    </div>
  );
}

export default Dish;
