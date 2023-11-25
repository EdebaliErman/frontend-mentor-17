import React from 'react'

function Card({ title, img, comment, style }) {
  return (
    <div className={style}>
      <div>
        <h1>{title}</h1>
        <h4>{comment}</h4>
      </div>
      <img src={img} alt={img} />
    </div>
  )
}

export default Card
