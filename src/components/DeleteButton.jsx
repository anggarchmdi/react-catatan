import PropTypes from 'prop-types';
import React from 'react'
import { MdDelete } from "react-icons/md";

function DeleteButton({id, onDelete}) {
  return (
    <div className='bottom-5 right-3 text-white absolute'>
      <button className="transition-all transform hover:scale-90 duration-300 text-white hover:cursor-pointer text-4xl" title='hapus catatan?' onClick={() => onDelete(id)}>
      <MdDelete />
      </button>
    </div>
  )
}
DeleteButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;