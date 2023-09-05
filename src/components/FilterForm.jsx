import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function FilterForm({ handleSearch }) {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const errorBorder = isEmpty ? "error-border" : "";
  const focusBorder = isFocused ? "focus-border" : "";

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      setIsFocused(false);
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
    handleSearch(value);
    setValue("");
    setIsFocused(false);
  };

  return (
    <div>
      <form
        className={`search-form ${errorBorder} ${focusBorder}`}
        onSubmit={handleFormSubmit}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Search for any word"
        />
        <img src={searchIcon} alt="" />
      </form>
      {isEmpty && <p className="search-form-error">{`Whoops, can't be empty...`}</p>}
    </div>
  );
}
