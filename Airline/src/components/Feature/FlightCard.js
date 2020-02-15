import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class FlightCard extends React.Component {
  flightData = this.props.flightData;

  handleCheckin = () => {
    let url = "/flight/" + this.flightData.id;
    this.props.history.push(url);
  };

  render() {
    return (
      <div className="flightcard-wrapper">
        <div className="df al jc">
          <div className="flex-item">
            <h4>{this.flightData.Origin}</h4>
          </div>
          <div className="flex-item">
            <h4>To</h4>
          </div>
          <div>
            <h4>{this.flightData.Destination}</h4>
          </div>
        </div>
        <div className="df al jc">
          <div className="flex-item" style={{ flex: "1 1 0" }}>
            <h4>{this.flightData.departureTime}</h4>
          </div>
          <div>
            <h4>{this.flightData.arrivalTime}</h4>
          </div>
        </div>
        <div className="tac">
          <h3>{this.flightData.flightName}</h3>
        </div>
        <div className="tac">
          <input
            type="button"
            value="View"
            onClick={this.handleCheckin}
          ></input>
        </div>
      </div>
    );
  }
}

FlightCard.propTypes = {
  flightData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(FlightCard);
