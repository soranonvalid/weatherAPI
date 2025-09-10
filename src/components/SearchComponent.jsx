import React from "react";

const SearchComponent = ({
  city,
  search,
  onSearchChange,
  handleKeyDown,
  handleSearch,
}) => {
  return (
    <label className="flex items-center justify-center mt-10" htmlFor="city">
      <input
        type="text"
        id="city"
        placeholder={city}
        className="text-center focus:outline-none w-min"
        value={search}
        onChange={onSearchChange}
        onKeyDown={handleKeyDown}
      />
      <i
        className="material-symbols-outlined cursor-pointer"
        onClick={handleSearch}
      >
        search
      </i>
    </label>
  );
};

export default SearchComponent;
