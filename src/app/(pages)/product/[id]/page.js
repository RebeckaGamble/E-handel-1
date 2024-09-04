import AddToCartBtn from "@/app/components/product/AddToCartBtn";
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
      <div className="max-w-[90rem] px-4 2xl:px-0 relative pb-[60px] pt-[120px] flex flex-col 2xl:flex-row mx-auto items-center justify-center 2xl:justify-between 2xl:items-end">
        <div className="max-w-[800px] 2xl:max-w-[600px]">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="flex flex-col max-w-[700px] 2xl:max-w-[600px]">
          <div className="">
            <h2 className="py-4 text-blue-900 font-semibold text-[24px]">
              {product.title}
            </h2>
            <p>Price: {product.price} £</p>
            <div className="pt-2">
              <ToggleButton
                description={product.description}
                btnTextWhenClosed="Show product description ↓"
                btnTextWhenOpen="Hide product description ↑"
              />
            </div>
            <p className="absolute top-4">
              Rating: {product.rating?.rate}{" "}
              <span className="pl-0.5"> ({product.rating.count}) </span>
            </p>
          </div>
          <div className="pt-6 flex justify-start w-full ">
            {/* Skicka produkten som en prop till AddToCartBtn */}
            <AddToCartBtn product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default singleProductPage;
