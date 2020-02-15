import React from "react";
import { Link } from "react-router-dom";

export default function LoginLink() {
  return (
    <Link to="/signin" className="nav-link">
      Login
    </Link>
  );
}
