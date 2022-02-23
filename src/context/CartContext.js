import React, { useReducer } from "react";

const CartContext = React.createContext();

const reducer = (cartItems, action) => {
  switch (action.type) {
    case "ADD":
      const prevState = [...cartItems];
      prevState.push(action.item);
      return prevState;

    default:
      return cartItems;
  }
};

const initialState = [];

export function CartContextProvider({ children }) {
  const [cartItems, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
