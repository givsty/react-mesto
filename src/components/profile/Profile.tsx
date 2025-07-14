import React from "react";
interface ModalProps {
  modalOpen: () => void
}
const Profile: React.FC<ModalProps> = ({modalOpen}) => {
  return (
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
      <button
        className="profile__add-button"
        type="button"
        onClick={modalOpen}
      ></button>
    </section>
  );
};

export default Profile;
