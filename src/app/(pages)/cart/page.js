import Link from "next/link";
import React from "react";

function Cartpage() {
  return (
    <div className="w-full h-10 ">
      <p className="pt-10">Cart</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}

export default Cartpage;
