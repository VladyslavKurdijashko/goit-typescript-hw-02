
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={query}
          onChange={handleInputChange}
          placeholder="Search images and photos"
          autoFocus
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
