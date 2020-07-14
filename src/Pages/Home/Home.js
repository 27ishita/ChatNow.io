import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Home.css";
import Images from "../../ProjectImage/ProjectImage";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">CHAT APP</h1>
            <p className="splash-subhead">Lets talk </p>

            <div id="custom-button-wrapper">
              <Link to="/Login">
                <a className="my-super-cool-btn">
                  <div className="dots-container">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                  </div>
                  <span className="buttoncooltext">Get Started</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <h2 className="content-head is-center">Application features</h2>

            <div className="Appfeatures">
              <div className="contenthead">
                <h3 className="content-subhead">
                  <i className="fa fa-rocket"></i>
                  lets get Started
                </h3>
                <p>register with this Application</p>
              </div>
              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                  <i className="fa fa-sign-in"></i>
                  Firebase Authentication
                </h3>
                <p>
                  we have implemented Firebase Authentication in our Application
                </p>
              </div>

              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                  <i className="fa fa-th-large"></i>
                  Media
                </h3>
                <p>share memes ,images,files with your loved ones</p>
              </div>

              <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                  <i className="fa fa-wrench"></i>
                  Updates
                </h3>
                <p>we keep working for new features and enhancements</p>
              </div>
            </div>
          </div>
          <div className="AppfeaturesFounder">
            <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
              <img
                width="300"
                alt="File Icons"
                className="pure-img-responsive"
                src={Images.ishita}
              />
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
              <h2 className="content-head content-head-ribbon">Ishita</h2>
              <p style={{ color: "black" }}>Developer</p>
              <p style={{ color: "black" }}>
                currently learning React and looking for a decent job
              </p>
            </div>
          </div>
          <div className="content">
            <h2 className="content-head is-center">Register here</h2>
            <div className="Appfeatures">
              <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                <form className="pure-form pure-form-stacked">
                  <fieldset>
                    <label for="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="enter your name"
                    ></input>

                    <label for="email"> Your Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="enter your email"
                    ></input>

                    <label for="password">Your Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="enter your password"
                    ></input>

                    <button type="submit" className="pure-button">
                      Sign Up
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
