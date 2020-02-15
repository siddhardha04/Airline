import React from "react";
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main-nav-header navbar navbar-expand navbar-dark">
        <Link to="/" className="navbar-brand">
          <img alt="logo" src="../../../assests/logo.png" height="30px" />
          {" Pacific Airlines"}
        </Link>
        <div className="login-nav ml-auto pr-md-5 navbar-nav">
          <div className="username-display">
            <h5>{this.props.user.userName}</h5>
          </div>
          <div className="login-display">
            {this.props.user.isSignedIn ? (
              <LogoutLink navprops={this.props} />
            ) : (
              <LoginLink />
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, null)(Header);
