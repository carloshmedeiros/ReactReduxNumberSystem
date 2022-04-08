import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import configStore from "./store/storeConfig";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = configStore();

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
