import { useState } from "react";
import { useCartDispatch, useCartState } from "../context/CartContext";
import EditProductItem from "./EditProductItem";

export default function EditProduct() {
  const { allCart } = useCartState();
  const dispatch=useCartDispatch();
  const [data, setData] = useState(allCart);

  const handleUpdate = (item,updatedData) => {
    const cloneItems = [...data];
    const ind = cloneItems.indexOf(item);
    cloneItems[ind] = {...cloneItems[ind], ...updatedData};
    setData(cloneItems);
    dispatch({type:"updateItems",payload:cloneItems})
  };
  const handleDelete = (item) => {
    debugger
    const cloneItems = [...data];
   const cloneAfterDelete=cloneItems.filter(cloneItem => cloneItem.id!== item.id);
    setData(cloneAfterDelete);
    dispatch({type:"updateItems",payload:cloneAfterDelete})

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

  console.log("datadatadatadata", data);

  return (
    <>
      <h3 className="text-center my-3">Edit Product</h3>
      <table className="table table-striped w-75 m-auto">
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
    </>
  );
}
