import { useEffect, useState } from 'react';
// import Spinner from '../Spinner/Spinner';
// import BASIC_URL from '../../api/api';
// import axios from 'axios';
import Books from './Books';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../Search/Search';
import { fetchSearch } from '../../api/api';

// import Hero from '../Hero/Hero';

const Main = ({ shelf, setShelf }) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 10, label: '10 items per page' },
    { value: 15, label: '15 items per page' },
    { value: 20, label: '20 items per page' },
    { value: 40, label: '40 items per page' },
  ];
  const addToShelf = oneBook => {
    setShelf([...shelf, oneBook]);
    toast(`Book added to BookShelf`);
  };

  const handleSearch = e => {
    setLoading(true);

    fetchSearch(search, setBooks, selectedOption);

    setLoading(false);
  };

  useEffect(() => {
    if (books.length) {
      toast(`I found ${books.length} books`);
    }
  }, [books.length]);

  return (
    <main className="container content">
      {!books.length ? (
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ) : (
        <Books books={books} setShelf={setShelf} addToShelf={addToShelf} />
      )}
      <ToastContainer autoClose={5000} transition={Zoom} />
    </main>
  );
};

export default Main;
