import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./appContext";
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
import { Provider } from "react-redux";
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);

serviceWorkerRegistration.register();
