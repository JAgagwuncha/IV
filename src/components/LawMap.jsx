import React from "react";
import {MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const LawMap = () => {
  return (
    <MapContainer>
      style = {{ height: "90vh" }} zoom={2} center={(20, 100)}
    </MapContainer>
  );
};

export default LawMap;
