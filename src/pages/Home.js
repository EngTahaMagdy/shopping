import React, { useEffect, useState } from "react";
import { useCartDispatch, useCartState } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { allCart } = useCartState();
  const [AllItem, setAllItem] = useState([]);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [itemState, setItemState] = useState({
    name: null,
    price: null,
    image: null,
  });
  const dispatch = useCartDispatch();

  useEffect(() => {
    setAllItem(allCart);
  }, []);

  const handleState = (name, e) => {
    setItemState((curr) => ({ ...curr, [name]: e }));
    if (name === "image") setImage(URL.createObjectURL(e));
  };
  const addItem = () => {
    console.log("Add item Fired");

    let data = {
      id: AllItem.length + 1,
      name: itemState.name,
      price: +itemState.price,
      imgUrl: image,
      quantity: 0
    };
    dispatch({ type: "setItemQuantity", payload: { ...data } });
    setItemState({ name: "", price: "", image: "" });
    setImage("");
    navigate("/store");
  };
  console.log("AllItem080", AllItem);
  return (
    <div className="container">
      <h3>Add Item</h3>
      <div className="group-input">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Item Name"
          value={itemState.name}
          onChange={(e) => handleState("name", e.target.value)}
        />
      </div>
      <div className="group-input">
        <label for="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="Enter Item Price"
          value={itemState.price}
          onChange={(e) => handleState("price", e.target.value)}
        />
      </div>
      <div className="group-input upload-image my-2">
        <label for="file-upload">Choose file</label>
        <input
          type="file"
          name="image"
          id="file-upload"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => handleState("image", e.target.files[0])}
        />
        {itemState.image && (
          <img src={image} width="120" height="120" alt="Item Img" />
        )}
      </div>
      <div className="group-input">
        <button className="btn btn-primary w-100" onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};
