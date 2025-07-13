// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// src/main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { PublicationProvider } from "./context/PublicationContext.jsx";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <PublicationProvider>
//       <App />
//     </PublicationProvider>
//   </StrictMode>
// );

// // src/main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import { PublicationProvider } from "./context/PublicationContext.jsx";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <PublicationProvider>
//         <App />
//       </PublicationProvider>
//     </Router>
//   </StrictMode>
// );

// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { PublicationProvider } from "./context/PublicationContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <PublicationProvider>
          <App />
        </PublicationProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);