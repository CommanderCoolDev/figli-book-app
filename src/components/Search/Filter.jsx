import Select from 'react-select';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../../store/selectors/books-selector';
import { toast } from 'react-toastify';

const Filter = ({ booksByFilter, setBooksByFilter }) => {
  const [selectedOption, setSelectedOption] = useState(40);
  const [searchTitle, setSearchTitle] = useState('');

  const books = useSelector(selectBooks);

  const options = [
    { value: 10, label: '10 books per page' },
    { value: 15, label: '15 books per page' },
    { value: 20, label: '20 books per page' },
    { value: 40, label: '40 books per page' },
  ];
  const customStyles = {
    container: provided => ({
      ...provided,
      border: 'solid 2px #99876f',
      borderRadius: 15,

      background: '#ebeddf',
    }),
    control: provided => ({
      ...provided,
      marginTop: '1rem',
      marginBottom: '1rem',
      border: 'none',
      boxShadow: 'none',
      // none of react-select's styles are passed to <Control />
    }),
    indicatorSeparator: provided => ({
      ...provided,
      marginTop: 0,
      marginBottom: 0,
    }),
  };

  const handleFilter = e => {
    let filteredBooks = [...books];

    if (selectedOption === 40) {
      filteredBooks.length = selectedOption;
      if (searchTitle) {
        filteredBooks = books.filter(el =>
          el.volumeInfo.title.toLowerCase().includes(searchTitle),
        );
      }
    } else if (selectedOption.value) {
      filteredBooks.length = selectedOption.value;
      if (searchTitle) {
        filteredBooks = books.filter(el =>
          el.volumeInfo.title.toLowerCase().includes(searchTitle),
        );
      }
    }

    setBooksByFilter(filteredBooks);
    toast(
      `Filtered ${filteredBooks.length} ${
        filteredBooks.length > 1 ? 'books' : 'book'
      }`,
    );
  };

  return (
    <div className="select-box row">
      <div className="filter-box col  ">
        <Select
          styles={customStyles}
          className="react-select-container  "
          placeholder="40 by default"
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

      <div className=" search-box col s8">
        <div className="input-field col s12">
          <input
            type="search"
            id="search-field"
            placeholder="Search in titles..."
            value={searchTitle}
            onChange={e => setSearchTitle(e.target.value)}
          />
          <button
            className="btn lime lighten-1"
            type="submit"
            onClick={() => handleFilter()}
            style={{
              position: 'absolute',
              top: '9px',
              right: '13px',
            }}
          >
            Set Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
