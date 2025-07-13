import React from 'react'

const Modal = () => {
  return (
    <div className="popup popup_type_new-card popup_is-animated">
      <div className="popup__content">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="new-place">
          <input type="text" name="place-name" className="popup__input popup__input_type_card-name" placeholder="Название"
            required  pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$"
            data-error-message="Название должно содержать только латинские и кириллические буквы, знаки дефиса и пробелы."/>
          <span className="form__input-error place-name-input-error"></span>
          <input type="url" name="link" className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
            required  />
          <span className="form__input-error link-input-error"></span>
          <button type="submit" className="button popup__button">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;