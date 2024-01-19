import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../utils/api';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 70%;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #61dafb;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
`;

const WeatherInfoContainer = styled.div`
  margin-top: 20px;
`;

const WeatherInfo = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`;

const WeatherDisplay = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeather = async () => {
        try {
            setError(null);
            setLoading(true);

            const data = await api.fetchWeather(city);
            setWeatherData(data);
        } catch (error) {
            console.error(error.message);
            setError('Could not fetch weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <Button onClick={getWeather} disabled={loading}>
                {loading ? 'Loading...' : 'Get Weather'}
            </Button>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {weatherData && (
                <WeatherInfoContainer>
                    <WeatherInfo>
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                        <p>Temperature: {weatherData.main.temp} °C</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    </WeatherInfo>
                </WeatherInfoContainer>
            )}
        </Container>
    );
};

export default WeatherDisplay;