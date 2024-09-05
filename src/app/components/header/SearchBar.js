import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div>
      <div className="flex flex-row items-center">
        <input
          type="text"
          id="SearchInput"
          placeholder="Search"
          className="border border-slate-200 border-r-0 px-2 py-1.5"
        />
        <div className="border border-slate-200 border-r-0 px-2 py-1.5">
          <FaSearch color="slate-200" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
