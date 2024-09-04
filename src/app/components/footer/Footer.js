import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row justify-between items-center w-full bg-slate-700 text-white px-10 py-5'>
      <div>
        <h1 className='font-bold'>Grupp 1</h1>
        <p className='italic font-semibold'>E-handel Fwbu</p>
      </div>
      <div className='text-sm'>
        <h3 className='font-bold'>Deltagare:</h3>
        <ul className='flex items-center gap-3 italic font-light'>
          <li>Rebecka Gamble</li>
          <li>Ahmed</li>
          <li>Gabriel Alejandro</li>
          <li>Rodrigo Sebastian</li>

        </ul>
      </div>
    </div>
  )
}

export default Footer