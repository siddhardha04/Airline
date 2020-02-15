import React from "react";
import FlightCard from "./FlightCard";

const FlightList = ({ flights }) => {
  return flights.map(flight => (
    <FlightCard key={flight.id} flightData={flight} />
  ));
};

export default FlightList;
