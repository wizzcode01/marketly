import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { UserContext } from "./components/UserContext.jsx";

const user = "Maya";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext.Provider>
  </StrictMode>,
);
