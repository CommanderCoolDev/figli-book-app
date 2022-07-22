const Search = () => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search..."
          // onKeyDown={handleKey}
          // onChange={e => setValue(e.target.value)}
        />
        <button
          className="btn"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
