import React, { useState } from "react";
import items from "../../data/items.json";
import StoreItem from "./StoreItem";
export const Store = () => {
  const [data, setData] = useState(items);
  const allItems =
    data.length > 0
      ? data.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <StoreItem key={index} data={item} />
          </div>
        ))
      : "";
  return (
    <div className="container">
      <h1>Store</h1>
      <div className="row">{allItems}</div>
    </div>
  );
};
