import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as passengerActions from "../../redux/actions/passengerActions";

class UpdatePassenger extends React.Component {
  state = {
    name: "",
    pnum: "",
    address: "",
    dob: "",
    seatNo: "",
    seatNoError: "",
    pdata: {}
  };

  async componentDidMount() {
    if (this.props.user.isSignedIn) {
      const resp = await axios.get(
        "http://localhost:3001/passengersList/" + this.props.match.params.id
      );
      const pdata = resp.data;
      this.setState({
        name: pdata.passengerName,
        pnum: pdata.passportNumber,
        address: pdata.address,
        dob: pdata.dob,
        seatNo: pdata.seatNo,
        pdata: pdata
      });
    } else this.props.history.push("/signin");
  }

  handleChange = e => {
    let name = e.target.id;
    switch (name) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "passportnumber":
        this.setState({ pnum: e.target.value });
        break;
      case "address":
        this.setState({ address: e.target.value });
        break;
      case "dob":
        this.setState({ dob: e.target.value });
        break;
      case "seatno":
        this.setState({ seatNo: e.target.value });
        break;
      default:
        break;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.user.userName === "staff@gmail.com") {
      let { seatNo, pdata } = this.state;
      if (seatNo === "") {
        alert("please fill the seatno field");
      } else {
        const resp = await axios.get(
          "http://localhost:3001/passengersList/?flightId=" +
            this.state.pdata.flightId +
            "&seatNo=" +
            seatNo
        );

        if (resp.data.length === 1) {
          this.setState({
            seatNoError: "Seat is not available.please choose another."
          });
        } else {
          let updatedPassenger = {
            ...pdata,
            seatNo: seatNo
          };
          this.props.actions.updatePassenger(updatedPassenger);
          this.props.history.push("/flight/" + pdata.flightId);
        }
      }
    } else {
      let { name, pnum, address, dob, pdata } = this.state;
      if (name === "" || pnum === "" || address === "") {
        alert("please fill the name,passport number,address fields");
      } else {
        let updatedPassenger = {
          ...pdata,
          passengerName: name,
          passportNumber: pnum,
          dob: dob,
          address: address
        };
        console.log(updatedPassenger);
        this.props.actions.updatePassenger(updatedPassenger);
        this.props.history.push("/flight/" + pdata.flightId);
      }
    }
  };

  render() {
    if (this.props.user.userName === "staff@gmail.com") {
      return (
        <div className="up-wrapper">
          <h2>Update Passenger</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                disabled
                type="input"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passportnumber">
              <Form.Label>Passport Number</Form.Label>
              <Form.Control
                disabled
                type="input"
                value={this.state.pnum}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                disabled
                type="input"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="seatno">
              <Form.Label>Seat No:</Form.Label>
              <Form.Control
                type="input"
                value={this.state.seatNo}
                onChange={this.handleChange}
              />
            </Form.Group>
            <p className="error">{this.state.seatNoError}</p>
            <Button variant="primary" type="submit">
              Update Passenger
            </Button>
          </Form>
        </div>
      );
    } else {
      return (
        <div className="up-wrapper">
          <h2>Update Passenger</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="input"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passportnumber">
              <Form.Label>Passport Number</Form.Label>
              <Form.Control
                type="input"
                value={this.state.pnum}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="input"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dob">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="input"
                value={this.state.dob}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Passenger
            </Button>
          </Form>
        </div>
      );
    }
  }
}

UpdatePassenger.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(passengerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassenger);
