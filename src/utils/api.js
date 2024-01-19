const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeatherByCoordinates = async (lat, lon, unit) => {
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,daily&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro na solicitação da API');
    }

    return data;
  } catch (error) {
    throw new Error('Erro ao processar a resposta da API');
  }
};