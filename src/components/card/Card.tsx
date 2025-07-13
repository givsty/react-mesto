import React from 'react'
import type { Likes } from '../types/types'


interface CardProps {
  name: string,
  counter: Likes[],
  image: string
}

const Card: React.FC<CardProps> = ({name, counter, image}) => {
  return (
    <li className="places__item card">
      <img className="card__image" src={image} alt="" />
      <button type="button" className="card__delete-button"></button>
      <div className="card__description">
        <h2 className="card__title">
          {name}
        </h2>
        <div className="card__like__container">
          <button type="button" className="card__like-button"></button>
          <span className="card__like-counter">{counter.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card