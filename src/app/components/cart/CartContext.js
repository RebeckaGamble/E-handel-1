'use client';

import React, { createContext, useContext, useState, useEffect } from "react"; //la till useEffect

// Skapa CartContext
const CartContext = createContext();

// Custom hook för att använda CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartProvider som omsluter komponenter som behöver tillgång till cart state
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([])

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

  const removeFromCart = (id, removeAll = false) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if(item.id === id) {
          if(removeAll || item.quantity === 1){
            return acc; // Ta bort produkten helt!
          }else{
            return[...acc, {...item, quantity: item.quantity - 1}];
          }
      }
      return [...acc, item];
      }, [])
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
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        addToFavorite,
        favorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
