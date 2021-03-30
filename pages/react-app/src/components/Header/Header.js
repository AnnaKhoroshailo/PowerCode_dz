import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <nav className="container">
        <ul className="Header__List">
          <li className="Header__Item"><NavLink to="/" exact activeClassName="active">Главная</NavLink></li>
          <li className="Header__Item"><NavLink to="/products" activeClassName="active">Каталог</NavLink></li>
          <li className="Header__Item"><NavLink to="/gallery" activeClassName="active">Галерея</NavLink></li>
          <li className="Header__Item"><NavLink to="/users" activeClassName="active">Пользователи</NavLink></li>
          <li className="Header__Item"><NavLink to="/authorization" activeClassName="active">Авторизация</NavLink></li>
          <li className="Header__Item"><NavLink to="/registration" activeClassName="active">Регистрация</NavLink></li>
          <li className="Header__Item"><NavLink to="/elements" activeClassName="active">ElementUi</NavLink></li>
          <li className="Header__Item"><NavLink to="/empty" activeClassName="active">404</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;