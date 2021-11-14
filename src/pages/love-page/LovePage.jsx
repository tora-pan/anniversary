import React from "react";
import Card from "../../components/card/Card";
import "./lovePage.styles.css";
import image1 from "../../img/emoteRef.PNG";

const LovePage = () => {
  return (
    <div className="love-page">
      <h1>LovePage</h1>
      <div className="card-container">
        <Card front="Test" img={image1} />
        <Card />
        <Card />
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default LovePage;
