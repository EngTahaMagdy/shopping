import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useCartDispatch, useCartState } from "../../context/CartContext";
export default function StoreItem({ data }) {
  const {allCart}=useCartState();
  const dispatch=useCartDispatch();
  useEffect(() => {
    debugger
    dispatch({type:"getItemQuantity",payload:{...data}})
  }, [])
  const quantity=allCart.find(item=>item.id==data.id)?.quantity;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={data.imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between mb-4">
          <span className="fs-2">{data.name}</span>
          <span className="text-muted">{data.price.toFixed(2)} $</span>
        </Card.Title>

        {quantity===0 ? (
          <Button
            variant="primary w-100"
            onClick={()=>{
                dispatch({type:"increaseCartQuantity",payload:{...data}})
            }}
          >
            + Add To Cart
          </Button>
        ) : (
          <div className="d-flex justify-content-between w-50 m-auto">
            <button
              className="btn btn-primary"
              onClick={() => dispatch({type:"decreaseCartQuantity",payload:{...data}})}
            >
              -
            </button>
            <span className="mt-2">{quantity} in cart</span>
            <button
              className="btn btn-primary"
              onClick={() => dispatch({type:"increaseCartQuantity",payload:{...data}})}
            >
              +
            </button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}