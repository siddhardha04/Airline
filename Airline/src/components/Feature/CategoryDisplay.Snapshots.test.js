import React from "react";
import CategoryDisplay from "./CategoryDisplay";
import renderer from "react-test-renderer";

it("Will display seat categories", () => {
  const tree = renderer.create(<CategoryDisplay />);
  expect(tree).toMatchSnapshot();
});
