import React from "react";
import CategoryDisplay from "./CategoryDisplay";
import SeatsDisplay from "./SeatsDisplay";
import PropTypes from "prop-types";

class SeatMap extends React.Component {
  render() {
    return (
      <div className="df fdr ml25 mr25">
        <div className="df fdc ml50 flex-item-80">
          <CategoryDisplay />
          <SeatsDisplay passengers={this.props.passengers} />
        </div>
      </div>
    );
  }
}

SeatMap.propTypes = {
  passengers: PropTypes.array.isRequired
};

export default SeatMap;
