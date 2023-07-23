import React, { useEffect, useState } from "react";
import { useCartDispatch, useCartState } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import EditProduct from "./EditProducts";
export const Dashboard = () => {
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
    let data = {
      id: AllItem.length + 1,
      name: itemState.name,
      price: +itemState.price,
      imgUrl: image,
      quantity: 0,
    };
    dispatch({ type: "setItemQuantity", payload: { ...data } });
    setItemState({ name: "", price: "", image: "" });
    setImage("");
    navigate("/store");
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name Is Required"),
    price: yup
      .number("error")
      .positive("Must Be Positive")
      .required("Price Is Required"),
    image: yup.mixed().required("Image Is Required"),
    // .test(
    //   "type",
    //   "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
    //   (value) => {
    //     return (
    //       value &&
    //       (value[0].type === "image/jpeg" ||
    //         value[0].type === "image/bmp" ||
    //         value[0].type === "image/png"||
    //         value[0].type === "image/jpg"
    //         )
    //     );
    //   }
    // ),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      let data = {
        id: AllItem.length + 1,
        name: values.name,
        price: +values.price,
        imgUrl: image,
        quantity: 0,
      };
      dispatch({ type: "setItemQuantity", payload: { ...data } });
      navigate("/store");
    },
  });
  return (
    <div className="container">
      <h3 className="text-center my-3">Add Product</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="group-input">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Item Name"
            //value={itemState.name}
            // onChange={(e) => handleState("name", e.target.value)}
            value={formik.values.name}
            onChange={formik.handleChange}
            className={
              formik.errors.name && formik.touched.name ? "input-error" : ""
            }
          />

          {formik.touched.name && formik.errors.name ? (
            <span className="text-danger">{formik.errors.name}</span>
          ) : (
            ""
          )}
        </div>
        <div className="group-input">
          <label for="price">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter Item Price"
            // value={itemState.price}
            // onChange={(e) => handleState("price", e.target.value)}
            value={formik.values.price}
            onChange={formik.handleChange}
            className={
              formik.errors.price && formik.touched.price ? "input-error" : ""
            }
          />
          {formik.touched.price && formik.errors.price ? (
            <span className="text-danger">{formik.errors.price}</span>
          ) : (
            ""
          )}
        </div>
        <div
          className={`group-input upload-image my-2  ${
            formik.touched.image && formik.errors.image ? "input-error" : ""
          } `}
        >
          <label for="file-upload">Choose file</label>
          <input
            type="file"
            name="image"
            id="file-upload"
            accept="image/x-png,image/gif,image/jpeg"
            //  onChange={(e) => handleState("image", e.target.files[0])}
            value={formik.values.image}
            onChange={(e) => {
              formik.handleChange(e);
              handleState("image", e.target.files[0]);
            }}
          />
          {formik.touched.image && formik.errors.image ? (
            <span className="text-danger">{formik.errors.image}</span>
          ) : (
            ""
          )}

          {itemState.image && (
            <img src={image} width="120" height="120" alt="Item Img" />
          )}
        </div>
        <div className="group-input">
          <button className="btn btn-primary w-100" type="submit">
            {" "}
            {/**onClick={addItem} */}
            Add Item
          </button>
        </div>
      </form>
      <EditProduct />
    </div>
  );
};
