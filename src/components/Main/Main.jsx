import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
// import BASIC_URL from '../../api/api';
// import axios from 'axios';
import Books from './Books';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../Search/Search';
import {fetchSearch} from '../../api/api'
import Hero from '../Hero/Hero';


const Main = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setLoading(true);
    
    setTimeout(() => fetchSearch(search,setBooks), 1500); //just for spinner(temporary)
    
     setLoading(false);
  }
 
  if (books.length) {
    toast(`I found ${books.length} books`);
  }

  return (
    <main className="container content">
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {loading ? <Spinner /> : <Books books={books} />}
      <ToastContainer autoClose={8000} transition={Zoom} />
    </main>
  );
};

export default Main;
