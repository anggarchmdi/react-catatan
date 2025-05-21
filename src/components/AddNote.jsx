import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function AddNote() {
  return (
    <div className='fixed bottom-5 right-5 text-white'>
        <div className="text-5xl transition-all transform hover:scale-90 duration-300 hover:cursor-pointer animate-pulse">
          <div className="absolute -z-10 bottom-2 left-2 w-8 h-8 bg-emerald-500 duration-300 rounded-full animate-ping"></div>
          <Link to='/add'>
            <IoIosAddCircle title='tambah' />
          </Link>
        </div>
    </div>
  )
}

export default AddNote