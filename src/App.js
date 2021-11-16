import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import LovePage from "./pages/love-page/LovePage";
import CardPage from "./pages/ecard/CardPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Header loggedIn={isLoggedIn} />
        <div className="app">
          <Routes>
            <Route
              exact
              path="/"
              element={<HomePage setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="love" element={<LovePage />} />
            <Route path="card" element={<CardPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
