import RegisterForm from '../../components/Auth/Register';
import { useSelector } from 'react-redux';
// import { getAuth } from '../../store/selectors/auth-selector';
import {
  getUser,
  getToken,
  getUserId,
  getAuth,
} from '../../store/selectors/user-selector';

const RegisterView = () => {
  //   const auth = useSelector(getAuth);
  const user = useSelector(getUser);
  const userId = useSelector(getUserId);
  const token = useSelector(getToken);
  const isAuth = useSelector(getAuth);
  //   console.log(auth);
  console.log(user);
  console.log(userId);
  console.log(token);
  console.log(isAuth);
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterView;
