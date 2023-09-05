import moonIcon from "../../assets/images/icon-moon.svg";
import moonDarkIcon from "../../assets/images/icon-moon-dark.svg";
import { useTheme } from "../../contexts/ThemeContext";
import "./Toggle.css";

export default function Toggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="theme-toggle-container">
      <label className="switch">
        <input onClick={toggleTheme} type="checkbox" />
        <span className="slider round"></span>
      </label>
      <img src={theme === "dark" ? moonDarkIcon : moonIcon} alt="" />
    </div>
  );
}
