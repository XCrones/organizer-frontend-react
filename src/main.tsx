import ReactDOM from "react-dom/client";
import AppComponent from "./components/app/App.component";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
);
