import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCartDispatch, useCartState } from "../context/CartContext";

const MyCart = () => {
  const { myCart, isOpen,mode } = useCartState();

  const dispatch = useCartDispatch();
  const handleClose = () => dispatch({ type: "closeCart" });
  const all =myCart.length>0?  myCart?.map((item) => (
    <div className="d-flex mb-3" style={{background:" #e7e7e7",borderBottom:"2px solid #09c"}}>
      <img src={item?.imgUrl} alt="" height="90" width="120" />
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        <div className="d-flex flex-column">
          <span>{item.name}</span>
          <span className="text-muted">{item.price} $</span>
        </div>
        <span>{item.quantity}</span>
        <button className="btn text-danger pointer" onClick={()=>dispatch({type:"removeItemInCart",payload:{id:item.id}})}>
        <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )):<div className="no-data">
    <p><i class="fas fa-exclamation-triangle fa-2x"/> No Product Found</p>
  </div>;
  const sumPrice= myCart?.reduce((current,next)=>current+next.price*next.quantity,0)
  return (
    <Offcanvas show={isOpen} placement={"end"} onHide={handleClose} className={`${mode==="light"?"bg-light text-dark":"bg-dark text-light"}`}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="h-100">{all}</div>
          {sumPrice!==0&&<p style={{fontSize:"22px"}}> Total Of Price: <span className="fw-bold text-success"> {sumPrice} $</span></p>}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MyCart;
