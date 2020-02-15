import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as loginActions from "../../redux/actions/userLoginAction";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      userExistError: ""
    };
  }

  handleChange = e => {
    let eventName = e.target.name;
    let value;
    switch (eventName) {
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
    if (formValues.email === "" && formValues.password === "") {
      this.setState({
        emailError: "Email cannot be empty",
        passwordError: "Password cannot be empty"
      });
    } else {
      let userData = {
        email: formValues.email,
        password: formValues.password
      };

      let { data } = await axios.get(
        "http://localhost:3001/users?email=" +
          userData.email +
          "&password=" +
          userData.password
      );

      if (data.length === 0) {
        this.setState({ userExistError: "User not exist" });
      } else {
        this.props.dispatch(
          loginActions.userLogin({ userName: data[0].email, isSignedIn: true })
        );

        //if (data[0].isAdmin === false)
        this.props.history.push("/flights");
        //else this.props.history.push("/admin/dashboard");
      }
    }
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2>Sign-in</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Email Id"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.emailError}</p>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.passwordError}</p>
            <input type="submit" className="fadeIn fourth" value="Log In" />
            <p style={{ color: "red" }}>{this.state.userExistError}</p>
          </form>
          <hr />
          <p>
            Dont have an account ?<span></span>{" "}
            <Link to="/signup">Create account</Link>
          </p>
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default connect()(SignInPage);
