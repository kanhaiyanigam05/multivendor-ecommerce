"use client";
import React, { createContext, useReducer, useEffect } from "react";

// Define initial state
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItemsAdd = [...state.items, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsAdd));
      return { ...state, items: updatedItemsAdd };

    case "REMOVE_ITEM":
      const updatedItemsRemove = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsRemove));
      return { ...state, items: updatedItemsRemove };

    case "CLEAR_CART":
      localStorage.removeItem("cartItems");
      return { ...state, items: [] };

    default:
      return state;
  }
};

// Create CartContext
const CartContext = createContext();

// CartProvider component to wrap your app and provide cart state to children components
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
