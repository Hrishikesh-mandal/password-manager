import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-slate-800 flex justify-around items-center h-14 text-white">
        <div className='logo font-bold text-2xl'>
            <span className='text-green-700'>&lt;</span>
            pass
            <span className='text-green-700'>OP/&gt;</span>
        </div>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
