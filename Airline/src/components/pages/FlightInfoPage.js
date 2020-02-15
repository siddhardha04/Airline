import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as passengerActions from "../../redux/actions/passengerActions";
import { Spinner, Button } from "react-bootstrap";
import PassengersList from "../Feature/PassengersList";
import FilterPassenger from "../Feature/FilterPassenger";
import AncillaryList from "../Feature/AncillaryList";
import SeatMap from "../Feature/SeatMap";
import PassengerUncheckin from "../Feature/PassengerUncheckin";
import PropTypes from "prop-types";

class FlightInfoPage extends React.Component {
  state = {
    showPassengersList: false,
    showFilterPassenger: false,
    showAncillaryList: false,
    showSeatMap: false,
    showPassengerUncheckin: false,
    flightId: this.props.match.params.id
  };

  componentDidMount() {
    if (this.props.user.isSignedIn) {
      this.props.actions.loadPassengers(this.state.flightId).catch(error => {
        alert("loading passengers failed " + error);
      });
    } else this.props.history.push("/signin");
  }

  showPassengers = () => {
    this.setState({
      showPassengersList: true,
      showAncillaryList: false,
      showFilterPassenger: false,
      showSeatMap: false,
      showPassengerUncheckin: false
    });
  };

  showFilterPassenger = () => {
    this.setState({
      showPassengersList: false,
      showAncillaryList: false,
      showFilterPassenger: true
    });
  };

  showAncillary = () => {
    this.setState({ showAncillaryList: true, showPassengersList: false });
  };

  showSeatMap = () => {
    this.setState({
      showPassengersList: false,
      showSeatMap: true,
      showPassengerUncheckin: false
    });
  };

  showPassengerUncheckin = () => {
    this.setState({
      showPassengersList: false,
      showSeatMap: false,
      showPassengerUncheckin: true
    });
  };

  render() {
    if (this.props.user.userName === "staff@gmail.com") {
      return this.props.passengers.length !== 0 ? (
        <div className="df">
          <div className="side-nav tac">
            <h4>staff</h4>
            <Button variant="link" onClick={this.showSeatMap}>
              Seat Map
            </Button>
            <br />
            <Button variant="link" onClick={this.showPassengers}>
              Passengers List
            </Button>
            <br />
            <Link to={"/staff/checkin/" + this.state.flightId}>
              Passenger Checkin
            </Link>
            <br />
            <Button variant="link" onClick={this.showPassengerUncheckin}>
              Passenger Uncheckin
            </Button>
            <br />
            <Link to="/flights">Flights List</Link>
          </div>
          <div className="main-content">
            {this.state.showSeatMap ? (
              <SeatMap passengers={this.props.passengers} />
            ) : null}
            {this.state.showPassengersList ? (
              <PassengersList passengers={this.props.passengers} />
            ) : null}
            {this.state.showPassengerUncheckin ? (
              <PassengerUncheckin onsuccess={this.state.showPassengersList} />
            ) : null}
          </div>
        </div>
      ) : (
        <Spinner className="spinner" animation="border" role="status"></Spinner>
      );
    } else
      return (
        <div className="df">
          <div className="side-nav tac">
            <h4>Admin</h4>
            <Button variant="link" onClick={this.showPassengers}>
              Passengers List
            </Button>
            <br />
            <Button variant="link" onClick={this.showFilterPassenger}>
              Filter Passengers
            </Button>
            <br />
            <Link to={"/admin/addpassenger/" + this.state.flightId}>
              Add Passenger
            </Link>
            <Button variant="link" onClick={this.showAncillary}>
              Ancillary Services List
            </Button>
            <br />
            <Link to="/flights">Flights List</Link>
          </div>
          <div className="main-content">
            {this.state.showPassengersList ? (
              <PassengersList passengers={this.props.passengers} />
            ) : null}
            {this.state.showAncillaryList ? (
              <AncillaryList flightId={this.state.flightId} />
            ) : null}
            {this.state.showFilterPassenger ? (
              <FilterPassenger passengers={this.props.passengers} />
            ) : null}
          </div>
        </div>
      );
  }
}

FlightInfoPage.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
  passengers: PropTypes.array,
  match: PropTypes.object,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user,
    passengers: state.passengers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(passengerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightInfoPage);
