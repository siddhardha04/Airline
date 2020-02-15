import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

export default function PassengerDetailsCard(props) {
  let passengerData = props.passengerData;
  return (
    <div style={{ flex: "1 1 20%" }}>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "rgba(230, 212, 212, 0.6)"
        }}
      >
        <Card.Body>
          <h5>pnrNo</h5>
          <span>{passengerData.pnrNo}</span>
          <h5>Passenger Name</h5>
          <span>{passengerData.passengerName}</span>
        </Card.Body>
      </Card>
    </div>
  );
}

PassengerDetailsCard.propTypes = {
  passengerData: PropTypes.object
};
