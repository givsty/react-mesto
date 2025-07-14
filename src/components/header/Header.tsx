import logoImg from "../../images/logo.svg";
const Header = () => {
  return (
    <header className="header page__section">
    <img
      alt="Логотип проекта место"
      className="logo header__logo"
      src={logoImg}
    />
  </header>
  )
}

export default Header