import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Books from './Books';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../Search/Search';
import { fetchSearch } from '../../api/api';
import { onLoading, offLoading } from '../../store/actions/loading-action';
import { setBooks } from '../../store/actions/books-action';
import { getLoading } from '../../store/selectors/loading-selector';
import { selectBooks } from '../../store/selectors/books-selector';

const Main = () => {
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const loading = useSelector(getLoading);
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const options = [
    { value: 10, label: '10 items per page' },
    { value: 15, label: '15 items per page' },
    { value: 20, label: '20 items per page' },
    { value: 40, label: '40 items per page' },
  ];
  // const addToShelf = oneBook => {
  //   setShelf([...shelf, oneBook]);
  //   toast(`Book added to BookShelf`);
  // };

  const handleSearch = e => {
    fetchSearch(search)
      .then(dispatch(onLoading()))
      .then(resp => dispatch(setBooks(resp.data.items)))
      .then(dispatch(offLoading()))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (books.length) {
      toast(`I found ${books.length} books`);
    }
  }, [books]);

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
        <Books />
      )}
      <ToastContainer autoClose={5000} transition={Zoom} />
    </main>
  );
};

export default Main;
