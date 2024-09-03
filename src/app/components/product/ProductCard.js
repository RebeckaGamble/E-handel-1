import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";


/*receives the arr of product obj:s as prop  */
function ProductCard({ products }) {
  return (
    <div className="flex flex-wrap gap-x-2 justify-around gap-y-4">
      {/**map out products and create a card for each product */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col relative  rounded-xl text-black w-[300px]"
        >
          <Link href={`/product/${product.id}`}>
            <div className="w-full pt-10 h-[300px]">
              <Image
                src={product.image}
                width={280}
                height={200}
                alt={product.title}
                className="bg-center bg-cover bg-no-repeat group hover:scale-105"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="group py-6 rounded-b-xl h-[200px] justify-between w-[300px] flex flex-col gap-2">
              <h3 className="font-semibold text-blue-900 text-[18px]">
                {product.title}
              </h3>
              {product.category}
              {/**  <p>{product.description}</p>*/}
              <span className="font-semibold"> {product.price} £</span>
              <span className="absolute top-2 right-2 flex flex-row items-center gap-1">{product.rating.rate}<FaStar /></span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
