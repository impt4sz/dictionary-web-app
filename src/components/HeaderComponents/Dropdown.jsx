import downIcon from "../../assets/images/icon-arrow-down.svg";
import { useState, useRef, useEffect } from "react";
import { useDropdown } from "../../contexts/DropdownContext";
import "./Dropdown.css";

export default function Dropdown() {
  const options = ["Sans Serif", "Serif", "Mono"];
  const { selectedOption, setSelectedOption } = useDropdown();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-header dropdown-text" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <img src={downIcon} alt="" />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option dropdown-text"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
