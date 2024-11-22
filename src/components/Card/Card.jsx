import React from 'react'
import s from './Card.module.scss'
const Card = ({image, name="soon...", rate="0", price="нету в наличии"}) => {
  return (
    <>
    
    <div className={s.card}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <img src=""alt="" />
        <b>{price}</b>
    </div>
    
        
    </>
  )
}

export default Card