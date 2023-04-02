import React from 'react'

const CardEco = ({title,src}) => {
  return (
    <div className='eco__card'>
        <button className='eco__card-button'>{title}</button>
        <img src={src} alt="eco card img" />
    </div>
  )
}

export default CardEco;