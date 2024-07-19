import PropTypes from "prop-types";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div className="">
      <input
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label className="inline-flex items-center my-6">
        <input
          className="form-checkbox h-5 w-5 text-blue-500"
          type="checkbox"
          checked={showFavorites}
          onChange={() => setShowFavorites(!showFavorites)}
        />
        <span className="ml-2 text-gray-700">
          Show favorites
        </span>
      </label>
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  showFavorites: PropTypes.bool.isRequired,
  setShowFavorites: PropTypes.func.isRequired,
};

export default SearchBar;