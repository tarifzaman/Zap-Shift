import React, { useRef, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import L from "leaflet";

// Leaflet এর ডিফল্ট মার্কার আইকন অনেক সময় রিঅ্যাক্টে লোড হয় না, এটি তার সমাধান
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const position = [23.685, 90.3563]; // বাংলাদেশ সেন্টার
  const serviceCenters = useLoaderData() || []; // সেফটি চেক
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    if (!location) return;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district && mapRef.current) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14, { duration: 2 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-teal-950 mb-2">
            Coverage Map
          </h2>
          <p className="text-gray-500">
            We are available in {serviceCenters.length} districts across the
            country
          </p>
        </div>

        {/* Modern Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full md:max-w-md"
        >
          <div className="relative w-full group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-teal-600">
              <svg
                className="w-5 h-5 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="search"
              name="location"
              className="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-gray-700 shadow-sm"
              placeholder="Search your district..."
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-r-xl font-semibold transition-colors shadow-md active:scale-95"
          >
            Search
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="relative border-4 border-white shadow-2xl rounded-3xl overflow-hidden z-0">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-[600px] md:h-[750px] w-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup className="custom-popup">
                <div className="p-1">
                  <h4 className="text-lg font-bold text-teal-900 border-b pb-1 mb-2">
                    {center.district}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-teal-700">
                      Service Area:
                    </span>{" "}
                    <br />
                    {Array.isArray(center.covered_area)
                      ? center.covered_area.join(", ")
                      : center.covered_area}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Extra Styling for Leaflet focus */}
      <style>{`
                .leaflet-container {
                    font-family: inherit;
                }
                .custom-popup .leaflet-popup-content-wrapper {
                    border-radius: 12px;
                    padding: 4px;
                }
            `}</style>
    </div>
  );
};

export default Coverage;
