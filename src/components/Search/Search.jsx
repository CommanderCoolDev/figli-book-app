import Hero from '../Hero/Hero';
// import Filter from './Filter';
import Select from 'react-select';
import { useState } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({
  search,
  setSearch,
  handleSearch,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const inputHandler = e => {
    if (e.target.value === '') {
      alert('Enter SMTH');
    } else {
      setSearch(e.target.value);
    }
  };
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
            className="btn"
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
        <Select
          className="limit-select"
          placeholder="Books per page...."
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <Hero />
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

      <ToastContainer />
    </>
  );
};
export default Search;
