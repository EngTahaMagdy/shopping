import React, { useEffect, useState } from "react";

const EditProductItem = ({
  item,
  index,
  handleDelete,
  handleUpdate,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    price: "",
    name: "",
  });
  const handleChange = (e, name) => {
    setUpdatedProduct({
      ...item,
      [name]: name === "price" ? +e.target.value : e.target.value,
    });
  };
  useEffect(() => {
    setUpdatedProduct({name:item.name,price:item.price})
  }, [item])
  
  console.log("item",item);
  return (
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td>
        <input
          type="text"
          name="name"
          value={updatedProduct?.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={updatedProduct?.price}
          onChange={(e) => handleChange(e, "price")}
        />
      </td>
      <td>
        <img src={item.imgUrl} alt="" width={100} height={100} />
      </td>
      <td>
        <button
          className="btn btn-primary p-1 pointer"
          onClick={() => handleUpdate(item, updatedProduct)}
        >
          {" "}
          <i class="fas fa-check text-light" />
        </button>
        <button className="btn btn-danger p-1 pointer mx-2" onClick={()=>handleDelete(item)}>
          {" "}
          <i class="fas fa-trash-alt text-light" />
        </button>
      </td>
    </tr>
  );
};

export default EditProductItem;
