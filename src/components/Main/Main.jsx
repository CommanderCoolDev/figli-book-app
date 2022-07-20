import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import BASIC_URL from '../../api/api';
import axios from 'axios';
import Books from './Books';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const goFetch = () => {
      axios
        .get(`${BASIC_URL}`)
        .then(resp => setBooks(resp.data.items))

        .catch(err => console.log(err));
    };
    setTimeout(() => goFetch(), 1500); //just for spinner(temporary)

    setLoading(false);
  }, []);
  if (books.length) {
    toast(`I found ${books.length} books`);
  }

  return (
    <main className="container content">
      {loading ? <Spinner /> : <Books books={books} />}
      <ToastContainer autoClose={8000} transition={Zoom} />
    </main>
  );
};

export default Main;
