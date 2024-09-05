'use client';

import React from 'react';
import Navigation from './Navigation';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { useCart } from '@/app/components/cart/CartContext';

function Header() {
  const { currentUser, logout } = useCart();

  return (
    <div className="h-[60px] fixed text-gray-900 w-full bg-gray-50 z-10 shadow-lg">
      <div className="flex flex-row h-full items-center justify-between max-w-[90rem] mx-auto px-4 2xl:px-0 align-center">
        <Link href="/" className="flex flex-row items-center gap-1 hover:scale-105">
          <h3 className="text-xl font-bold bg-gradient-to-b from-black via-gray-600 to-gray-900 bg-clip-text text-transparent">
            GroupOne
          </h3>
        </Link>  
            <div>
              <Navigation />
            </div>
            <div className='flex flex-row items center gap-5'>
              <div className='flex flex-row items-center gap-5'>
                <Link href="/favorites">
                  <FaRegHeart />
                </Link>
                <Link href="/cart">
                  <BiShoppingBag size={20} color="black" className="hover:color-black" />
                </Link>
              </div>
              {currentUser ? (
                <div className="flex items-center gap-4">
                  <Link href="/cart">
                    <p className='italic mr-2 text-blue-400 hover:underline'>
                      Inloggad som {currentUser}
                    </p>
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Logga ut
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Login/Register
                  </button>
                </Link>
              )}
            </div>
      </div>
    </div>
  );
}

export default Header;

