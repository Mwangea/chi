import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer";
import Recognition from "./components/Home/Recognition";
import NavBar from "./components/Home/NavBar";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [portolioSelected, setPortfolioSelected] = useState("all");
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                portolioSelected={portolioSelected}
                setPortfolioSelected={setPortfolioSelected}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                portolioSelected={portolioSelected}
                setPortfolioSelected={setPortfolioSelected}
              />
            }
          />
        </Routes>

        <Recognition />
      </BrowserRouter>
    </div>
  );
}

export default App;
