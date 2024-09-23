import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import FavoriteBtn from "../favorite/FavoriteBtn";

/*receives the arr of product obj:s as prop  */
function ProductCard({ products }) {
  return (
    <div className="flex flex-wrap gap-x-6 justify-around 2xl:justify-between gap-y-4">
      {/**map out products and create a card for each product */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col relative rounded-xl text-black w-[300px]"
        >
          <Link href={`/product/${product.id}`}>
            <div className="relaitve">
              <div className="w-full pt-10 h-[360px]">
                <Image
                  src={product.image}
                  width={280}
                  height={360}
                  alt={product.title}
                  className="bg-center bg-cover bg-no-repeat hover:scale-105"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </Link>
          <div className="py-4 rounded-b-xl h-[200px] justify-between w-[300px] flex flex-col gap-2">
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-blue-900 text-[18px] pr-6">
                {product.title}
              </h3>

              {product.category}
              {/**  <p>{product.description}</p>*/}
              <span className="font-semibold"> {product.price} £</span>
              <span className="absolute top-2 right-2 flex flex-row items-center gap-1">
                {product.rating.rate}
                <FaStar />
              </span>
            </Link>
            <div className="absolute right-0 mt-1">
              <FavoriteBtn product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
