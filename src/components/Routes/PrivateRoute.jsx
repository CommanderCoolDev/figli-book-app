import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from '../../store/selectors/user-selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getAuth);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
