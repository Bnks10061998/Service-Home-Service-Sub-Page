import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './Redux/store.js';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <StrictMode>
      <App />
      <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
    </StrictMode>
  </BrowserRouter>
  </Provider>
);
