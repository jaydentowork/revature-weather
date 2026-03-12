import { useState } from "react";
import type { WeatherData } from "../services/WeatherService";

interface DisplayProps {
  weather: WeatherData;
}

export default function WeatherDisplayComponent({ weather }: DisplayProps) {
  const [isFullDetail, setIsFullDetail] = useState(true);
  const isCold = weather.temperature < 15;
  const themeClass = isCold ? "cold-theme" : "warm-theme";
  const icon = isCold ? "❄️" : "☀️";

  return (
    <div className={`card shadow-sm mb-4 ${themeClass}`}>
      <div className="card-body">
        <button
          className="btn btn-sm"
          onClick={() => setIsFullDetail(!isFullDetail)}
        >
          {isFullDetail ? "Show less" : "Show More"}
        </button>
        <h3 className="card-title">
          {weather.cityName} {icon}
        </h3>
        <h1 className="display-4">{weather.temperature}°C</h1>
        {isFullDetail && (
          <div className="mt-4">
            <p className="mb-1">
              <strong>Region: </strong>
              {weather.region}
            </p>
            <p className="mb-1">
              <strong>Lattitude/Longtitude: </strong>
              {weather.latitude},{weather.longtitude}
            </p>
            <p className="mb-1">
              <strong>Time: </strong>
              {weather.time}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
