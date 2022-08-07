import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/actions/user-action';
import AuthForm from './AuthForm';
import { toast } from 'react-toastify';

// import { Box, TextField, Button } from '@mui/material';

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
        );
        navigate('/figli-book-app');
      })
      .catch(err => toast(`${err}`));
  };
  return (
    <>
      <div className="auth-box">
        <AuthForm title="Register" handleClick={handleRegister} />

        <p>
          or <Link to="/login">Log IN</Link>
        </p>
      </div>
    </>
  );
};
export default RegisterForm;
// accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MDM2NzRlZGE0YmU5NzcyNWI3M2QwZGMwMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXl1dGgtZmlnbGkiLCJhdWQiOiJheXV0aC1maWdsaSIsImF1dGhfdGltZSI6MTY1OTg4NzQwMCwidXNlcl9pZCI6ImhSRjh2ZWlwQ2xNS0VabmJXbG1MY0pCaEtFcjEiLCJzdWIiOiJoUkY4dmVpcENsTUtFWm5iV2xtTGNKQmhLRXIxIiwiaWF0IjoxNjU5ODg3NDAwLCJleHAiOjE2NTk4OTEwMDAsImVtYWlsIjoicUBtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJxQG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.MdFOzEVGo_LykhVuGQERrOiKOCH7wa0fRGvFGTV5hIGwmU5aDgUtSV9pPsIssaRpMOT8whR1QxInA9zeIUV3EqywbCPki8hb4MenpANMORrMnJxOkV6R1Z6-RgieOmcQuWLYtj2WWwd-W2QTidVdogAwpAgg91100dHV0VSB_HDacuJ9LSNRYoeAQA2rIpQ2YMyVYtF0g2lNMEtdWvcC-iowel0iOHOR7GmcnKTt1E4-L-saKaC4izGD6mdtilfbyajZ1F0Xaqfo8mypAdnfM9phkh2JeTE-FT6I5VrtW_J0KNBSTUA3K9uifvkQlTkxH0_RjCfgg8UghFJrMn-jng"
// auth: AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, config: {…}, currentUser: UserImpl, emulatorConfig: null, …}
// displayName: null
// email: "q@mail.com"
// emailVerified: false
// isAnonymous: false
// metadata: UserMetadata {createdAt: '1659887399872', lastLoginAt: '1659887399872', lastSignInTime: 'Sun, 07 Aug 2022 15:49:59 GMT', creationTime: 'Sun, 07 Aug 2022 15:49:59 GMT'}
// phoneNumber: null
// photoURL: null
// proactiveRefresh: ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
// providerData: [{…}]
// providerId: "firebase"
// reloadListener: null
// reloadUserInfo: {localId: 'hRF8veipClMKEZnbWlmLcJBhKEr1', email: 'q@mail.com', passwordHash: 'UkVEQUNURUQ=', emailVerified: false, passwordUpdatedAt: 1659887399872, …}
// stsTokenManager: StsTokenManager {refreshToken: 'AOEOula81rLXaChojSvw_sB3v9hVz0JR06-yHbBJSUPFHM_8kl…BUY0qDu9PHZqtZmHvlrZ4HrVn0nJ73ol-n33MapQCoMncf40H', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MD…VrtW_J0KNBSTUA3K9uifvkQlTkxH0_RjCfgg8UghFJrMn-jng', expirationTime: 1659891000066}
// tenantId: null
// uid: "hRF8veipClMKEZnbWlmLcJBhKEr1"
