import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import type { Places } from "../types/types";
import Card from "../card/Card";

import logoImg from "../../images/logo.svg";

import "../../vendor/normalize.css";
import "../../vendor/fonts.css";
import "../../vendor/fonts/Inter-Black.woff2";
import "../../vendor/fonts/Inter-Medium.woff2";
import "../../vendor/fonts/Inter-Regular.woff2";

//Стили страницы
import "../../blocks/page/page.css";
import "../../blocks/page/__content/page__content.css";
import "../../blocks/page/__section/page__section.css";

//Стили Header
import "../../blocks/header/__logo/header__logo.css";
import "../../blocks/header/header.css";

//Стили профиля
import "../../blocks/profile/profile.css";
import "../../blocks/profile/__add-button/profile__add-button.css";
import "../../blocks/profile/__description/profile__description.css";
import "../../blocks/profile/__edit-button/profile__edit-button.css";
import "../../blocks/profile/__image/profile__image.css";
import "../../blocks/profile/__info/profile__info.css";
import "../../blocks/profile/__title/profile__title.css";

//Стили footer
import "../../blocks/footer/footer.css";
import "../../blocks/footer/__copyright/footer__copyright.css";

import "../../blocks/places/places.css";

//Карточка
import "../../blocks/card/card.css";
import "../../blocks/card/__delete-button/card__delete-button.css";
import "../../blocks/card/__description/card__description.css";
import "../../blocks/card/__image/card__image.css";
import "../../blocks/card/__like-button/__card-like__wrapper/card__like__container.css";
import "../../blocks/card/__like-button/_is-active/card__like-button_is-active.css";
import "../../blocks/card/__title/card__title.css";

//Модалки

import '../../blocks/popup/popup.css'
import '../../blocks/popup/__button/_disabled/popup__button_disabled.css'
import '../../blocks/popup/__button/popup__button.css'
import '../../blocks/popup/__caption/popup__caption.css'
import '../../blocks/popup/__close/popup__close.css'
import '../../blocks/popup/__content/_content/popup__content_content_image.css'
import '../../blocks/popup/__content/_content/popup__content_content_profile_image.css'
import '../../blocks/popup/__content/popup__content.css'
import '../../blocks/popup/__form/popup__form.css'
import '../../blocks/popup/__image/popup__image.css'
import '../../blocks/popup/__input/__error/popup__input-error.css'
import '../../blocks/popup/__input/popup__input.css'
import '../../blocks/popup/__title/popup__title.css'
import '../../blocks/popup/_is-animated/popup_is-animated.css'
import '../../blocks/popup/_is-opened/popup_is-opened.css'

const App = () => {
  const [places, setPlaces] = useState<Places[]>([]);
  const [active,  setActive] = useState(false)
  const modalOpen = () => setActive(true)
  const modalClose = () => setActive(false)
  const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-mag-4",
    headers: {
      authorization: "561bff47-1094-4520-9c65-f40457c0b35c",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    })
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setPlaces(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <header className="header page__section">
          <img
            alt="Логотип проекта место"
            className="logo header__logo"
            src={logoImg}
          />
        </header>
        <main className="content">
          <section className="profile page__section">
            <div className="profile__image">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="profile__image-edit-svg"
              >
                <path d="M26 3.45351L6.76981 22.7932L3.33585 19.2903L22.517 0L26 3.45351ZM0 26L5.10189 24.4706L1.52075 21.0171L0 26Z" />
              </svg>
            </div>
            <div className="profile__info">
              <h1 className="profile__title"></h1>
              <button className="profile__edit-button" type="button"></button>
              <p className="profile__description"></p>
            </div>
            <button className="profile__add-button" type="button" onClick={modalOpen}></button>
          </section>
          <section className="places page__section">
            <ul className="places__list">
              {places.map((element) => {
                return (
                  <Card
                    name={element.name}
                    counter={element.likes}
                    image={element.link}
                    key={element._id}
                  />
                );
              })}
            </ul>
          </section>
        </main>
        <footer className="footer page__section">
          <p className="footer__copyright">© 2021 Mesto Russia</p>
        </footer>
        <Modal active={active} modalClose={modalClose}/>
      </div>
    </div>
  );
};

export default App;
