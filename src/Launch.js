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
      </div>
    </div>
  );
}

export default Launch;
