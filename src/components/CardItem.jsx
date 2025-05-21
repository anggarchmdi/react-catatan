import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function CardItem({id, title, createdAt, body}) {
  return (
    <div className='w-80 h-56 text-white p-4'>
        <div className="border-2 border-t-8 p-4 rounded-lg">
        <Link to={`/detailpage/${id}`}>
            <h1 className='text-[1.3rem] underline font-bold w-48 line-clamp-1'>
                {title}
            </h1>
        </Link>
        <h1 className='text-[0.9rem] text-gray-400 w-48 line-clamp-1'>{createdAt}</h1>
        <div className="mt-2">
        <h1 className='text-left line-clamp-4 w-48'>{body}</h1>
        </div>
        </div>
    </div>
  )
}

CardItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default CardItem