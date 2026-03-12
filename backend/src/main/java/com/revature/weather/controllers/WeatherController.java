package com.revature.weather.controllers;

import com.revature.weather.dtos.CreateWeatherDTO;
import com.revature.weather.exceptions.ProhibitedMethods;
import com.revature.weather.models.Weather;
import com.revature.weather.services.WeatherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WeatherController {

    public final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public ResponseEntity<List<Weather>> getAllWeathers(@RequestParam(required = false) String cityName, @RequestParam(required = false) String region) {
        System.out.println(cityName + " " + region);
        List<Weather> weatherList = weatherService.getWeathers(cityName, region);
        return ResponseEntity.ok(weatherList);
    }

    @PostMapping("/weather")
    public ResponseEntity<Weather> createNewWeather(@RequestBody CreateWeatherDTO dto) {
        return new ResponseEntity<Weather>(weatherService.createWeather(dto), HttpStatus.CREATED);
    }

    @GetMapping("/weather/{id}")
    public ResponseEntity<Weather> getWeatherById(@PathVariable Integer id) {
        Weather weather = weatherService.getWeatherById(id);
        return ResponseEntity.ok(weather);
    }

    @DeleteMapping("/weather/{id}")
    public ResponseEntity<Weather> deleteWeather(@PathVariable Integer id) {
        throw new ProhibitedMethods("Method not allows");
    }

    @PutMapping("/weather/{id}")
    public ResponseEntity<Weather> putWeather(@PathVariable Integer id) {
        throw new ProhibitedMethods("Method not allows");
    }

    @PatchMapping("/weather/{id}")
    public ResponseEntity<Weather> patchWeather(@PathVariable Integer id) {
        throw new ProhibitedMethods("Method not allows");
    }
}
