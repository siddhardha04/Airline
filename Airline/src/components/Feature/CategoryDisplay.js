import React from "react";

export default function CategoryDisplay() {
  return (
    <div className="categories">
      <div className="category-data">
        <div className="category-circle green"></div>
        <div>:Not checked-in</div>
      </div>
      <div className="category-data">
        <div className="category-circle red"></div>
        <div>:checked-in</div>
      </div>
      <div className="category-data">
        <div className="category-circle yellow"></div>
        <div>:Infant</div>
      </div>
      <div className="category-data">
        <div className="category-circle blue"></div>
        <div>:Handicap</div>
      </div>
    </div>
  );
}
