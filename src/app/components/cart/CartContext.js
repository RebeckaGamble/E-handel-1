'use client';

import React, { createContext, useContext, useState } from "react";

// Skapa CartContext
const CartContext = createContext();

// Custom hook för att använda CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartProvider som omsluter komponenter som behöver tillgång till cart state
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.find((item) => item.id === product.id);
      if (itemExist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };


 const addToFavorite = (product) => {
    setFavorite((prevFav) => {
      const isFavorite = prevFav.some((item) => item.id === product.id);
      if (!isFavorite) {  
      return [...prevFav, { ...product, quantity: 1 }];
      }
      return prevFav;
    });
  };
  const removeFromFavorite = (product) => {
    setFavorite((prevFav) => prevFav.filter((item) => item.id !== product));
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        addToFavorite,
        favorite,
        removeFromFavorite
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
