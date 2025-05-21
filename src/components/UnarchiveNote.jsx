import PropTypes from 'prop-types';
import React from 'react'
import { MdOutlineUnarchive } from "react-icons/md";


function UnarchiveNote({id, onUnarchive}) {
  return (
    <div className='absolute bottom-5 right-12 rounded-full'>
    <button
      onClick={() => onUnarchive(id)}
      className="text-4xl text-white transition-all transform hover:scale-90 duration-300" title='tampilkan?'
    >
      <MdOutlineUnarchive />
    </button>
    </div>
  )
}

UnarchiveNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveNote