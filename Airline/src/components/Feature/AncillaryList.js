import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

export default class AncillaryList extends Component {
  state = {
    flightData: {},
    dataStatus: false
  };

  async componentDidMount() {
    const resp = await axios.get(
      "http://localhost:3001/flights/" + this.props.flightId
    );
    this.setState({ flightData: resp.data, dataStatus: true });
    console.log(this.state.flightData);
  }

  render() {
    return this.state.dataStatus ? (
      <div className="ancillary-list">
        <p>
          <b>Meals:</b>
        </p>
        <ul className="list-none">
          {this.state.flightData.ancillaryServicesList.meals.map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
        <p>
          <b>Shopping items:</b>
        </p>
        <ul className="list-none">
          {this.state.flightData.ancillaryServicesList.shoppingItems.map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
    ) : (
      <Spinner className="spinner" animation="border" role="status"></Spinner>
    );
  }
}

AncillaryList.propTypes = {
  flightId: PropTypes.string.isRequired
};
