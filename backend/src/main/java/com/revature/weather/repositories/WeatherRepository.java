package com.revature.weather.repositories;

import com.revature.weather.models.Weather;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeatherRepository extends JpaRepository<Weather,Integer> {
    List<Weather> findByCityNameAndRegionIgnoreCase(String cityName, String Region);
    List<Weather> findByCityNameIgnoreCase(String cityName);
    List<Weather> findByRegionIgnoreCase(String region);
}
