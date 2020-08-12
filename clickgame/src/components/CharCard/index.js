import React from "react";
import "./CharCard.css";

function CharCard(props) {
  return (
    
      <div className="card ">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    
  );
}

export default CharCard;