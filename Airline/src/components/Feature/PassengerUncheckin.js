import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as passengerActions from "../../redux/actions/passengerActions";

class PassengerUncheckin extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    pnrNo: ""
  };

  handleChange = e => {
    this.setState({ pnrNo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const resp = await axios.get(
      "http://localhost:3001/passengersList/" + this.state.pnrNo
    );
    let pdata = resp.data;
    console.log(pdata);
    let uncheckedPassenger = {
      ...pdata,
      seatNo: "",
      ancillaryServicesList: {
        meals: [],
        shoppingItems: []
      }
    };

    console.log(uncheckedPassenger);

    this.props.actions.uncheckPassenger(uncheckedPassenger);
  };

  render() {
    return (
      <div style={{ width: "500px" }}>
        <h2>Uncheckin Passenger</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="id">
            <Form.Label>Pnr no</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter pnrno"
              value={this.state.pnrNo}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Uncheckin
          </Button>
        </Form>
      </div>
    );
  }
}

PassengerUncheckin.propTypes = {
  actions: PropTypes.object,
  history: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(passengerActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(PassengerUncheckin);
