import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Selected from './components/Selected/Selected';
import NotFoundView from './views/NotFoundView/NotFoundView';
import Shelf from './components/Shelf/Shelf';

function App() {
  const [shelf, setShelf] = useState([]);
  return (
    <div className="bg">
      <Header />
      <Routes>
        <Route
          path="/figli-book-app"
          element={<MainView setShelf={setShelf} shelf={shelf} />}
        />
        <Route path="/book/:id" element={<Selected />} />
        <Route
          path="/shelf"
          element={<Shelf shelf={shelf} setShelf={setShelf} />}
        />

        <Route path="*" element={<NotFoundView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
