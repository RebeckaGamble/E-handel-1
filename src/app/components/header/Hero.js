import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-full flex h-auto max-h-[800px]  ">
        <Image
          src="/images/hero2.jpg"
          alt="group one hero"
          width={400}
          height={400}
          className="bg-cover bg-no-repeat bg-center w-full h-auto"
        />
      </div>
      <h1 className="absolute top-[-14px] text-[7vh] text-center bg-gradient-to-b from-black via-gray-600 to-gray-900 bg-clip-text text-transparent">
        GroupOne
      </h1>
    </div>
  );
}

export default Hero;
