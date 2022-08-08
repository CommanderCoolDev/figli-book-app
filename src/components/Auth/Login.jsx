import { useNavigate, Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/actions/user-action';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          toast(`Welcome ${user.email}!`),
        );
        navigate('/figli-book-app');
      })
      .catch(err => toast(`${err}`));
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
