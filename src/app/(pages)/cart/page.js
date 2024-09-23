'use client';

import React, { useState } from "react";
import { useCart } from "@/app/components/cart/CartContext";
import CheckoutModal from "@/app/components/checkout/CheckoutModal";
import { useRouter } from "next/navigation";

function Cartpage() {
  const { cartItems, addToCart, removeFromCart, clearCart, currentUser, logout } = useCart();
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);  // Korrekt variabelnamn
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  const handleRemoveOneFromCart = (product) => {
    if(product.quantity > 1){ //om produkten är större än 1, minskar kvantitet med 1
      removeFromCart(product.id, false);
    }else{
      removeFromCart(product.id, true);//om kvantiteten är 1, ta bort produkten från kundvagnen helt
    }
  };

  const handleIncreaseQuantity = (product) => {
    //addtoCart för att äka kvantitet 
    addToCart(product);
  }

  const handleCheckOut = () => {
    if (currentUser) {
      setCheckoutOpen(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };



  // Beräkna totalen
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="w-full max-w-[90rem] mx-auto 2xl:px-0 h-full p-10">
      <h2 className="text-2xl mt-10 font-bold mb-6">Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 flex justify-between items-center border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>Price: {item.price} £</p>
                  <div className="flex items-center">
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex flex-col ml-2">
                      <button className="text-blue-900 font-semibold" onClick={() => handleIncreaseQuantity(item)}>
                        ↑
                      </button>
                      <button className="text-blue-900 font-semibold" onClick={() => handleRemoveOneFromCart(item)}>
                        ↓
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold">£{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-6 p-4 border-t">
            <h3 className="text-xl font-bold">Total Amount: {totalAmount.toFixed(2)} £</h3>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      <button onClick={clearCart} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
        Clear Cart
      </button>
      <button
        onClick={handleCheckOut}
        className={`mt-4 ml-4 px-4 py-2 rounded ${currentUser ? 'bg-green-500' : 'bg-blue-500'} text-white`}
      >
        Checkout
      </button>
      {currentUser ? (
        <button onClick={handleLogout} className="mt-4 ml-4 bg-red-500 text-white px-4 py-2 rounded">
          Log out
        </button>
      ) : (
        <button onClick={handleLogin} className="mt-4 ml-4 bg-blue-500 text-white px-4 py-2 rounded">
          Log in
        </button>
      )}
      {isCheckoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}
      {showLoginModal && <CheckoutModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
}

export default Cartpage;
