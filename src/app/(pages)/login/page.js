"use client";
import React, { useState, useEffect } from "react";
import CheckoutModal from "@/app/components/checkout/CheckoutModal"; // Återanvänder formuläret för login/registrering från CartPage
import { useCart } from "@/app/components/cart/CartContext"; // Antag att detta innehåller logiken för inloggning och utloggning

const LoginPage = () => {
  const { currentUser, logout } = useCart(); // Antar att currentUser och logout finns i din CartContext
  const [isLoginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setLoginOpen(true);
    }
  }, [currentUser]);

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {currentUser ? (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Logged in as {currentUser}
          </h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Please login or register</h1>
          <button
            onClick={() => setLoginOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Log in
          </button>
          {isLoginOpen && <CheckoutModal onClose={handleLoginClose} />}
        </>
      )}
    </div>
  );
};

export default LoginPage;
