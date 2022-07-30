import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Selected from './components/Selected/Selected';
import NotFoundView from './views/NotFoundView/NotFoundView';
import Shelf from './components/Shelf/Shelf';

function App() {
  return (
    <div className="bg">
      <Header />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/book/:id" element={<Selected />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
