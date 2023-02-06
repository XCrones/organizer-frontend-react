import ReactDOM from "react-dom/client";
import AppComponent from "./components/App/App";
import { Provider } from "react-redux";
import { createStore } from "./store";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={createStore()}>
      <AppComponent />
    </Provider>
  </BrowserRouter>
);
