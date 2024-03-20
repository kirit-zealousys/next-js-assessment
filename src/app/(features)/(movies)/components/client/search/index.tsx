"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Search() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const handleChange = (value: string) => {
    if (value && value.length > 3) setSearch(value);
  };

  const handleSearch = () => {
    if (!search || search === "") return;
    router.push(`/movies?search=${search}`);
  };

  return (
    <div className="flex-row">
      <input
        className="w-25 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
        type="text"
        name="search"
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleSearch()}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
