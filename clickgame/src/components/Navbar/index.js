import React from "react";
import "./Navbar.css";

const styles = {
    navbarStyle: {
      // background: "green",
      justifyContent: "space-between"//flex-end: items are packed toward to end line https://css-tricks.com/almanac/properties/j/justify-content/
    }
};

function Navbar(props) {
    const { displayText, score } = props; 
    

    return (

      <nav style={styles.navbarStyle} className="navbar sticky-top">
        <a className="navbar-brand" href="#"><span><h2>Bob's Burgers</h2></span></a>
        <h2 className="text-white">{displayText}</h2>
        <h2 className="text-white">Score: {score}</h2>
      </nav>
    );
}
  
export default Navbar;