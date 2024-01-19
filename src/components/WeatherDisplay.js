import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../utils/api';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  width: 200px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #61dafb;
  color: white;
  border: none;
  cursor: pointer;
`;

const WeatherInfoContainer = styled.div`
  margin-top: 20px;
`;

const WeatherDisplay = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeather = async () => {
        try {
            const data = await api.fetchWeather(city);
            setWeatherData(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Container>
            <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <Button onClick={getWeather}>Get Weather</Button>

            {weatherData && (
                <WeatherInfoContainer>
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </WeatherInfoContainer>
            )}
        </Container>
    );
};

export default WeatherDisplay;

