const Search = ({ search, setSearch, handleSearch }) => {
  
  const handleKey = (e) => {
    if (e.key === 'Enter') { 
handleSearch()
    }
  }
  return (
    <div className="row">
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
            top: 0,
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
