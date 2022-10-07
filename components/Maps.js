import Head from 'next/head';
import { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import PlaceItems from "./PlaceItems";

export default function Maps({ places }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const handleOnLoad = (map) => {
    if (typeof window !== "undefined") {
      const google = window.google;
      const bounds = new google.maps.LatLngBounds();
      places.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);
    }
  };
  return (
    <div className='bg-slate-300 h-screen'>
      <main>
        <div className="container md:mx-10">
          <div className="absolute md:right-20 right-0 top-20 bottom-0 md:left-20 left-0">
            <GoogleMap
              onLoad={handleOnLoad}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "500px" }}
            >
              {places.map(item => (
                <Marker
                  icon={{
                    path: typeof window !== "undefined" && window.google.maps.SymbolPath.CIRCLE,
                    fillColor: "#ED028C",
                    fillOpacity: 0.9,
                    scale: 7,
                    strokeColor: "#ED028C",
                    strokeWeight: 2
                  }}
                  key={item.id}
                  position={item.position}
                  onClick={() => handleActiveMarker(item.id)}
                >
                  {activeMarker === item.id ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}
                      style={{ height: "400px", padding: 0 }}>
                      <PlaceItems item={item} />
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))}
            </GoogleMap>
          </div>
        </div>
      </main>

    </div>
  )
}