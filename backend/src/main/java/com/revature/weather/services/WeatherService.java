package com.revature.weather.services;

import com.revature.weather.dtos.CreateWeatherDTO;
import com.revature.weather.exceptions.ResourceNotFoundException;
import com.revature.weather.models.Weather;
import com.revature.weather.repositories.WeatherRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class WeatherService {

    private final WeatherRepository weatherRepository;

    public WeatherService(WeatherRepository weatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    public Weather createWeather(CreateWeatherDTO dto) {
        Weather weather = new Weather();
        weather.setCityName(dto.getCityName());
        weather.setRegion(dto.getRegion());
        weather.setLongitude(dto.getLongitude());
        weather.setLatitude(dto.getLatitude());
        weather.setTemperature(dto.getTemperature());
        weather.setTimestamp(new Date().getTime());
        weatherRepository.save(weather);
        return weather;
    }

    public Weather getWeatherById(int id) {
        return this.weatherRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Could not find any weather with this id!"));
    }

    public List<Weather> getWeathers(String cityName, String region) {
        if (!cityName.isEmpty() && !region.isEmpty()) {
            return weatherRepository.findByCityNameAndRegion(cityName, region);
        }
        if (!cityName.isEmpty()) {
            return weatherRepository.findByCityName(cityName);
        }
        if (!region.isEmpty()) {
            return weatherRepository.findByRegion(region);
        }
        return weatherRepository.findAll();
    }
}
