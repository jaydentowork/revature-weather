package com.revature.weather.dtos;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateWeatherDTO {

    @NotBlank(message = "City name cannot be blank")
    private String cityName;

    @NotBlank(message = "Region cannot be blank")
    private String region;

    @NotNull(message = "Latitude cannot be empty")
    @Min(value = -90, message = "Latitude must be greater than -90 degree")
    @Max(value = 90, message = "Latitude must be less than 90 degree")
    private float latitude;

    @NotNull(message = "Longitude cannot be empty")
    @Min(value = -90, message = "Longitude must be greater than -90 degree")
    @Max(value = 90, message = "Longitude must be less than 90 degree")
    private float longitude;

    @NotNull(message = "Temperature cannot be empty")
    @Min(value = -200, message = "Temperature must be greater than -200")
    private float temperature;
}
