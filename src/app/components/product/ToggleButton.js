"use client";
import React, { useState } from "react";

function ToggleButton({ btnText, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState); //toggle state
  };
  return (
    <div>
      <button className="text-blue-900" onClick={handleClick}>{btnText}</button>
      {isOpen && <p>{description}</p>}
    </div>
  );
}

export default ToggleButton;
