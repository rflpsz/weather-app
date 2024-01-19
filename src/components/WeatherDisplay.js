import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { fetchWeatherByCoordinates } from '../utils/api';
import { Marker } from '@react-google-maps/api';
import WeatherInfo from './WeatherInfo';
import { TailSpin } from 'react-loader-spinner';
import AlertModal from './AlertModal';


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

const containerStyle = {
    width: '100%',
    height: '200px',
    marginBottom: '10px'
};

const center = {
    lat: 0,
    lng: 0,
};

const WeatherInfoContainer = styled.div`
  margin-top: 20px;
`;

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const LoadingMessage = styled.div`
  color: #555;
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 10px;
`;

const libraries = ['places'];

const WeatherDisplay = () => {

    const [showAlertModal, setShowAlertModal] = useState(false);

    const [displayUnit, setDisplayUnit] = useState('C');
    const [unit] = useState('metric');
    const [city, setCity] = useState('');
    const [weatherCity, setWeatherCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const autocomplete = useRef(null);

    const getWeather = useCallback(async () => {
        try {
            setError(null);
            setLoading(true);

            if (!coordinates) {
                throw new Error('Invalid coordinates.');
            }

            console.log('Coordinates:', coordinates);
            console.log('Unit:', unit);

            const { lat, lng } = coordinates;

            const data = await fetchWeatherByCoordinates(lat, lng, unit);

            if (data.cod && data.cod !== '200') {
                throw new Error(data.message);
            }

            if (data.alerts && data.alerts.length > 0) {
                setShowAlertModal(true);
            }

            setWeatherData(data);

        } catch (error) {
            console.error(error.message);
            setError('Could not fetch weather data. Please enter a valid city name.');
        } finally {
            setLoading(false);
        }
    }, [coordinates, unit]);

    const handlePlaceSelect = (place) => {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        setCoordinates({ lat, lng });
        setWeatherCity(place.name);
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey,
        libraries,
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading maps';

    return (
        <Container>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinates || center}
                zoom={coordinates ? 10 : 2}
            >
                {coordinates && (
                    <Marker
                        position={coordinates}
                        title="Selected City"
                    />
                )}
            </GoogleMap>

            <StandaloneSearchBox
                onLoad={(ref) => (autocomplete.current = ref)}
                onPlacesChanged={() => {
                    const places = autocomplete.current.getPlaces();
                    handlePlaceSelect(places[0]);
                }}
            >
                <Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
            </StandaloneSearchBox>

            <Button
                onClick={getWeather}
                disabled={loading || !city}
                style={{ backgroundColor: loading || !city ? '#ccc' : '#61dafb' }}
            >
                {loading ? (
                    <TailSpin color="#fff" height={20} width={20} />
                ) : (
                    'Get Weather'
                )}
            </Button>

            {loading && <LoadingMessage>Loading weather data...</LoadingMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {weatherData && (
                <WeatherInfoContainer>
                    <WeatherInfo
                        data={weatherData.current}
                        displayUnit={displayUnit}
                        setDisplayUnit={setDisplayUnit}
                        city={weatherCity}
                        getWeather={getWeather}
                    />
                </WeatherInfoContainer>
            )}
            
            {showAlertModal && weatherData && weatherData.alerts && (
                <AlertModal
                    isOpen={showAlertModal}
                    onClose={() => setShowAlertModal(false)}
                    alerts={weatherData.alerts}
                />
            )}

        </Container>


    );
};

export default WeatherDisplay;