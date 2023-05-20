import React, { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
const CartDispatchContext = createContext();
const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "getItemQuantity": {
      if (state?.find((item) => item.id === action.payload.id) === undefined) {
        return [...state, { id: action.payload.id, quantity: 0 }];
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            quantity: state.find((item) => item.id === action.payload.id)
              ?.quantity,
          },
        ];
      }
    }
    case "increaseCartQuantity": {
      let clone = state;
      let cloneItemIndex = clone.findIndex((item) => item.id === action.payload.id);
      clone[cloneItemIndex] = {
        id: action.payload.id,
        quantity:
          state.find((item) => item.id === action.payload.id)?.quantity + 1,
      };
      return [...clone];
    }
    case "decreaseCartQuantity": {
        let clone = state;
        let cloneItemIndex = clone.findIndex((item) => item.id === action.payload.id);
        clone[cloneItemIndex] = {
          id: action.payload.id,
          quantity:
            state.find((item) => item.id === action.payload.id)?.quantity - 1,
        };
        return [...clone];
      }
      case "getMyCart":{
        // debugger
        // let x=state.filter((item) => item.quantity > 0)
        // console.log("x",x)
        // return x
      }
    // case "setAllQuantity":{
    //     //return state.reduce((curr,next)=>curr+next.quantity,0)
    // }  
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

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
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, useCartState, useCartDispatch };
