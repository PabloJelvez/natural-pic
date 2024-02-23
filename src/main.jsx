import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosProvider from "./context/PhotosContext.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
    <PhotosProvider>
       <App />
    </PhotosProvider>
    </BrowserRouter>
  
);
