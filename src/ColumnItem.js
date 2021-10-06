import React from "react";
import { Link } from "react-router-dom";

function ColumnItem({ id, image, name, details }) {
  return (
    <div className="item">
      <Link to={`/launch/${id}`}>
        <img src={`${image}`} loading="lazy" alt={`${name}`} />
        <div className="overlay">
          <h3>{`${name}`}</h3>
          <p className="text">{details}</p>
        </div>
      </Link>
    </div>
  );
}

export default ColumnItem;
