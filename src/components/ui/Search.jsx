import React, { useState } from "react";

function Search({ onSearch }) {
  const [value, setValue] = useState("");

  function onChange(val) {
    setValue(val);
    onSearch(val);
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Search;
