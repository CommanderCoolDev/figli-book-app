import Hero from '../Hero/Hero';

const Search = ({ search, setSearch, handleSearch }) => {
  const handleKey = e => {
    if (e.key === 'Enter') {
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
            style={{
              position: 'absolute',
              top: '5px',
              right: '20px',
            }}
            onClick={handleSearch}
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
