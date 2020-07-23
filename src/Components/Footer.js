import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  Copyright = () => {
    return (
      <h2 variant="body2" color="textSecondary" align="center">
        {"Copyright @ "}
        {"ChatOn "}
        {new Date().getFullYear()}
        {"."}
      </h2>
    );
  };

  render() {
    return (
      <footer>
        <div className="footer l-box is-center">{this.Copyright()}</div>
      </footer>
    );
  }
}
export default Footer;
