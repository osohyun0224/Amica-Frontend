import SearchBar from "../components/SearchBar.jsx";
import { useState } from "react";

function MySearch() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <SearchBar value={searchValue} onChange={setSearchValue} />
    </div>
  );
}

export default MySearch;
