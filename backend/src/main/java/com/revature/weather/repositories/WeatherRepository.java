package com.revature.weather.repositories;

import com.revature.weather.models.Weather;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeatherRepository extends JpaRepository<Weather,Integer> {
    List<Weather> findByCityNameAndRegion(String cityName, String Region);
    List<Weather> findByCityName(String cityName);
    List<Weather> findByRegion(String region);
}
