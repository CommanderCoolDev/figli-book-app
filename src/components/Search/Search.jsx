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
      <div className="select-box row">
        <Select
          className="react-select-container   "
          placeholder="Books per page...."
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          theme={theme => ({
            ...theme,
            borderRadius: '10px',

            colors: {
              ...theme.colors,
              primary25: '#99876f',
              primary: '#827717 ',
              neutral0: '#ebeddf',
            },
          })}
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
