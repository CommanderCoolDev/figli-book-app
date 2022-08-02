import Select from 'react-select';
import { useState } from 'react';

const Filter = ({ selectedOption, setSelectedOption }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const options = [
    { value: 10, label: '10 items per page' },
    { value: 15, label: '15 items per page' },
    { value: 20, label: '20 items per page' },
    { value: 40, label: '40 items per page' },
  ];
  const customStyles = {
    container: provided => ({
      ...provided,
      border: 'solid 2px #99876f',
      borderRadius: 15,
      padding: 0,
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
  return (
    <div className="select-box row">
      <div className="filter-box col s3 ">
        <Select
          styles={customStyles}
          className="react-select-container  "
          placeholder="10 by default"
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
            placeholder="Search..."
            // onKeyDown={handleKey}
            value={searchTitle}
            onChange={e => setSearchTitle(e.target.value)}
          />
          <button
            className="btn lime lighten-1"
            type="submit"
            style={{
              position: 'absolute',
              top: '9px',
              right: '13px',
            }}
            // onClick={handleClick}
          >
            Search in Titles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
