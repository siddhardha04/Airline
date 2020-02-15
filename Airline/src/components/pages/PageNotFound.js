import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="tac">
    <h2>OOPS!!! The requested page do not exists</h2>
    <Link to="/">Go To Home</Link>
  </div>
);

export default PageNotFound;
