import "./App.scss";
import React from "react";
import { useParams } from "react-router";
import { LAUNCH } from "./queries";
import { useQuery } from "@apollo/client";

function Launch() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCH, {
    variables: { id },
  });

  if (loading) return loading;
  if (error) return error;

  return (
    <div>
      <div className="title">
        <h1>{data.launch.mission_name}</h1>
        {data.launch.links.mission_patch_small && (
          <img
            loading="lazy"
            src={`${data.launch.links.mission_patch_small}`}
            alt="mission-patch"
          />
        )}
        {data.launch.details && (
          <div className="launch-details">
            <h2>Launch Details</h2>
            <p>{data.launch.details}</p>
          </div>
        )}
      </div>
      {data.launch.links.flickr_images && (
        <div className="launch-photos">
          {data.launch.links.flickr_images.map((image) => (
            <img class="launch-photo" src={`${image}`} alt="launch" />
          ))}
        </div>
      )}
    </div>
  );
}

export default Launch;
