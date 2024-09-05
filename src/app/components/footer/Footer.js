import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex items-center h-auto w-full bg-slate-700 text-white px-10 py-5">
      <div className="flex justify-between w-full max-w-[90rem] mx-auto flex-col sm:flex-row">
        <div className="flex flex-row gap-1.5">
          <Link href="/">
            <h1 className="font-bold">GroupOne </h1>
          </Link>
          -<p className="italic font-semibold">E-commerce</p>
        </div>

        <div className="flex flex-col">
          <p className="italic font-semibold">Social Media</p>
          <ul className="flex flex-row py-2 justify-around items-center">
            <li>
              <a href="#">
                <Image
                  src="/instagram-Icon.svg"
                  width={36}
                  height={36}
                  alt="no image"
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src="/facebook-Icon.svg"
                  width={42}
                  height={42}
                  alt="no image"
                  priority
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm pt-6 sm:pt-0">
          <h3 className="font-bold pb-2">Participants</h3>
          <ul className="grid grid-cols-2 items-center gap-3 italic font-light">
            <li>Rebecka Gamble</li>
            <li>Ahmed</li>
            <li>Gabriel Alejandro</li>
            <li>Rodrigo Sebastian</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
