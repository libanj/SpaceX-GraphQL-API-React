import React from "react";
import "./App.scss";
import ColumnItem from "./ColumnItem";
import { SHIPS } from "./queries";
import { useQuery } from "@apollo/client";

function Home() {
  const { loading, error, data } = useQuery(SHIPS);

  const placeholderImage =
    "https://live.staticflickr.com/7855/buddyicons/130608600@N05_r.jpg?1546695896#130608600@N05";

  if (loading) return loading;
  if (error) return error;

  return (
    <div>
      <div className="title">
        <h1>Spacex Missions</h1>
      </div>
      <div className="column-items">
        {data.ships.map(({ id, image, name }) => (
          <ColumnItem
            key={id}
            id={id}
            image={image ? image : placeholderImage}
            name={name}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
