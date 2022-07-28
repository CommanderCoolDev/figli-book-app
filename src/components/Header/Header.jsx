import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className=" green lime lighten-4">
      <div className="nav-wrapper">
        <a
          href="/figli-book-app"
          className="blue-grey-text text-darken-3 brand-logo center"
        >
          Figli
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="active">
            <Link to="/shelf" className="blue-grey-text text-darken-3">
              BookShelf
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/CommanderCoolDev/figli-book-app"
              target="_blank"
              rel="noreferrer"
              className="blue-grey-text text-darken-3"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
