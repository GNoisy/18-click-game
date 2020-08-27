import React from "react";
import "./CharCard.css";

function CharCard(props) {
  const { handleClick, image } = props;
  return (
    
      <div className="card" onClick={handleClick}>
        <div className="img-container">
          <img alt={image.name} src={image.image} />
        </div>
      </div>
    
  );
}

export default CharCard;