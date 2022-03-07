import logo from "./assets/images/logo.png";
import "./assets/styles/header.css";

function Header() {
  return (
    <header className="header_container nav">
      <div className="header_logo">
        <img className="nav_logo" src={logo} alt="logo" />
      </div>

      <div className="header_list nav_list">
        <ul>
          <li className="header_list--item nav_list--item">
            <a href={logo}>Services</a>
          </li>
          <li className="header_list--item nav_list--item">
            <a href={logo}>About</a>
          </li>
          <li className="header_list--item nav_list--item">
            <a href={logo}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
