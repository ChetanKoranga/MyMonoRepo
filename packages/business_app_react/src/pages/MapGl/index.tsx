import { MapProvider } from "react-map-gl";
import { MapGl } from "./MapGl";
import React from "react";

const index: React.FC = () => {
  return (
    <div>
      <MapProvider>
        <MapGl />
      </MapProvider>
    </div>
  );
};

export default index;
