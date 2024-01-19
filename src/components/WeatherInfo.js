import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FaExchangeAlt } from 'react-icons/fa';
import { WiThermometer, WiCloudy, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherInfoContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`;

const WeatherInfo = ({ data, displayUnit, setDisplayUnit, city, getWeather }) => {
    if (!data) {
        return null;
    }

    const { temp, weather, humidity, wind_speed } = data;

    const toggleTemperatureUnit = () => {
        const newDisplayUnit = displayUnit === 'C' ? 'F' : 'C';
        setDisplayUnit(newDisplayUnit);
    };

    const displayTemperature = () => {
        let roundedTemp;

        if (displayUnit === 'C') {
            roundedTemp = Math.round(temp);
        } else if (displayUnit === 'F') {
            const tempInFahrenheit = (temp * 9 / 5) + 32;
            roundedTemp = Math.round(tempInFahrenheit);
        }

        return `${roundedTemp} °${displayUnit}`;
    };

    return (
        <WeatherInfoContainer>
            <h2>Current Weather to {city}</h2>
            <p><WiThermometer /> Temperature: {displayTemperature()} <button onClick={toggleTemperatureUnit}> <FaExchangeAlt /> Switch Unit</button> </p>
            <p><WiCloudy /> Weather: {weather[0].description}</p>
            <p><WiHumidity /> Humidity: {humidity}%</p>
            <p><WiStrongWind /> Wind Speed: {wind_speed} m/s</p>
        </WeatherInfoContainer>
    );
};

WeatherInfo.propTypes = {
    data: PropTypes.shape({
        temp: PropTypes.number,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string,
            })
        ),
        humidity: PropTypes.number,
        wind_speed: PropTypes.number,
    }),
    displayUnit: PropTypes.string.isRequired,
};

export default WeatherInfo;