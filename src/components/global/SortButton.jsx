import React from "react";

export default function SortButton({ setData, callback }) {
  function sort() {
    setData((data) => {
      data.sort(callback);
      return [...data];
    });
  }

  return <button onClick={sort}>sort</button>;
}
