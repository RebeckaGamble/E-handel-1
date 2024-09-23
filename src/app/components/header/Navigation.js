import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

function Navigation() {
  return (
    <nav className="gap-10 flex">
      <SearchBar />
    </nav>
  );
}

export default Navigation;
