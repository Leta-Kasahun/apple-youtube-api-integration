import { FaApple, FaSearch, FaShoppingBag, FaTimes,FaBars } from 'react-icons/fa'
import { useState } from 'react'
function AppleNavbar() {
  const [menuOpen, setMenuOpen] =useState(false);
  return (
    <nav className=" text-gray-50 px-2 py-2 flex items-center justify-between relative bg-gray-700 ml-0 shadow-lg">
      <div className="flex items-center gap-8">
        <FaApple className="text-xl hover:text-white cursor-pointer" />
      <div className='hidden md:flex items-center gap-8'>
        <a href="#" className="hover:text-white text-sm">Store</a>
        <a href="#" className="hover:text-white text-sm">Mac</a>
        <a href="#" className="hover:text-white text-sm">iPad</a>
        <a href="#" className="hover:text-white text-sm">iPhone</a>
        <a href="#" className="hover:text-white text-sm">Watch</a>
        <a href="#" className="hover:text-white text-sm">AirPods</a>
        <a href="#" className="hover:text-white text-sm">Support</a>
      </div>
      </div>
      <div className="flex items-center gap-6">
        <FaSearch className="text-lg hover:text-white cursor-pointer hidden md:block" />
        <FaShoppingBag className="text-lg hover:text-white cursor-pointer hidden md:block"/>
        <button className='text-xl md:hidden focus:outline-none'onClick={()=>setMenuOpen(!menuOpen)}>
          {menuOpen ?<FaTimes className='hover:text-white'/> : <FaBars className='hover:text-white'/>}
        </button>
      </div>
      {menuOpen && (
        <div className='absolute top-full w-full bg-gray-400 flex flex-col items-center py-4 md:hidden z-20'>
         <a href="#" className="py-2 hover:text-white text-sm">Store</a>
          <a href="#" className="py-2 hover:text-white text-sm">Mac</a>
          <a href="#" className="py-2 hover:text-white text-sm">iPad</a>
          <a href="#" className="py-2 hover:text-white text-sm">iPhone</a>
          <a href="#" className="py-2 hover:text-white text-sm">Watch</a>
          <a href="#" className="py-2 hover:text-white text-sm">AirPods</a>
          <a href="#" className="py-2 hover:text-white text-sm">Support</a>
          <div className="flex gap-6 mt-4">
            <FaSearch className="text-lg hover:text-white cursor-pointer" />
            <FaShoppingBag className="text-lg hover:text-white cursor-pointer" />
          </div>
        </div>

      )}
    </nav>
  )
}

export default AppleNavbar