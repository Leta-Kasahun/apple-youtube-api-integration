import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-600 shadow-lg fixed top-0 w-full z-50">
      <nav className="text-xl text-white font-bold p-6 flex space-x-6 justify-center items-center">
        <Link 
          to="/" 
          className={({ isActive }) => 
            isActive ? "underline text-yellow-300" : "hover:underline"
          }
        >
          Home
        </Link>

        <Link 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "underline text-yellow-300" : "hover:underline"
          }
        >
          About
        </Link>

        <Link 
          to="/service" 
          className={({ isActive }) => 
            isActive ? "underline text-yellow-300" : "hover:underline"
          }
        >
          Service
        </Link>

        <Link 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? "underline text-yellow-300" : "hover:underline"
          }
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Header;
