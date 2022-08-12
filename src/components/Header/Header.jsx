import { Link } from 'react-router-dom';
import { getAuth, getUser } from '../../store/selectors/user-selector';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/user-action';
import { removeUser } from '../../store/actions/user-action';
import { toast } from 'react-toastify';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuth);
  const user = useSelector(getUser);
  console.log(user);
  const handleLogOut = () => {
    dispatch(removeUser());
    toast(`User  ${user} logged out! Seeya!)`);
  };
  return (
    <nav className=" green lime lighten-4" data-testid="nav">
      <div className="nav-wrapper">
        <a
          href="/"
          className="blue-grey-text text-darken-3 brand-logo center right-on-med-and-down"
        >
          Figli
        </a>
        <ul id="nav-mobile" className="left ">
          {isAuth ? (
            <li className="active">
              <Link to="/shelf" className="blue-grey-text text-darken-3">
                BookShelf
              </Link>
            </li>
          ) : null}

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
          {isAuth ? (
            <li className="blue-grey-text text-darken-3">
              {user}
              <button
                className="btn log-out-btn lime lighten-1"
                onClick={() => handleLogOut()}
              >
                Log Out
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
