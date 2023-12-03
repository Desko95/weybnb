import { useState } from "react";

const SearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <div className="flex flex-row self-center rounded-full border p-2 mt-8 w-3/4">

      <button onClick={() => setIsSearchFocused(true)}>

        <p className="font-bold">Where</p>

        {isSearchFocused ? (
          <input
            type="text"
            placeholder="Search Destinations"
            className="text-slate-800 bg-transparent border-none outline-none"
          />
        ) : (
          <p className="text-slate-600">Search Destinations</p>
        )}
      </button>

      <div className="dropdown dropdown-end px-4 border-r">

        <label tabIndex={1}>
          <p className="font-bold">Dates</p>
          <p className="text-slate-600">Select Ranges</p>
        </label>

        <div tabIndex={1} className="dropdown-content">
          <p></p>
          <label>
            <p className="font-bold">Who</p>
            <p className="text-slate-600">Add Guests</p>
          </label>

        </div>

      </div>
    </div>
  );
};

export default SearchBar;
