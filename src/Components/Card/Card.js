import React from 'react'

function Card({ title, img, comment, style }) {
  return (
    <div className={style}>
      <div className='card-text'>
        <h1>{title}</h1>
        <h4>{comment}</h4>
      </div>
      <img className="w-1/2 md:w-full md:px-6"src={img} alt={img} />
    </div>
  )
}

export default Card
