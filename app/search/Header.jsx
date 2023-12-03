"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";


export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false); 

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded); 
  };

  return (
    <header className="container flex justify-between border-b <-50 fixed w-full">
      <div className={isExpanded ? "container h-[13]" : "container h-[7.5rem]"}>
      <div className="text-red-500">weybnb</div>

      {
        isExpanded ? (<SearchBar />) : (
        <button onClick={toggleExpanded} className="search-container flex gap-3 rounded-lg"
        >
          <div className="input border-r">
            <p>Anywhere</p>
          </div>

          <div className="input border-r">
            <p>Any Date</p>
          </div>

          <div className="input border-r">
            <p>Add Guests</p>
          </div>

          <div className="search-btn px-4 rounded-full bg-primary h-10 w-10 relative">

            <MagnifyingGlassIcon className="h-4 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

        </button>

      )}

      <div>user</div>
    </div>
    </header>
  );
}
