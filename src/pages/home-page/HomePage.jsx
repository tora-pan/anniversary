import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../../components/heart/Heart";
import "./homePage.styles.css";

const HomePage = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [husbandsName, setHusbandsName] = useState("");
  const [date, setDate] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.toLocaleLowerCase() === "sawako" &&
      husbandsName.toLocaleLowerCase() === "travis" &&
      date === "2021-11-18"
    ) {
      setIsLoggedIn(true);
      navigate("love");
    } else {
      alert("You don't remember?!?");
    }
  };

  return (
    <div>
      <h1>Answer Correctly to Login</h1>
      <div className="login-card-container">
        <form className="login" onSubmit={handleSubmit}>
          <label className="label" htmlFor="">
            What is your name?
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="login-label" htmlFor="">
            What is your husbands name?
          </label>
          <input
            type="text"
            value={husbandsName}
            onChange={(e) => setHusbandsName(e.target.value)}
          />
          <label className="login-label">
            When is your anniversary this year?
          </label>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <Heart />
          <button>Submit Answer</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
