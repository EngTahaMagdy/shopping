import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
export default function StoreItem({ data }) {
  const [isBuy, setIsBuy] = useState(true);
  const [counter, setCounter] = useState(0)
  return (
    <Card>
      <Card.Img
        variant="top"
        src={data.imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{data.name}</Card.Title>
          <span>{data.price.toFixed(2)} $</span>
        </div>
        {isBuy ? (
          <Button variant="primary w-100" onClick={()=>setIsBuy((prev) => !prev)}>
            Buy
          </Button>
        ) : (
            <div className="d-flex justify-content-between w-50 m-auto">
                <button className="btn btn-primary" onClick={()=>setCounter(prev=>prev>0?prev-1:0)}>-</button>
                <span>{counter}</span>
                <button className="btn btn-primary"  onClick={()=>setCounter(prev=>prev+1)}>+</button>
                
            </div>
        )}
        
      </Card.Body>
    </Card>
  );
}
