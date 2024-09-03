import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-full flex h-auto ">
        <Image
          src="/images/hero.jpg"
          alt="group one hero"
          width={400}
          height={400}
          className="bg-cover bg-no-repeat bg-center w-full h-auto"
        />
      </div>
      <h1 className="absolute top-0 text-[10vh] text-center">GroupOne</h1>
    </div>
  );
}

export default Hero;
