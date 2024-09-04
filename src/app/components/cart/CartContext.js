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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('currentUser');
    if (email) {
      setCurrentUser(email);
      const storedCart = JSON.parse(localStorage.getItem(`${email}_cart`)) || [];
      setCartItems(storedCart);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`${currentUser}_cart`, JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

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


   // Login
   const login = (email) => {
    localStorage.setItem('currentUser', email);
    setCurrentUser(email);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    clearCart();
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
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
