import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";

function AddToCartBtn() {
  return (
    <button className="uppercase tracking-wider font-semibold text-[18px] bg-blue-900 text-white rounded-full w-full justify-center py-2 flex flex-row items-center gap-1 hover:py-2.5 hover:mt-[-4px] ">
      <TbShoppingBagPlus /> Add to cart{" "}
    </button>
  );
}

export default AddToCartBtn;
