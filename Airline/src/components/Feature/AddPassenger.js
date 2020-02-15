import React from "react";
import { Form, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as passengerActions from "../../redux/actions/passengerActions";

class AddPassenger extends React.Component {
  categories = ["normal", "infant", "handicap"];
  state = {
    id: "",
    name: "",
    category: "",
    pnum: "",
    address: "",
    dob: "",
    flightId: this.props.match.params.id
  };

  handleChange = e => {
    let name = e.target.id;
    switch (name) {
      case "id":
        this.setState({ id: e.target.value });
        break;
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "category":
        this.setState({ category: e.target.value });
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
      default:
        break;
    }
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    let { id, name, category, pnum, address, dob, flightId } = this.state;
    if (
      id === "" ||
      name === "" ||
      category === "" ||
      category === "select category"
    ) {
      alert("please fill the id,name,category fields");
    } else {
      let newPassenger = {
        id: id,
        flightId: flightId,
        passengerName: name,
        category: category,
        passportNumber: pnum === "" ? "NA" : pnum,
        address: address === "" ? "NA" : address,
        dob: dob === "" ? "NA" : dob
      };
      this.props.actions.addPassenger(newPassenger);
      this.props.history.push("/flight/" + flightId);
    }
  };

  render() {
    return (
      <div className="ap-wrapper">
        <h2>Add Passenger</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="id">
            <Form.Label>Id:</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter id"
              value={this.state.id}
              onChange={this.handleChange}
            />
            <p className="error">{this.state.idError}</p>
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <p className="error">{this.state.nameError}</p>
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option value="select category">select category</option>
              {this.categories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Form.Control>
            <p className="error">{this.state.categoryError}</p>
          </Form.Group>
          <Form.Group controlId="passportnumber">
            <Form.Label>Passport Number</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter Passport number"
              value={this.state.pnum}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="dob">
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control
              type="input"
              placeholder="dd-mm-yyyy"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            <p className="error">{this.state.idError}</p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Passenger
          </Button>
        </Form>
      </div>
    );
  }
}

AddPassenger.propTypes = {
  match: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(passengerActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddPassenger);
