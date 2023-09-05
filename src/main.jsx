import ReactDOM from "react-dom/client";
import { DropdownProvider } from "./contexts/DropdownContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DropdownProvider>
    <App />
  </DropdownProvider>
);
