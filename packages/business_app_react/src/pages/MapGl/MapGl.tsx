import React, { useEffect } from "react";
import { Layer, Source, Map, useMap } from "react-map-gl";
import config from "../../config/environment";
import "mapbox-gl/dist/mapbox-gl.css";
import { geoData } from "./geoData";
import delhigeojson from "./delhi.json";
import mockService from "../../services/mockService/mockService";

const accessToken: string = config.mapboxAccessToken;

const layerStyle = {
  type: "fill",
  paint: {
    "fill-color": "#0091cd",
    "fill-outline-color": "red",
    "fill-opacity": 0.2,
  },
};

export const MapGl: React.FC = () => {
  const { mapboxApp } = useMap();

  const mockApi = async () => {
    try {
      const res = await mockService.getTodoData(1);
      console.log("MapGL mockAPI get todo data", res.data);
    } catch (error) {
      alert("Error Happened in MapGL mockAPI get todo data service");
    }
  };

  useEffect(() => {
    const addImageToMap = () => {
      console.log("mapboxApp has Image===>> ", mapboxApp?.hasImage("map-pin"));
      if (mapboxApp) {
        console.log("map====>>>", mapboxApp);
        // let img = new Image(20, 20);
        // img.src = markerIcon;
        // mapboxApp.addImage("marker-icon", img, { sdf: true });
      }

      console.log(
        "mapboxApp has Image 22===>> ",
        mapboxApp?.hasImage("marker-icon"),
        mapboxApp?.hasImage("map-pin")
      );
    };

    addImageToMap();
  }, [mapboxApp]);

  useEffect(() => {
    mockApi();
  }, []);

  return (
    <div className="mapbox-app">
      <Map
        id="mapboxApp"
        mapboxAccessToken={accessToken}
        attributionControl={false}
        initialViewState={{
          longitude: 77.24026743975827,
          latitude: 28.519684002373889,
          zoom: 10,
        }}
        doubleClickZoom={false}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source id="boundaries" type="geojson" data={delhigeojson}>
          <Layer {...layerStyle} />
        </Source>
        <Source id="locationMarkers" type="geojson" data={geoData}>
          <Layer
            {...{
              type: "symbol",
              layout: {
                visibility: "visible",
                "icon-image": "map-pin",
              },
            }}
          />
        </Source>
      </Map>
    </div>
  );
};
