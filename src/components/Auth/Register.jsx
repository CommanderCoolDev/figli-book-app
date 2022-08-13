import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/actions/user-action';
import AuthForm from './AuthForm';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      <div className="auth-box content">
        <AuthForm title="Register" handleClick={handleRegister} />

        <p>
          or <Link to="/login">Log IN</Link>
        </p>
      </div>
    </>
  );
};
export default RegisterForm;
