import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import * as passengerActions from "../../redux/actions/passengerActions";

class PassengerCheckIn extends React.Component {
  state = {
    pnrNo: "",
    pnrError: "",
    seatNo: "",
    seatError: "",
    flightId: this.props.match.params.id
  };

  flightData = this.props.flights.find(f => f.id === this.state.flightId);

  handlePnrChange = event => {
    this.setState({ pnrNo: event.target.value, pnrError: "" });
  };

  handleSeatChange = event => {
    this.setState({ seatNo: event.target.value, seatError: "" });
  };

  // validatePnr = () => {
  //   let { pnrNo } = this.state;
  //   let pdata = this.props.passengers.find(p => p.id === pnrNo);

  //   if (pnrNo === "") {
  //     this.setState({ pnrError: "Pnr no cannot be empty", pnrNo: "" });
  //   } else {
  //     if (!pdata) {
  //       this.setState({ pnrError: "Pnr no doesn't exist", pnrNo: "" });
  //     } else {
  //       if (pdata.seatNo !== "") {
  //         this.setState({
  //           pnrError: "passenger with above pnr is already checked-in",
  //           pnrNo: ""
  //         });
  //       }
  //     }
  //   }
  // };

  validateSeat = () => {
    let { seatNo } = this.state;
    if (this.props.passengers.find(p => p.seatNo === seatNo)) {
      this.setState({
        seatError: "Seat is already booked. please choose another one.",
        seatNo: ""
      });
    }
  };

  handleCheckin = event => {
    event.preventDefault();
    const checkedMeals = [];
    const checkedShoppingItems = [];
    let mealCheckboxes = document.getElementsByName("meal_items");
    for (var i = 0; i < mealCheckboxes.length; i++) {
      if (mealCheckboxes[i].checked === true)
        checkedMeals.push(mealCheckboxes[i].value);
    }

    let shoppingCheckboxes = document.getElementsByName("shopping_items");
    for (var j = 0; j < shoppingCheckboxes.length; j++) {
      if (shoppingCheckboxes[j].checked === true)
        checkedShoppingItems.push(shoppingCheckboxes[j].value);
    }
    let { pnrNo, seatNo } = this.state;
    let ancillaryServicesList = {
      meals: checkedMeals,
      shoppingItems: checkedShoppingItems
    };

    const pdata = this.props.passengers.find(p => p.id === pnrNo);
    let checkedInPassenger = {
      ...pdata,
      seatNo: seatNo,
      ancillaryServicesList: ancillaryServicesList
    };

    this.props.actions.checkinPassenger(checkedInPassenger);
    this.props.history.push("/flight/" + this.state.flightId);
  };

  render() {
    return (
      <div className="checkin-wrapper tac">
        <div>
          <h4>Passenger Check-in</h4>
          <Form onSubmit={this.handleCheckin}>
            <Form.Group controlId="pnrNo">
              <Form.Label>Pnr No:</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter pnr no"
                value={this.state.pnrNo}
                onChange={this.handlePnrChange}
                onBlur={this.validatePnr}
              />
              <p className="error">{this.state.pnrError}</p>
            </Form.Group>

            <Form.Group controlId="seatNo">
              <Form.Label>Seat No:</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter seat no"
                value={this.state.seatNo}
                onChange={this.handleSeatChange}
                onBlur={this.validateSeat}
              />
              <p className="error">{this.state.seatError}</p>
            </Form.Group>
            <h5>Available Ancillary Services</h5>
            <h6>Meals</h6>
            <Form.Group>
              {this.flightData.ancillaryServicesList.meals.map(item => (
                <Form.Check
                  name="meal_items"
                  key={item}
                  type="checkbox"
                  label={item}
                  value={item}
                />
              ))}
            </Form.Group>
            <h6>Shopping items</h6>
            <Form.Group>
              {this.flightData.ancillaryServicesList.shoppingItems.map(item => (
                <Form.Check
                  name="shopping_items"
                  key={item}
                  type="checkbox"
                  label={item}
                  value={item}
                />
              ))}
            </Form.Group>
            <Button variant="primary" type="submit">
              Check In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

PassengerCheckIn.propTypes = {
  passengers: PropTypes.array,
  flights: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    flights: state.flights,
    passengers: state.passengers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(passengerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerCheckIn);
