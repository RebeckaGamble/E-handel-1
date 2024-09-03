import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="gap-10 flex">
      <Link href="/" className="hover:font-semibold">
        Home
      </Link>

      <Link href="/cart" className="hover:font-semibold">
        Cart
      </Link>
     
    </nav>
  );
}

export default Navigation;
