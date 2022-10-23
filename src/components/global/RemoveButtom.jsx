import React from "react";

export default function RemoveButton({ removeFunc, id, color }) {
  function remove() {
    removeFunc(id);
  }

  return (
    <button className={color} onClick={remove}>
      delete
    </button>
  );
}
