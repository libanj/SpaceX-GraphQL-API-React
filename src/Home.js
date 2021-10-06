import React, { Suspense } from "react";
import "./App.scss";
import { LAUNCHES } from "./queries";
import { useQuery } from "@apollo/client";

function Home() {
  const { loading, error, data } = useQuery(LAUNCHES);
  const ColumnItem = React.lazy(() => import("./ColumnItem"));
  const placeholderImage =
    "https://live.staticflickr.com/7855/buddyicons/130608600@N05_r.jpg?1546695896#130608600@N05";

  if (loading) return loading;
  if (error) return error;

  return (
    <div>
      <div className="title">
        <h1>Spacex Launches</h1>
      </div>
      <div className="column-items">
        <Suspense fallback={<div>Loading...</div>}>
          {data.launchesPast.map(({ id, links, mission_name, details }) => (
            <ColumnItem
              key={id}
              id={id}
              image={
                links.flickr_images[0]
                  ? links.flickr_images[0]
                  : placeholderImage
              }
              name={mission_name}
              details={details}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
