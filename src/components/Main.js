import React from "react";
import addBtn from "../images/add-button.svg";
import api from "../utils/Api";
import Card from "../components/Card";

function Main ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect (() =>{
    Promise.all([api.getUserInfo(), api.getInitialCards()])  
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch ((err) => console.log(err))
    }, [])
      

  
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-container">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName} </h1>
              <button className="profile__edit-button" aria-label="Редактировать" type="button" onClick={onEditProfile}/>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" aria-label="Добавить" type="button" onClick={onAddPlace} >
          <img src={addBtn} alt="Кнопка Добавить" />
        </button>
      </section>
      <section className="mesto">
        <ul className="mesto__list"> 
          {cards.map((card) => {
            return <Card  key ={card._id} card={card} onCardClick={onCardClick}/>
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;