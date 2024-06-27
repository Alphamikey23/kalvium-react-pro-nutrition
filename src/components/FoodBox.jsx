import React, { useState, useEffect } from "react";

export const FoodBox = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedItems, setAddedItems] = useState([]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const addItem = () => {
    const newItem = {
      name: food.name,
      quantity: quantity,
      totalCalories: quantity * food.cal,
    };

    setAddedItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === food.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === food.name
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalCalories: item.totalCalories + quantity * food.cal,
              }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });

    setQuantity(1);
  };

  const removeItem = (itemName) => {
    setAddedItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addItem}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="media-right">
          {addedItems.map((item, index) => (
            <div className="added-item" key={index}>
              <p>{`${item.quantity} ${item.name} = ${item.totalCalories} calories`}</p>
              <button
                className="button is-danger"
                onClick={() => removeItem(item.name)}
              >
                Reset
              </button>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};
