import { useNavigate, Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/actions/user-action';

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(login);
  // console.log(password);
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            userId: user.uid,
          }),
        );
        navigate('/figli-book-app');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="auth-box">
        <AuthForm title=" Sign In" handleClick={handleLogin} />
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </div>
    </>
  );
};
export default LoginForm;
