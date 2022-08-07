import LoginForm from '../../components/Auth/Login';
import RegisterForm from '../../components/Auth/Register';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/selectors/auth-selector';
import { getUser } from '../../store/selectors/user-selector';

const AuthView = () => {
  const auth = useSelector(getAuth);
  const user = useSelector(getUser);
  console.log(auth);
  console.log(user);
  return (
    <>
      <LoginForm />

      <RegisterForm />
    </>
  );
};

export default AuthView;
