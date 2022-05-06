import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";

const Searchbar = () => {
  let navigate = useNavigate();

  const handleSearchMovie = useMemo(
    () =>
      debounce((e) => {
        navigate(`/search/movie/${e}`, { state: { query: e } });
      }, 800),
    []
  );

  return (
    <div>
      <input type="text" onChange={(e) => handleSearchMovie(e.target.value)} />
    </div>
  );
};

export default Searchbar;
