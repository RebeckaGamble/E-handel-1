import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Header() {
  return (
    <div className="h-[60px] fixed text-gray-900 w-full bg-gray-50 z-10 shadow-lg">
      <div className="flex flex-row h-full items-center justify-between max-w-[90rem] mx-auto px-4 2xl:px-0 align-center">
        <Link href="/" className="flex flex-row items-center gap-1">
          <h3 class="text-xl font-bold bg-gradient-to-b from-black via-gray-600 to-gray-900 bg-clip-text text-transparent">
            GroupOne
          </h3>
        </Link>

        <div>
          <Navigation />
        </div>
        <Link href="/cart">
          <HiOutlineShoppingCart
            size={20}
            color="black"
            className="fill-white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
