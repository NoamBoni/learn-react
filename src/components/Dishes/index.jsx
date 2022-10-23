import React, { useState } from "react";

import Dish from "./Dish";
import CreateNewDish from "./CreateNewDish";

const RAW_DISHES = [
  {
    id: 1,
    title: "Shnitzel",
    price: 50,
    imgSrc:
      "https://www.bishuli.co.il/wp-content/uploads/2013/05/schnitzel.jpg",
  },
  {
    id: 2,
    title: "shawarma",
    price: 40,
    imgSrc:
      "https://gal-gefen.co.il/wp-content/uploads/2022/04/%D7%A9%D7%95%D7%95%D7%90%D7%A8%D7%9E%D7%94-4-pixabay.jpg",
  },
];

export default function Dishes() {
  const [dishes, setDishes] = useState(RAW_DISHES);

  function addDish(dish) {
    setDishes([...dishes, dish]);
  }

  function removeDish(id){
    setDishes(dishes.filter(dish => dish.id !== id))
  }

  return (
    <>
      <CreateNewDish addDish={addDish} />
      <br />
      <br />
      <br />
      {dishes.map((dish) => (
        // <Dish title={dish.title} price={dish.price} imgSrc={dish.imgSrc} />
        <Dish removeDish={removeDish} key={dish.id} {...dish} />
      ))}
    </>
  );
}
