import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PassengersList(props) {
  let { passengers } = props;
  let updatePassengerUrl = "/admin/" + passengers[0].flightId;
  return (
    <>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Pnr No</th>
            <th>Passenger Name</th>
            <th>Seat No</th>
            <th>Ancillary Services</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map(passenger => (
            <tr key={passenger.id}>
              <td>
                <Link to={updatePassengerUrl + "/" + passenger.id}>
                  {passenger.id}
                </Link>
              </td>
              <td>{passenger.passengerName}</td>
              <td>{passenger.seatNo}</td>
              <td>
                {passenger.ancillaryServicesList ? (
                  <>
                    <p>
                      <b>Meals:</b>
                    </p>
                    <ul className="list-none">
                      {passenger.ancillaryServicesList.meals.map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                    <p>
                      <b>Shopping items:</b>
                    </p>
                    <ul className="list-none">
                      {passenger.ancillaryServicesList.shoppingItems.map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

PassengersList.propTypes = {
  passengers: PropTypes.array
};

export default PassengersList;
