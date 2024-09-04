"use client";
import React, { useState } from "react";

function ToggleButton({ btnTextWhenClosed, btnTextWhenOpen, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState); //toggle state
  };
  return (
    <div>
      <button className="text-blue-900" onClick={handleClick}>
        {!isOpen ? ( <p>{btnTextWhenClosed}</p> ) : (<p>{btnTextWhenOpen}</p>)}</button>
      {isOpen && <p className="max-w-[500px] pt-1">{description}</p>}
    </div>
  );
}

export default ToggleButton;
