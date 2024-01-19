const apiKey = process.env.REACT_APP_API_KEY;

const api = {
  async fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching weather data');
    }
  },
};

export default api;