import React, { Component } from "react";
import type { WeatherData } from "../services/WeatherService";

interface GalleryProps {
  cities: WeatherData[];
}

export default function RegionGalleryComponent({ cities }: GalleryProps) {
  const getThemeClass = (temp: number) =>
    temp < 15 ? "cold-theme" : "warm-theme";
  const getIcon = (temp: number) => (temp < 15 ? "❄️" : "☀️");
  return (
    <div className="row g-3">
      {cities.map((city) => (
        <div className="col-md-6 col-xl-4" key={city.id}>
          <div className={`card ${getThemeClass(city.temperature)}`}>
            <div className="card-body">
              <h5 className="card-title mb-3">{city.cityName}</h5>
              <h2 className="display-6 mb-0">
                {city.temperature}° {getIcon(city.temperature)}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
