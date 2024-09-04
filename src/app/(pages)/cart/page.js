'use client';
import React from "react";
import { useCart } from "@/app/components/cart/CartContext";


function Cartpage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (id, title) => {
    removeFromCart(id);
    window.alert(`${title} has been removed from your cart.`);
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
              <div
                key={item.id}
                className="mb-4 flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>Price: {item.price} £</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id, item.title)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 p-4 border-t">
              <h3 className="text-xl font-bold">
                Total Amount: {totalAmount.toFixed(2)} £
              </h3>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
        <button
          onClick={clearCart}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
    </div>
  );
}

export default Cartpage;
