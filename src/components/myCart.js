import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCartDispatch, useCartState } from "../context/CartContext";

const MyCart = () => {
  const { myCart, isOpen } = useCartState();
  const dispatch = useCartDispatch();
  const handleClose = () => dispatch({ type: "closeCart" });

  const all = myCart.map((item) => (
    <div className="d-flex">
      <img src={item.imgUrl} alt="" height="90" width="120" />
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        <div className="d-flex flex-column">
          <span>{item.name}</span>
          <span className="text-muted">{item.price} $</span>
        </div>
        <span>{item.quantity}</span>
      </div>
    </div>
  ));
  return (
    <Offcanvas show={isOpen} placement={"end"} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex flex-column justify-content-between h-100">
          <div>{all}</div>
          <span>Sum Total:-</span>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MyCart;
