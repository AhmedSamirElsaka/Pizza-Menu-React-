import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
