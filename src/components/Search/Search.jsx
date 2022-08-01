import Hero from '../Hero/Hero';
// import Filter from './Filter';
import Select from 'react-select';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter';

const Search = ({
  search,
  setSearch,
  handleSearch,
  options,
  setSelectedOption,
  selectedOption,
}) => {
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
      <Filter
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <Hero />
    </>
  );
};
export default Search;
