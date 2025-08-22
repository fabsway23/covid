import React from "react";
import { showDataOnMap } from "./util";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <ChangeMap center={center} zoom={zoom} />

        {showDataOnMap(countries, casesType)}
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
      </LeafletMap>
    </div>
  );
}

export default Map;
