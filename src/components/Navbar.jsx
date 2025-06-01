import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';
import { FaFileArchive } from "react-icons/fa";

function Navbar() {
  return (
    <div className="fixed top-0 z-10 bg-gray-900 text-white w-full text-2xl flex justify-between items-center underline border-b">
        <div className="px-4 py-4">
        <Link to='/'>
            <h1 className='font-semibold lg:text-3xl '>Aplikasi Pencatatan</h1>
        </Link>
        </div>
        <div className="px-8 py-4 transition-all transform hover:scale-95 duration-300 hover:cursor-pointer">
            <Link to='/archive'>
           <FaFileArchive title='Arsip' />
            </Link>
        </div>
    </div>
  );
}
 
export default Navbar;