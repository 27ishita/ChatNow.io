import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  Copyright = () => {
    <h2 variant="body2" color="textSecondary" align="center">
      {"Copyright 0"}
      {"ChatOn"}
      {new Date().getFullYear()}
      {"."}
    </h2>;
  };

  render() {
    return (
      <Footer>
        <div className="footer l-box is-center">{this.Copyright()}</div>
      </Footer>
    );
  }
}
export default Footer;
