import { useNavigate } from 'react-router-dom';
import { fetchSearch } from '../../api/api';
import { useDispatch } from 'react-redux';
import Hero from '../Hero/Hero';

import { setBooks } from '../../store/actions/books-action';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleKey = e => {
    if (e.key === 'Enter') {
      if (!search) {
        toast.error('Please enter smthng', {});
      } else {
        handleSearch();
      }
    }
  };
  const handleClick = () => {
    if (!search) {
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
