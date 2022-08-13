import { lazy, Suspense } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Spinner from './components/Spinner/Spinner';
import LoginView from './pages/AuthPage/LoginPage';
import RegisterView from './pages/AuthPage/RegisterPage';
import PrivateRoute from './components/Routes/PrivateRoute';
const SearchView = lazy(() => import('./pages/SearchPage/SearchPage'));
const SelectedView = lazy(() => import('./pages/SelectedPage/SelectedPage'));
const BooksView = lazy(() => import('./pages/BooksPage/BookPage'));
const ShelfView = lazy(() => import('./pages/ShelfPage/ShelfPage'));
const NotFoundView = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className="bg">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route
            path="/figli-book-app"
            element={
              <PrivateRoute>
                <SearchView />
              </PrivateRoute>
            }
          />
          <Route
            path="/books"
            element={
              <PrivateRoute>
                <BooksView />
              </PrivateRoute>
            }
          />
          <Route
            path="/book/:id"
            element={
              <PrivateRoute>
                <SelectedView />
              </PrivateRoute>
            }
          />
          <Route
            path="/shelf"
            element={
              <PrivateRoute>
                <ShelfView />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
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
