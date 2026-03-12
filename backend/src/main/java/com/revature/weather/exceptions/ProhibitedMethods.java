package com.revature.weather.exceptions;

public class ProhibitedMethods extends RuntimeException {
    public ProhibitedMethods(String message) {
        super(message);
    }
}
