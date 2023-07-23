import { useState } from "react";
import { useCartDispatch, useCartState } from "../../context/CartContext";
import EditProductItem from "./EditProductItem";

export default function EditProduct() {
  const { allCart, mode } = useCartState();
  const dispatch = useCartDispatch();
  const [data, setData] = useState(allCart);

  const handleUpdate = (item, updatedData) => {
    const cloneItems = [...data];
    const ind = cloneItems.indexOf(item);
    cloneItems[ind] = { ...cloneItems[ind], ...updatedData };
    setData(cloneItems);
    dispatch({ type: "updateItems", payload: cloneItems });
  };
  const handleDelete = (item) => {
    const cloneItems = [...data];
    const cloneAfterDelete = cloneItems.filter(
      (cloneItem) => cloneItem.id !== item.id
    );
    setData(cloneAfterDelete);
    dispatch({ type: "updateItems", payload: cloneAfterDelete });
  };
  const allProduct =
    data.length > 0 &&
    data.map((item, index) => (
      <EditProductItem
        item={item}
        index={index}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    ));

  return (
    <div className="edit-products">
      <h3 className="text-center my-3">Edit Products</h3>
      <table
        className={`table table-striped w-75 m-auto ${
          mode === "dark" ? "bg-card-dark text-white input-light " : ""
        }`}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th width="25%">Price</th>
            <th>Image</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{allProduct}</tbody>
      </table>
    </div>
  );
}
