import React from "react";
import "../styles/Navbar.css";

const styles = {
    navbarStyle: {
      background: "green",
    //   justifyContent: "flex-end"//flex-end: items are packed toward to end line https://css-tricks.com/almanac/properties/j/justify-content/
    }
};

function Navbar() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <a href="/">Welcome</a>
      </nav>
    );
}
  
export default Navbar;