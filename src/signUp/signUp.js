import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import firebase from "../Services/firebase";
import { Card } from "react-bootstrap";

import CssBaseline from "@material-ui/core/CssBaseline";
import Textfield from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LoginString from "../logIn/LoginStrings";

export default class signUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      error: null,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmtit = this.handleSubmtit.bind(this);
  }

  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmtit(event) {
    const { name, password, email } = this.state;
    event.preventDefault();

    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (result) => {
          firebase
            .firestore()
            .collection("users")
            .add({
              name,
              id: result.user.uid,
              password,
              URL: "",
              messages: [{ notificationId: "", number: 0 }],
            })
            .then((docRef) => {
              localStorage.setItem(LoginString.ID, result.user.uid);
              localStorage.setItem(LoginString.Name, name);
              localStorage.setItem(LoginString.Email, email);
              localStorage.setItem(LoginString.Password, password);
              localStorage.setItem(LoginString.PhotoURL, "");
              localStorage.setItem(LoginString.UPLOAD_CHANGED, "state_changed");
              localStorage.setItem(LoginString.Description, "");
              localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id);
              this.setState({
                name: "",
                password: "",
                url: "",
              });
              this.props.history.push("/chat");
            })
            .catch((error) => {
              console.error("Error handling document", error);
            });
        });
    } catch (error) {
      document.getElementById("1").innerHTML = "error! pls try again";
    }
  }

  render() {
    const Signinsee = {
      display: "flex",
      flexDirection: "coloumn",
      alignItems: "center",
      color: "black",
      backgroundColor: "#3CB371",
      width: "100%",
      boxShadow: "0 5px 5px #80888",
      height: "10rem",
      paddingTop: "48px",
      opacity: "0.5",
      borderBottom: "10px solid green",
    };
    return (
      <div>
        <CssBaseline />
        <Card style={Signinsee}>
          <div>
            <Typography component="h1" variant="h5">
              SignUp To
            </Typography>
          </div>
          <div>
            <Link to="/">
              <button className="btn">
                <i className="fa fa-home">WebChat</i>
              </button>
            </Link>
          </div>
        </Card>
        <Card className="formacontrooutside">
          <form className="customform" noValidate onSubmit={this.handleSubmit}>
            <Textfield
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address-example:abc@gmail.com"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handlechange}
              value={this.state.email}
            />
            <Textfield
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.handlechange}
              value={this.state.name}
            />
            <Textfield
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="current-password"
              name="password"
              type="password"
              autoComplete="password"
              autoFocus
              onChange={this.handlechange}
              value={this.state.password}
            />
            <div>
              <p style={{ color: "grey", fontSize: "15px", marginLeft: "0" }}>
                password length should be greater than 6 (digits,alphabets)
              </p>
            </div>
            <div className="CenterAligningItems">
              <button className="button1" type="submit">
                <span>Sign Up</span>
              </button>

              <div>
                <p style={{ color: "grey" }}>Already have an account?</p>
                <Link to="/login">Login In</Link>
              </div>

              <div className="error">
                <p id="1" style={{ color: "red" }}></p>
              </div>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}
