import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </ul>
  );
};

export default ItemList;
