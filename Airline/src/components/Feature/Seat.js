import React from "react";
import PropTypes from "prop-types";

export default function Seat(props) {
  let color = props.color;
  let seatNo = props.seatNo;

  let seatColor = {
    backgroundColor: color
  };

  return (
    <div className="seat" style={seatColor}>
      <h6 className="seat-num">{seatNo}</h6>
    </div>
  );
}

Seat.propTypes = {
  color: PropTypes.string.isRequired,
  seatNo: PropTypes.string.isRequired
};
