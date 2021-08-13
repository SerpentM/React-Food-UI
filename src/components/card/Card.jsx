import React from "react";
import Content from "./Content";
import food from "./food";
export default function Card() {
  return (
    <div className="card-inner-container ">
      {food.map((data) => {
        return <Content name={data.Name} url={data.url} id={data.id} />;
      })}
    </div>
  );
}
