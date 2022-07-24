import MainView from './views/MainView/MainView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Selected from './components/Selected/Selected';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/book/:id" element={<Selected />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
