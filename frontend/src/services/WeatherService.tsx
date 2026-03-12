import React from "react";

export interface WeatherData {
  id: number;
  cityName: string;
  region: string;
  latitude: number;
  longtitude: number;
  temperature: number;
  time: string;
}
const API_URL = "http://localhost:8080/weather";

export const WeatherService = {
  searchWeather: async (
    cityName: string | null,
    region: string | null,
  ): Promise<WeatherData[]> => {
    let url = API_URL;
    const params = new URLSearchParams();
    if (cityName) params.append("cityName", cityName);
    if (region) params.append("region", region);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    const response = await fetch(url);

    if (response.status === 404) {
      throw new Error("404");
    }
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return response.json();
  },
};
