import logoIcon from "../assets/images/logo.svg";
import Dropdown from "./HeaderComponents/Dropdown";
import Toggle from "./HeaderComponents/Toggle";

export default function Header() {
  return (
    <div className="Header">
      <img src={logoIcon} alt="" />
      <div className="header-right">
        <Dropdown />
        <div
          style={{ borderRight: "1px solid var(--border-color)", height: "36px" }}
        ></div>
        <Toggle />
      </div>
    </div>
  );
}
