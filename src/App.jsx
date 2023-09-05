import { useState, useEffect } from "react";
import Header from "./components/Header";
import FilterForm from "./components/FilterForm";
import Body from "./components/Body";
import Error from "./components/Error";
import { useDropdown } from "./contexts/DropdownContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  const [wordData, setWordInfo] = useState([]);
  const [searchWord, setSearchWord] = useState("keyboard");
  const [error, setError] = useState(null);
  const { selectedOption } = useDropdown(); //font option
  const fontClass =
    selectedOption === "Sans Serif" ? "sans" : selectedOption.toLowerCase();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await response.json();
      if (response.status === 404) {
        setError(data);
      } else if (response.status === 200) {
        setWordInfo(data);
        setError(null);
      }
    };
    fetchData();
  }, [searchWord]);

  const handleSearch = (word) => {
    setSearchWord(word);
  };

  return (
    <ThemeProvider>
      <div className={`App ${fontClass}`}>
        <div className="container">
          <Header />
          <FilterForm handleSearch={handleSearch} />
          {error ? <Error error={error} /> : <Body wordData={wordData} />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
