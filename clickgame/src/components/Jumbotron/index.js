import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
      <h1 className="display-3 text-center">Clicky Game!</h1>
      <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
  );
}

export default Jumbotron;