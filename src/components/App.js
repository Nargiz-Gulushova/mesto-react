
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick (card) {
    setSelectedCard(card)
  }; 

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  };

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  };

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  };

  function closeAllPopups () {
    setIsEditAvatarPopupOpen (false);
    setIsAddPlacePopupOpen (false);
    setIsEditProfilePopupOpen (false);
    setSelectedCard({})
  }

  return (
    <div className="page">
      <Header />
      <Main 
        name=''
        job=''
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />  
      <PopupWithForm 
        title = 'Редактировать профиль' 
        name ='edit-profile' 
        submitText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <input id="input-name" className="popup__input popup__input_type_name" type="text" placeholder="Ваше имя"
          name="name" required minLength="2" maxLength="40" />
        <span className="input-name-error popup__error" />
        <input id="input-job" className="popup__input popup__input_type_job" type="text" placeholder="Род занятий"
          name="job" required minLength="2" maxLength="200" />
        <span className="input-job-error popup__error" />
      </PopupWithForm>

      <PopupWithForm 
        title = 'Новое место' 
        name = 'add-mesto' 
        submitText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>

        <input id="input-title" className="popup__input popup__input_type_title" type="text" placeholder="Название"
          name="title" required minLength="2" maxLength="30" />
        <span className="input-title-error popup__error" />
        <input id="input-image" className="popup__input popup__input_type_image" type="url"
          placeholder="Ссылка на картинку" name="image" required minLength="2" />
        <span className="input-image-error popup__error" />
      </PopupWithForm>

      <PopupWithForm 
        name = 'edit-avatar' 
        title = 'Обновить аватар' 
        submitText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>

        <input id="input-avatar-link" className="popup__input popup__input_type_avatar-link" type="url"
          placeholder="Ссылка на аватар" name="input-avatar-link" required />
        <span className="input-avatar-link-error popup__error" />
      </PopupWithForm>

      <PopupWithForm 
        name = 'confirm' 
        title = 'Вы уверены?' 
        submitText='Да'
        onClose={closeAllPopups}>

        <button className="popup__close popup__close_confirm" aria-label="Закрыть" type="button" />
        <div className="popup__content">
          <h2 className="popup__title">Вы уверены?</h2>
        </div>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    
    </div>
  );
}

export default App;
