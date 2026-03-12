import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import { WeatherService, type WeatherData } from "../services/WeatherService";
import WeatherDisplayComponent from "./WeatherDisplayComponent";
import RegionGalleryComponent from "./RegionGalleryComponent";

export default function WeatherDashboard() {
  const [selectedCities, setSelectedCity] = useState<WeatherData | null>(null);
  const [regionCities, setRegionCities] = useState<WeatherData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearchData = async (
    query: string,
    searchType: "city" | "region",
  ) => {
    setErrorMessage(null);
    setSelectedCity(null);
    setRegionCities([]);
    try {
      if (searchType === "city") {
        const cityResults = await WeatherService.searchWeather(query, null);
        if (cityResults.length === 0) throw new Error("404");
        const cityData = cityResults[0];
        setSelectedCity(cityData);
        const regionalResults = await WeatherService.searchWeather(
          null,
          cityData.region,
        );
        setRegionCities(regionalResults.filter((c) => c.id !== cityData.id));
      } else if (searchType === "region") {
        const regionalResults = await WeatherService.searchWeather(null, query);
        if (regionalResults.length === 0) throw new Error("404");
        setRegionCities(regionalResults);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <div className="card-body">
        <h1 className="text-center"> Weather Dashboard</h1>
        <SearchComponent onSearch={handleSearchData} />
      </div>
      {errorMessage && <div className="alert alert-danger">errorMessage</div>}
      <div className="row mt-4">
        <div className="col-md-5 col-lg-4">
          {selectedCities && (
            <WeatherDisplayComponent weather={selectedCities} />
          )}
        </div>
        <div className="col-md-5 col-lg-4">
          {regionCities.length > 0 && (
            <RegionGalleryComponent cities={regionCities} />
          )}
        </div>
      </div>
    </div>
  );
}
