import Image from "next/image";
import Link from "next/link";
import React from "react";

/*receives the arr of product obj:s as prop  */
function ProductCard({ products }) {
  return (
    <div className="flex flex-wrap bg-white justify-around gap-y-10">
      {/**map out products and create a card for each product */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col relative bg-white rounded-xl shadow-md text-black w-[300px] h-[540px]"
        >
          <Link href={`/product/${product.id}`}>
            <div className="w-full pt-10 h-[260px]">
              <Image
                src={product.image}
                width={280}
                height={200}
                alt={product.title}
                className="bg-center bg-cover bg-no-repeat hover:scale-105"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="px-4 bg-gray-100 py-6 rounded-b-xl h-[280px] w-[300px] flex flex-col gap-2">
              <h3 className="font-semibold text-blue-900 text-[18px]">
                {product.title}
              </h3>
              {product.category}
              {/**  <p>{product.description}</p>*/}
              <span>Price {product.price} kr</span>
              <span className="absolute top-2 right-2">Rate: {product.rating.rate}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
