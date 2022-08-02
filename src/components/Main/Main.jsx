import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import { ToastContainer, toast, Zoom, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../Search/Search';
import { fetchSearch } from '../../api/api';
import { onLoading, offLoading } from '../../store/actions/loading-action';
import { setBooks } from '../../store/actions/books-action';
import { getLoading } from '../../store/selectors/loading-selector';
import { selectBooks } from '../../store/selectors/books-selector';

const Main = () => {
  const [search, setSearch] = useState('');
  // const [selectedOption, setSelectedOption] = useState(40);
  const [booksByFilter, setBooksByFilter] = useState([]);
  const loading = useSelector(getLoading);
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  // const options = [
  //   { value: 10, label: '10 items per page' },
  //   { value: 15, label: '15 items per page' },
  //   { value: 20, label: '20 items per page' },
  //   { value: 40, label: '40 items per page' },
  // ];

  // console.log(filteredBooks);
  // const handleFilter = () => {
  //   console.log(books);
  //   const filteredBooks = [...books];
  //   console.log(filteredBooks);
  //   if (filteredBooks.length > 0 && selectedOption === 40) {
  //     filteredBooks.length = selectedOption;
  //     console.log(filteredBooks);
  //   } else if (filteredBooks.length > 0 && selectedOption.value) {
  //     filteredBooks.length = selectedOption.value;
  //     console.log(filteredBooks);
  //   }
  //   setBooksByFilter(filteredBooks);
  // };

  // console.log(filteredBooks);

  // const addToShelf = oneBook => {
  //   setShelf([...shelf, oneBook]);
  //   toast(`Book added to BookShelf`);
  // };

  // const handleSearch = e => {
  //   fetchSearch(search)
  //     .then(dispatch(onLoading()))
  //     .then(resp => dispatch(setBooks(resp.data.items)))

  //     .then(dispatch(offLoading()))
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   if (books.length) {
  //     toast(`I showed ${books.length} books`);
  //   }
  // }, [books]);

  return (
    <main className="container content">
      <Search
        search={search}
        setSearch={setSearch}
        // handleSearch={handleSearch}
        // options={options}
        // selectedOption={selectedOption}
        // setSelectedOption={setSelectedOption}
      />

      {/* {!books.length ? (
        <Search
          search={search}
          setSearch={setSearch}
          // handleSearch={handleSearch}
          // options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ) : (
        <Books />
      )} */}
      {/* <ToastContainer autoClose={5000} transition={Zoom} /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        transition={Flip}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
};

export default Main;
