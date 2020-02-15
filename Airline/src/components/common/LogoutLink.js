import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as loginActions from "../../redux/actions/userLoginAction";
import PropTypes from "prop-types";

class LogoutLink extends React.Component {
  handleLogout = () => {
    this.props.dispatch(loginActions.userLogout());
  };
  render() {
    return (
      <Link className="nav-link" to="/">
        <span onClick={this.handleLogout}>Logout</span>
      </Link>
    );
  }
}

LogoutLink.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LogoutLink);
