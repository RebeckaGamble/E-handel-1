import ToggleButton from "@/app/components/product/ToggleButton";
import React from "react";

/**fetch product by id  */
async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Product not found");
  }
  return response.json();
}

/*
 *https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
 * Dynamic Segments are passed as the params prop
 */
async function singleProductPage({ params }) {
  const { id } = params; //destructur the id from params

  const product = await fetchProduct(id); //call fetchProduct with id

  /**if no product, show: */
  if (!product) {
    return (
      <div>
        <p>Product not found!</p>
      </div>
    );
  }

  /**if product, show: */
  return (
    <div className="w-full">
      <div className="max-w-[980px] relative py-10 flex flex-col mx-auto items-center justify-center">
        <div className="max-w-[400px]">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="w-[60%]">
          <h2 className="py-4 text-blue-900 font-semibold text-[24px]">
            {product.title}
          </h2>
            <p>Price: {product.price} kr</p>
          <div className="pt-2">
            <ToggleButton
              description={product.description}
              btnText="Show product description ↓"
            />
          </div>
          <p className="absolute top-4">Rating: {product.rating?.rate}</p>
        </div>
      </div>
    </div>
  );
}

export default singleProductPage;
