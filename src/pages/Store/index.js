import React, { useState } from "react";
import StoreItem from "./StoreItem";
import { useCartState } from "../../context/CartContext";
export const Store = () => {
  const { allCart } = useCartState();
  const [data, setData] = useState(allCart);
  const allItems =
    data.length > 0
      ? data.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
            <StoreItem key={index} data={item} />
          </div>
        ))
      : "";
  return (
    <div className="container pt-3">
      <h3 >Store</h3>
      <div className="row">{allItems}</div>
    </div>
  );
};
