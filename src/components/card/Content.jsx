import React from "react";

export default function Content(porps) {
  return (
    <div className="card" key={porps.id}>
      <div className="image">
        <img src={porps.url} alt="food" />
      </div>

      <h4>{porps.name}</h4>
    </div>
  );
}
