import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppComponent } from "./components";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
);
