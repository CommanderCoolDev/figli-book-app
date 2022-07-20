import { PacmanLoader, HashLoader } from 'react-spinners';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      <Header />
      <Spinner />
      <Footer />
    </div>
  );
}

export default App;
