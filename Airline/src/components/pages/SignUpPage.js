import React from "react";
import axios from "axios";
import "./Login.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      passwordError: "",
      userExistError: ""
    };
  }

  handleChange = e => {
    let eventName = e.target.name;
    let value;
    switch (eventName) {
      case "firstname":
        value = e.target.value;
        this.setState({ firstname: value, firstnameError: "" }, () => {
          if (value.length === 0) {
            this.setState({ firstnameError: "First Name cannot be empty" });
          }
        });
        break;

      case "lastname":
        value = e.target.value;
        this.setState({ lastname: value, lastnameError: "" }, () => {
          if (value.length === 0) {
            this.setState({ lastnameError: "Last Name cannot be empty" });
          }
        });
        break;

      case "email":
        value = e.target.value;
        this.setState({ email: value, emailError: "" }, () => {
          if (value.length === 0) {
            this.setState({ emailError: "Email cannot be empty" });
          } else if (
            !value.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/)
          ) {
            this.setState({ emailError: "Not a valid email" });
          }
        });
        break;

      case "password":
        value = event.target.value;
        this.setState({ password: value, passwordError: "" }, () => {
          if (value.length === 0) {
            this.setState({ passwordError: "Password cannot be empty" });
          }
        });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    let formValues = this.state;
    if (
      formValues.firstname === "" &&
      formValues.lastname === "" &&
      formValues.email === "" &&
      formValues.password === ""
    ) {
      this.setState({
        firstnameError: "First name cannot be empty",
        lastnameError: "Last name cannot be empty",
        emailError: "Email cannot be empty",
        passwordError: "Password cannot be empty"
      });
    } else {
      let user = {
        email: formValues.email,
        password: formValues.password,
        isAdmin: false
      };

      let { data } = await axios.get(
        "http://localhost:3001/users?email=" + user.email
      );
      if (data.length === 0) {
        this.setState({ userExistError: "" });
        await axios.post("http://localhost:3001/users", user);
        this.props.history.push("/signin");
      } else {
        this.setState({ userExistError: "Email id already exists" });
      }
    }
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2>Sign-Up</h2>
          <form onSubmit={this.handleSubmit} action="/signup" method="post">
            <input
              type="text"
              id="firstname"
              className="fadeIn second"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.firstnameError}</p>
            <input
              type="text"
              id="lastname"
              className="fadeIn second"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.lastnameError}</p>
            <input
              type="email"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.emailError}</p>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.passwordError}</p>
            <input type="submit" className="fadeIn fourth" value="Sign Up" />
          </form>
          <p style={{ color: "red" }}>{this.state.userExistError}</p>
          <p>
            Already an user?<span></span> <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.object
};
