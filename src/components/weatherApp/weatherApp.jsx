import React, { Component } from 'react';

import Header from '~components/header/header';
import ForecastList from '~components/forecastList/forecastList';
import { getForecast, getWeather } from '~services/openWeatherMapServices';
import OpenWeatherMapUtils from '~classes/openWeatherMapUtils';

import "~components/weatherApp/weatherApp.scss";

class WeatherApp extends Component {
    state = {
        currentWeatherData: {},
        weatherForecast: {}
    }

    async componentDidMount() {

        const currentWeatherResponse = await getWeather();
        const weatherForecastResponse = await getForecast();

        const openWeatherMapUForecast = new OpenWeatherMapUtils(weatherForecastResponse)

        this.setState(
            {
                currentWeatherData: currentWeatherResponse,
                weatherForecastData: openWeatherMapUForecast.getForcastData()
            }
        );
    }

    render() {

        const { currentWeatherData, weatherForecast } = this.state;

        return (
            <React.Fragment>

                <Header weather={currentWeatherData} />

                <main>
                    <ForecastList forecast={weatherForecast} />
                </main>

            </React.Fragment>
        );
    }
}

export default WeatherApp;