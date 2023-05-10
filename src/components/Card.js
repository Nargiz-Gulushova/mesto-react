import React from "react";

function Card ({card, onCardClick}) {
  const {name, link, likes} = card;
  const handleClick = () => {
    onCardClick(card);
  }
  
  return (
    <li className="mesto__item">
      <button className="mesto__delete-button" aria-label="Удалить" type="button"></button>
      <img className="mesto__image" src={link} alt={name} onClick={handleClick} />
      <div className="mesto__wrap">
        <h2 className="mesto__title">{name}</h2>
        <div className="mesto__like-container">
          <button className="mesto__like-button" aria-label="Нравится" type="button"></button>
          <p className="mesto__like-counter">{likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;