import Favorite from "@/app/components/favorite/Favorite";
import React from "react";

export default function page() {
  return (
    <div className="pt-[60px]">
      <div className="px-4 py-10 2xl:px-0 max-w-[90rem] mx-auto">
        <Favorite />
      </div>
    </div>
  );
}
