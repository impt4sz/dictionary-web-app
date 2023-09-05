import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Sans Serif");

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  return useContext(DropdownContext);
};
