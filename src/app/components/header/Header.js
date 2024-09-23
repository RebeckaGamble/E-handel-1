"use client";

import React from "react";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "@/app/components/cart/CartContext";

function Header() {
  const { currentUser, logout, counter } = useCart();

  return (
    <div className="h-[60px] fixed text-gray-900 w-full bg-gray-50 z-10 shadow-lg">
      <div className="flex flex-row h-full items-center justify-between max-w-[90rem] mx-auto px-4 2xl:px-0 align-center">
        <Link
          href="/"
          className="flex flex-row items-center gap-1 hover:scale-105"
        >
          <h3 className="text-xl font-bold bg-gradient-to-b from-black via-gray-600 to-gray-900 bg-clip-text text-transparent">
            GroupOne
          </h3>
        </Link>
        <div className="flex flex-row items center gap-5">
        {currentUser ? (
            <div className="flex items-center gap-4">
                {/**
              <Link href="/">
                <p className="italic mr-2 text-blue-400 hover:underline">
                  Inloggad som {currentUser}
                </p>
              </Link>
                 */}
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Login/Register
              </button>
            </Link>
          )}
          <div className="flex flex-row items-center gap-5">
            <Link href="/favorites">
              <FaRegHeart size={20} />
            </Link>
            <div className="flex flex-row relative">
              <Link href="/cart">
                <BiShoppingBag
                  size={24}
                  color="black"
                  className="hover:color-black"
                />
              </Link>
              {counter > 0 ? <div className="absolute px-2 py-0.5 bg-red-600/50 text-white top-[-10px] font-semibold text-[14px] right-[-12px] shadow-xl rounded-full">{counter}</div> : <div></div>}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
