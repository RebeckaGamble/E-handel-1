import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useCart } from "../cart/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [searched, setSearched] = useState(""); //search input
  const [highlighted, setHighlighted] = useState(-1); //state for keyboard navigation

  const { push } = useRouter(); //navigate, redirect using push

  const { handleSearch, filteredProducts } = useCart();

  //update search input
  const onSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearched(searchTerm); //when user types, update state
    //call handleSearch and update filtered prod list
    handleSearch(searchTerm);
    setHighlighted(-1); //reset to -1 when user types
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (filteredProducts.length > 0) {
      if (e.key === "ArrowDown") {
        setHighlighted((prevIndex) =>
          prevIndex < filteredProducts.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setHighlighted((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (e.key === "Enter" && highlighted !== -1) {
        //go to single product page when pressing enter
        const selectedProduct = filteredProducts[highlighted];
        if (selectedProduct) {
          push(`/product/${selectedProduct.id}`);
        }
      }
    }
  };

  //auto scroll highlited search result when navigating with keyboard
  useEffect(() => {
    const activeItem = document.getElementById(`result-${highlighted}`);
    if (activeItem) {
      activeItem.scrollIntoView({ block: "nearest" });
    }
  }, [highlighted]);

  return (
    <div>
      <div className="flex flex-row items-center w-full max-w-[600px]">
        <input
          type="text"
          id="SearchInput"
          placeholder="Search"
          value={searched}
          onChange={onSearchChange}
          onKeyDown={handleKeyDown}
          className="border border-slate-200 flex-1 border-r-0 px-2 py-1.5 outline-none"
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="border rounded-md border-slate-200 border-l-0 px-2 py-1.5"
        >
          <FaSearch color="gray" size={24} />
        </button>
      </div>

      <div className="w-full max-w-[600px] h-auto shadow-xl">
        {/**only show if user typed something in the input */}
        {searched.trim() && (
          <div className="w-full max-w-[600px]">
            {/**filtered search output */}
            {filteredProducts.length > 0 ? (
              <ul>
                {filteredProducts.map((product, index) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <li
                      id={`result-${index}`}
                      className={`flex flex-col gap-2 border-b py-4 z-10 ${
                        highlighted === index ? "bg-gray-100" : ""
                      }`}
                    >
                      <div className="flex gap-4 px-2 items-center">
                        <div className="w-[80px] h-[70px]">
                          <Image
                            src={product.image}
                            width={80}
                            height={80}
                            alt={product.title}
                            className="bg-center bg-cover bg-no-repeat hover:scale-105"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                        <h4 className="font-semibold max-w-[520px] ">
                          {product.title}
                        </h4>
                      </div>
                      <p className="w-[80px] font-semibold text-center">{product.price} £</p>
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <>
                <p>No result.. </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;