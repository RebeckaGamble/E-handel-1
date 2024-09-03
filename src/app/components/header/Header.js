import React from 'react'

function Header() {
  return (
    <div className="flex flex-row gap-6 justify-between text-gray-900 w-full bg-gray-100">
        <p>Logo</p>
        <div>
            {/**navigation goes here */}
        </div>
        <p>Cart</p>
    </div>
  )
}

export default Header