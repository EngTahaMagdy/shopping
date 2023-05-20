export function CartReducer(state, action) {
    switch (action.type) {
      case "getItemQuantity": {
        if (
          state.allCart?.find((item) => item.id === action.payload.id) ===
          undefined
        ) {
          return {
            ...state,
            allCart: [
              ...state.allCart,
              {
                ...action.payload,
                quantity: 0,
              },
            ],
          };
        } else {
          return {
            ...state,
            allCart: [
              ...state.allCart,
              {
                  ...action.payload,
                quantity: state.find((item) => item.id === action.payload.id)
                  ?.quantity,
              },
            ],
          };
        }
      }
      case "increaseCartQuantity": {
        let clone = state.allCart;
        let cloneItemIndex = clone.findIndex(
          (item) => item.id === action.payload.id
        );
        clone[cloneItemIndex] = {
          ...action.payload,
          quantity:
            clone.find((item) => item.id === action.payload.id)?.quantity + 1,
        };
        return { ...state, allCart: [...clone] };
      }
      case "decreaseCartQuantity": {
        let clone = state.allCart;
        let cloneItemIndex = clone.findIndex(
          (item) => item.id === action.payload.id
        );
        clone[cloneItemIndex] = {
          ...action.payload,
          quantity:
            clone.find((item) => item.id === action.payload.id)?.quantity - 1,
        };
        return { ...state, allCart: [...clone] };
      }
      case "getMyCart": {
        debugger;
        let cart = state.allCart.filter((item) => item.quantity > 0);
  
        return { ...state, myCart: cart };
      }
      case "getAllQuantity": {
        let sumQuantity = state.allCart.reduce(
          (curr, next) => curr + next.quantity,
          0
        );
        return { ...state, sumAllQuantity: sumQuantity };
      }
      case "openCart": {
        return { ...state, isOpen: true };
      }
      case "closeCart": {
        return { ...state, isOpen: false };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }