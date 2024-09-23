"use client";
import React from "react";
import { useCart } from "@/app/components/cart/CartContext";
import AddToCartBtn from "../product/AddToCartBtn";

export default function Favorite() {
  const { favorite, removeFromFavorite } = useCart();

  const handleRemoveFromFavorite = (product) => {
    removeFromFavorite(product);
  };

  return (
    <div className="py-6">
      {favorite.length > 0 ? (
        <>
          <h2 className="font-semibold text-[20px] pb-[44px]">
            {" "}
            Your favourites
          </h2>
          <div className="flex flex-wrap gap-x-14 gap-y-20 justify-start">
            {favorite.map((item) => (
              <div
                key={item.id}
                className="flex h-[580px] w-full relative flex-col max-w-[420px] gap-4"
              >
                <div className="w-[80%] mx-auto pb-4 h-[340px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-center bg-cover bg-no-repeat hover:scale-105"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="py-4">
                  <p className="font-semibold">{item.title}</p>
                  <p>Price: {item.price} £</p>
                </div>

                <div className="flex flex-col w-full gap-4 absolute bottom-0 left-0">
                  <AddToCartBtn product={item} />
                  <button
                    onClick={() => handleRemoveFromFavorite(item.id)}
                    className="bg-red-400 rounded-full text-[18px] font-semibold tracking-wider uppercase text-white px-4 py-2 hover:bg-red-600"
                  >
                    Remove from favourites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p> You have no favourites yet.</p>
        </>
      )}
    </div>
  );
}
