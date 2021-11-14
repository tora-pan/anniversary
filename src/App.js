import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import LovePage from "./pages/love-page/LovePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="love" element={<LovePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
