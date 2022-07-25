import MainView from './views/MainView/MainView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Selected from './components/Selected/Selected';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/figli-book-app" element={<MainView />} />
        <Route path="/book/:id" element={<Selected />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
