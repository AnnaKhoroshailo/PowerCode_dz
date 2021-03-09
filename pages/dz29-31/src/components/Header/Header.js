import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <nav className="container">
        <ul className="Header__List">
          <li className="Header__Item"><NavLink to="/" exact activeClassName="active">Главная</NavLink></li>
          <li className="Header__Item"><NavLink to="/products" activeClassName="active">Каталог</NavLink></li>
          <li className="Header__Item"><NavLink to="/empty" activeClassName="active">404</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;