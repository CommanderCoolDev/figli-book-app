import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Selected from './components/Selected/Selected';
import NotFoundView from './views/NotFoundView/NotFoundView';
import Shelf from './components/Shelf/Shelf';
import Books from './components/Main/Books';

import LoginView from './views/AuthView/LoginView';
import RegisterView from './views/AuthView/RegisterView';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {
  return (
    <div className="bg">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route
          path="/figli-book-app"
          element={
            <PrivateRoute>
              <MainView />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/:id"
          element={
            <PrivateRoute>
              <Selected />
            </PrivateRoute>
          }
        />
        <Route
          path="/shelf"
          element={
            <PrivateRoute>
              <Shelf />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        transition={Flip}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
