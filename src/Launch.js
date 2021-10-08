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
    <div key={data.launch.id}>
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
      <h2>Images</h2>
      {data.launch.links.flickr_images && (
        <div className="launch-photos">
          {data.launch.links.flickr_images.map((image) => (
            <img className="launch-photo" src={`${image}`} alt="launch" />
          ))}
        </div>
      )}
      <h2>Video</h2>
      {renderVideo(data.launch.links.video_link)}
    </div>
  );
}

export default Launch;

const renderVideo = (link) => {
  const linkArray = link.split(/[/=]/gi);
  const pathname = linkArray[linkArray.length - 1];

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${pathname}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
