import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import "./GoogleMap.css";
import React from "react";

const key = "AIzaSyACMpqB6vk4KNzMaid5snIHLQEdSK24QMM";
const mapId = "60710ceb2b25377b";
const defaultProps = {
  center: {
    lat: -22.901812650294673,
    lng: -43.555410474273536,
  },
  zoom: 15,
};

const GoogleMap = () => {
  const [zoom, setZoom] = React.useState(defaultProps.zoom);
  const [center, setCenter] = React.useState(defaultProps.center);

  return (
    <APIProvider apiKey={key}>
      <div className="google-map">
        <Map
          onZoomChanged={(e) => setZoom(e.detail.zoom)}
          onCenterChanged={(e) => setCenter(e.detail.center)}
          zoom={zoom}
          center={center}
          mapId={mapId}
        >
          <AdvancedMarker position={defaultProps.center}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
