import React from "react";
import FlightList from "../Feature/FlightList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as flightActions from "../../redux/actions/flightActions";

class FlightsPage extends React.Component {
  componentDidMount() {
    if (this.props.user.isSignedIn) {
      if (this.props.flights.length === 0) {
        this.props.actions.loadFlights().catch(error => {
          alert("loading flights failed " + error);
        });
      }
    } else this.props.history.push("/signin");
  }

  render() {
    return (
      <div>
        <FlightList flights={this.props.flights} />
      </div>
    );
  }
}

FlightsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  flights: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    flights: state.flights,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flightActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsPage);
