'use client';

import React, { useState } from 'react'
import { useCart } from '../cart/CartContext';

const CheckoutModal = ({ onClose }) => {
    const [isLoginMode, setLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [isCheckOutCompleted, setCheckoutCompleted] = useState(false);
    const { login, clearCart, currentUser, cartItems } = useCart();
    const [errorMessage, setErrorMessage] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(isLoginMode){
            //inlogning implementation
            const storedUser = JSON.parse(localStorage.getItem(email));
            if (storedUser && storedUser.password === password) {
                login(email);
                alert("Din inloggning lyckades!");
                setCheckoutCompleted(true);
            } else {
                alert("Ops! fel email eller lösenord!");
            }
        }else{
            const userData = {
                email,
                password,
                name,
                address,
            };
            localStorage.setItem(email, JSON.stringify(userData));
            alert("Ditt konto har skapats! Du kan nu logga in.")
            setLoginMode(true); //Växla till inlogningsform efter registering
        }
    };

    const handleCheckOut = () => {
        if (cartItems.length === 0) {
            setErrorMessage("Ops! Din varukorg är tom.");
            return;
        }
        alert(`tack för ditt köp! vi har skickat dina produkt order till ${currentUser}.`);
        clearCart(); // Tömmer kundvagnen
        setCheckoutCompleted(true); // Ställer in att köpet är slutfört
        onClose();
    }

  return (
    <div className='fixed inset-0 bg-gray-400 bg-opacity-80 flex items-center justify-center p-4'>
    <div className='bg-white rounded-lg p-6 w-full max-w-md relative'>
        <button className='absolute top-2 right-2 text-gray-700 text-xl' onClick={onClose}>X</button>
        {errorMessage && (
                    <div className='bg-red-200 text-red-700 p-2 mb-4 rounded'>
                        {errorMessage}
                    </div>
                )}
        {currentUser ? (
            <>
                <h2 className='font-bold text-2xl mb-4'>Checkout</h2>
                <button
                    onClick={handleCheckOut}
                    className='bg-green-500 text-white px-4 py-2 rounded'
                >
                    Confirm Checkout
                </button>
            </>
        ) : (
            <>
                <h2 className='font-bold text-2xl mb-4'>{isLoginMode ? "Logga in" : "Registrera dig"}</h2>
                <form className='flex flex-col' onSubmit={handleFormSubmit}>
                    {!isLoginMode && (
                        <>
                            <div className='flex flex-col gap-2 mb-2'>
                                <label className='font-semibold'>Namn:</label>
                                <input
                                    className='border rounded-md p-2'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col gap-2 mb-2'>
                                <label className='font-semibold'>Adress:</label>
                                <input
                                    className='border rounded-md p-2'
                                    type='text'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    <div className='flex flex-col gap-2 mb-2'>
                        <label className='font-semibold'>Email:</label>
                        <input
                            className='border rounded-md p-2'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label className='font-semibold'>Lösenord:</label>
                        <input
                            className='border rounded-md p-2'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className='bg-blue-500 text-white p-2 rounded-md mb-4'
                        type='submit'
                    >
                        {isLoginMode ? "Logga in" : "Registrera dig"}
                    </button>
                </form>
                <button className='underline text-blue-600 ml-12' onClick={() => setLoginMode(!isLoginMode)}>
                    {isLoginMode ? "Har du inget konto? Registrera dig här!" : "Har du redan ett konto? Logga in här!"}
                </button>
            </>
        )}
    </div>
</div>
  )
}

export default CheckoutModal