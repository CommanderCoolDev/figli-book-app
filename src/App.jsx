import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Selected from './components/Selected/Selected';
import NotFoundView from './views/NotFoundView/NotFoundView';
import Shelf from './components/Shelf/Shelf';
import Books from './components/Main/Books';

function App() {
  return (
    <div className="bg">
      <Header />
      <Routes>
        <Route path="/figli-book-app" element={<MainView />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<Selected />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
