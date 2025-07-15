import React, { useEffect, useState } from 'react'
import type { Items } from '../types/types'

interface ModalProps{
  active: boolean,
  modalClose: ()=> void
  items: Items[]
  setItems: (items: Items[])=> void
}

const Modal: React.FC<ModalProps> = ({active, modalClose, items, setItems}) => {
  const [nameValue, setNameValue] = useState('')
  const [placeValue, setPlaceValue] = useState('')

  const closeWrapper = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.classList?.contains('popup')) {
      modalClose()
    }
  };

  const handleForm = (event: React.FormEvent) => {
    event.preventDefault()
    setItems([
      {
        name: nameValue,
        link: placeValue,
        _id: "68527620d4dfc216470c5853",
        createdAt: "",
        likes: [],
        owner: [],
      },
    ]);
  }

  return (
    <div onClick={closeWrapper} className={`popup popup_type_new-card popup_is-animated ${active ? 'popup_is-opened' : ""}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" onClick={modalClose}></button>
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="new-place" onSubmit={handleForm}>
          <input type="text" name="place-name" className="popup__input popup__input_type_card-name" placeholder="Название"
            // required  pattern="^[a-zA-Zа-яА-ЯёЁ\s\-]+$"
            // data-error-message="Название должно содержать только латинские и кириллические буквы, знаки дефиса и пробелы." 
            onInput={(event)=>setNameValue(event.currentTarget.value)}/>
          <span className="form__input-error place-name-input-error"></span>
          <input type="url" name="link" className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
            required  onInput={(event)=>setPlaceValue(event.currentTarget.value)}/>
          <span className="form__input-error link-input-error"></span>
          <button type="submit" className="button popup__button">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;