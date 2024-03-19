"use client";

import React from "react";

function Search() {
  const [search, setSearch] = React.useState("");

  const handleChange = (value: string) => {
    console.log("event", value);
  };
  return (
    <input
      type="text"
      name="search"
      onChange={(event) => handleChange(event.target.value)}
      placeholder="Search..."
    />
  );
}

export default Search;
