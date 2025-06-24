import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-slate-800 flex justify-between items-center h-16 text-white">
        <div className='logo font-bold text-4xl px-40'>
            <span className='text-green-700'>&lt;</span>
            pass
            <span className='text-green-700'>OP/&gt;</span>
        </div>
      {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul> */}
      <div className="github px-40">
        <img className='invert' width={50} src="icons/github.png" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
