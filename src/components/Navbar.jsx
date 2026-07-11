import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex bg-blue-950 justify-between px-10 py-2 items-center'>
      <h2 className='italic font-semibold text-2xl'>MediaSearch</h2>
      <div className='flex gap-10'>
        <Link className='bg-blue-600 px-3 py-1 rounded text-white  active:scale-95 hover:bg-blue-500' to='/'>Search</Link>
        <Link className='bg-blue-600 px-3 py-1 rounded text-white active:scale-95 hover:bg-blue-500' to='/collection'>Collection</Link>
      </div>
    </div>
  )
}

export default Navbar
