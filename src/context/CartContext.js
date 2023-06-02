import React, { createContext, useContext, useReducer } from "react";
import {CartReducer} from "./reducers/CartReducer"
const CartContext = createContext();
const CartDispatchContext = createContext();


const initialState = {
  allCart: [],
  myCart:JSON.parse(localStorage.getItem("shopping-cart")),
  isOpen: false,
  mode:"light",
};

function useCartState() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
}

function CartProvider({ children }) {

  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, useCartState, useCartDispatch };
