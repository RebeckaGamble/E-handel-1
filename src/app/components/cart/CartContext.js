"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Skapa CartContext
const CartContext = createContext();

// Custom hook för att använda CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartProvider som omsluter komponenter som behöver tillgång till cart state
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]); //empty arr - to store fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // stores result from searchbar
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [counter, setCounter] = useState(0);

  /*fetch data from fakestoreapi */
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json(); //convert json to js obj

        setProducts(result); //update products state with result from api
        // console.log("fetched products", result);
      } catch (err) {
        console.error("Error fetching products!", err);
      }
    }
    getProducts();
  }, []); //runs when comp is rendered first time

  //searchbar
  const handleSearch = (searchTerm) => { //text user types in
    if (searchTerm.trim() === "") {
      setFilteredProducts(products); // reset to show all products if input is empty
    } else {
      const filtered = products.filter((product) => //filter list, create new arr with title matching the input
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered); // update state with matching search results
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("currentUser");
    if (email) {
      setCurrentUser(email);
      const storedCart =
        JSON.parse(localStorage.getItem(`${email}_cart`)) || [];
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
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  //when adding prod to cart, update count-state - next to cart icon in nav
  useEffect(() => { 
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);//callback func acc init val 0, + current value in cartItem state
    setCounter(totalCount); //update counter-state with tot items in cart
  }, [cartItems]); //run every time cartItems change

  const removeFromCart = (id, removeAll = false) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === id) {
          if (removeAll || item.quantity === 1) {
            return acc; // Ta bort produkten helt!
          } else {
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
        }
        return [...acc, item];
      }, [])
    );
  };

  const removeFromFavorite = (id) => {
    setFavorite((prev) => prev.filter((product) => product.id !== id));
  }

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
    localStorage.setItem("currentUser", email);
    setCurrentUser(email);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        products,
        filteredProducts,
        handleSearch,
        cartItems,
        addToCart,
        counter,
        removeFromCart,
        clearCart,
        addToFavorite,
        favorite,
        removeFromFavorite,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
