import PropTypes from 'prop-types';
import React from 'react'
import { IoArchive } from "react-icons/io5";

function AddArchive({id, onArchive}) {
  return (
    <div className='absolute bottom-5 right-12'>
        <button className="transition-all transform hover:scale-90 duration-300 px-2 text-white hover:cursor-pointer text-4xl" title='arsipkan?' onClick={() => onArchive(id)}>
            <IoArchive />
        </button>
    </div>
  )
}

AddArchive.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default AddArchive