import React from 'react'
import PropTypes from 'prop-types'

function SearchBar({title, titleChange}) {
  return (
    <div className='w-full'>
        <input type="text" value={title} onChange={(e) => titleChange(e.target.value)} className='text-white w-full bg-transparent border-2 rounded-lg px-3 py-1.5' placeholder='Ketik Berdasarkan title...' />
    </div>
  )
}
SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.func.isRequired,
}

export default SearchBar