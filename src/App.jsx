import { lazy, Suspense } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Spinner from './components/Spinner/Spinner';
import LoginView from './views/AuthView/LoginView';
import RegisterView from './views/AuthView/RegisterView';
import PrivateRoute from './components/Routes/PrivateRoute';
const SearchView = lazy(() => import('./views/SearchView/SearchView'));
const SelectedView = lazy(() => import('./views/SelectedView/SelectedView'));
const BooksView = lazy(() => import('./views/BooksView/BookView'));
const ShelfView = lazy(() => import('./views/ShelfView/ShelfView'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

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
