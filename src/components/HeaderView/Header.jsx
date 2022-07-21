function Header() {
  return (
    <nav className=" green accent-4">
      <div className="nav-wrapper">
        <a href="/" className="blue-grey-text text-darken-3 brand-logo center">
          Figli
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
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
