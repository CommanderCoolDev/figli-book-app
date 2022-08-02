import { useNavigate } from 'react-router-dom';
import { fetchSearch } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../Hero/Hero';
// import Filter from './Filter';
import Select from 'react-select';
import { selectBooks } from '../../store/selectors/books-selector';
import { setBooks } from '../../store/actions/books-action';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter';

const Search = ({
  search,
  setSearch,
  // handleSearch,

  // setSelectedOption,
  // selectedOption,
}) => {
  const navigate = useNavigate();
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  const handleKey = e => {
    if (e.key === 'Enter') {
      if (!search) {
        // alert('Enter smth')
        toast.error('Please enter smthng', {});
      } else {
        handleSearch();
      }
    }
  };
  const handleClick = () => {
    if (!search) {
      // alert('Enter smth')
      toast.error('Please enter smthng', {});
    } else {
      handleSearch();
    }
  };
  const handleSearch = e => {
    fetchSearch(search)
      .then(resp => dispatch(setBooks(resp.data.items)))

      .catch(err => console.log(err));
    navigate('/books');
  };
  return (
    <>
      <div className="row search-box">
        <div className="input-field col s12">
          <input
            type="search"
            id="search-field"
            placeholder="Search..."
            onKeyDown={handleKey}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className="btn lime lighten-1"
            type="submit"
            style={{
              position: 'absolute',
              top: '5px',
              right: '20px',
            }}
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      <Hero />
    </>
  );
};
export default Search;
