"use client";

import { useState } from "react";
import Map, { Marker } from "react-map-gl";

export default function MapView() {
  const [pickup, setPickup] = useState(null);
  const [destination, setDestination] = useState(null);

  const stations = [
    { id: 1, name: "Main Gate", latitude: 6.404, longitude: 5.6218 },
    { id: 2, name: "Faculty of Engineering", latitude: 6.4088, longitude: 5.6195 },
    { id: 3, name: "Ekosodin", latitude: 6.4127, longitude: 5.6222 },
  ];

  return (
    <section className="mobile-only h-screen relative">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiaW5ub3ZhdG9yMjkiLCJhIjoiY20zZHV5OWVmMDZpbjJrcXVjYzBzMTFjYSJ9.51Yp-Wox2UTzc6aEZyG1OQ"
        initialViewState={{
          latitude: 6.404,
          longitude: 5.6218,
          zoom: 15,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{ width: "100%", height: "100%" }}
      >
        {stations.map((station) => (
          <Marker
            key={station.id}
            latitude={station.latitude}
            longitude={station.longitude}
          >
            <button
              className="bg-primary text-light p-2 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200"
              onClick={() =>
                pickup === null
                  ? setPickup(station)
                  : setDestination(station)
              }
              style={{ minWidth: "80px", whiteSpace: "nowrap" }}
            >
              {station.name}
            </button>
          </Marker>
        ))}
      </Map>

      <div className="absolute bottom-20 w-full bg-white pb-6 rounded-t-3xl shadow-lg">
        <h2 className="text-lg font-bold text-primary mb-2">Select Locations</h2>
        <div className="text-dark text-sm">
          <p className="mb-1">
            <strong>Pickup:</strong> {pickup?.name || "None selected"}
          </p>
          <p>
            <strong>Destination:</strong> {destination?.name || "None selected"}
          </p>
        </div>
      </div>

      <div>Mena</div>

      <style jsx>{`
        .bg-primary {
          background-color: #3D7069;
        }

        .text-light {
          color: #FFFFFF;
        }

        .text-dark {
          color: #071919;
        }

        .shadow-lg {
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
