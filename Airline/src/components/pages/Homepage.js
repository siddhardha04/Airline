import React from "react";

export default function Homepage() {
  return (
    <div className="layout-wrapper">
      <div>
        <img
          className="banner-img"
          alt="bannerimage"
          src="../../../assests/homebanner.jpeg"
        />
      </div>
      <div className="welcome-text">Welcome to Pacific Airlines</div>
    </div>
  );
}
