import React from "react";
import "../styles/Navbar.css";

const styles = {
    navbarStyle: {
      // background: "green",
      justifyContent: "space-between"//flex-end: items are packed toward to end line https://css-tricks.com/almanac/properties/j/justify-content/
    }
};

function Navbar() {
    return (

      <nav style={styles.navbarStyle} className="navbar sticky-top">
        <a className="navbar-brand" href="#"><span><h2>Bob's Burger</h2></span></a>
        <h2 className="text-white">Score: <span>0</span></h2>
      </nav>
    );
}
  
export default Navbar;