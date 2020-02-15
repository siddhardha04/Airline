import React from "react";
import Seat from "./Seat";
import renderer from "react-test-renderer";

it("Seat Will have B5 as seat no", () => {
  const tree = renderer.create(<Seat color={"green"} seatNo="B5" />);
  expect(tree).toMatchSnapshot();
});
