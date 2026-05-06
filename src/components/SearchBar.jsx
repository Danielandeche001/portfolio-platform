function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <label htmlFor="search">Search Projects</label>
      <input
        id="search"
        type="text"
        placeholder="Search by title, category, or description..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
