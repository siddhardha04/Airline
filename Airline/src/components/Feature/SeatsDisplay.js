import React from "react";
import Seat from "./Seat";
import PropTypes from "prop-types";

export default class SeatDisplay extends React.Component {
  state = {
    sc: ["A", "B", "C", "D"],
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    totalSeats: function() {
      return this.sc.map(sc => this.nums.map(num => sc + num));
    }
  };

  render() {
    return (
      <div className="mt15">
        <div className="df">
          <div className="flex-item-25">
            {this.state.totalSeats()[0].map(seat => {
              let pdata = this.props.passengers.find(p => p.seatNo === seat);
              if (pdata) {
                let pcat = pdata.category;
                if (pcat === "normal")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"red"}
                    />
                  );
                else if (pcat === "infant")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"yellow"}
                    />
                  );
                else if (pcat === "handicap")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"#4646a7"}
                    />
                  );
              } else return <Seat key={seat} seatNo={seat} color={"green"} />;
            })}
          </div>
          <div className="flex-item-25">
            {this.state.totalSeats()[1].map(seat => {
              let pdata = this.props.passengers.find(p => p.seatNo === seat);
              if (pdata) {
                let pcat = pdata.category;
                if (pcat === "normal")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"red"}
                    />
                  );
                else if (pcat === "infant")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"yellow"}
                    />
                  );
                else if (pcat === "handicap")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"#4646a7"}
                    />
                  );
              } else return <Seat key={seat} seatNo={seat} color={"green"} />;
            })}
          </div>
          <div className="flex-item-25">
            {this.state.totalSeats()[2].map(seat => {
              let pdata = this.props.passengers.find(p => p.seatNo === seat);
              if (pdata) {
                let pcat = pdata.category;
                if (pcat === "normal")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"red"}
                    />
                  );
                else if (pcat === "infant")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"yellow"}
                    />
                  );
                else if (pcat === "handicap")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"#4646a7"}
                    />
                  );
              } else return <Seat key={seat} seatNo={seat} color={"green"} />;
            })}
          </div>
          <div className="flex-item-25">
            {this.state.totalSeats()[3].map(seat => {
              let pdata = this.props.passengers.find(p => p.seatNo === seat);
              if (pdata) {
                let pcat = pdata.category;
                if (pcat === "normal")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"red"}
                    />
                  );
                else if (pcat === "infant")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"yellow"}
                    />
                  );
                else if (pcat === "handicap")
                  return (
                    <Seat
                      key={pdata.seatNo}
                      seatNo={pdata.seatNo}
                      color={"#4646a7"}
                    />
                  );
              } else return <Seat key={seat} seatNo={seat} color={"green"} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

SeatDisplay.propTypes = {
  passengers: PropTypes.array
};
