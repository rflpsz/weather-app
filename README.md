# Weather App

Welcome to the Weather App! This application allows you to check the current weather for a specific city.

## Getting Started

Follow the steps below to run the Weather App on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js version 21.5.0 and npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/rflpsz/weather-app

2. Navigate to the project directory:

    ```bash
    cd weather-app

3. Install the project dependencies:

    ```bash
    npm install

### Configuration

To use the Google Maps and OpenWeatherMap APIs, you need to obtain API keys.

1. Get a Maps API Key from the Google Cloud Console, activate Places API and Maps JavaScript API.

2. Get an OpenWeatherMap API key from the OpenWeatherMap API.

3. Create a .env file in the project root and add your API keys:

   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   REACT_APP_OPENWEATHERMAP_API_KEY=your-openweathermap-api-key

### Running the Application

Once you've completed the installation and configuration, you can run the Weather

1. Run the app:
   
   ```bash
   npm start

### Usage

- Type the name of a city in the search bar and click on it.
- Click the "Get Weather" button to fetch and display the current weather.

### Demo

- I deployed the project on Netlify, so you can see a working demo at any time by accessing the link: [OPEN DEMO](https://weather-and-alerts.netlify.app)

### Additional Features

- The application provides a toggle button to switch between Celsius and Fahrenheit units.
- If there are weather alerts issued by authorities, a modal will appear on the screen informing you of the details automatically.

## Additional Notes

### Implementation Choices

- **React and Styled Components**: The Weather App is built using React.js for its component-based architecture, making it modular and easy to maintain. Styled Components are used for styling, providing a clean and component-centric approach to styling.

- **Google Maps API and OpenWeatherMap API**: The application utilizes the Google Maps API for location autocomplete and map display. Weather data is fetched from the OpenWeatherMap API, allowing us to retrieve accurate and up-to-date weather information.

- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

- **BONUS**: **Unit Toggle and Temperature Display**: The user can toggle between Celsius and Fahrenheit units. Temperature is displayed in whole numbers, rounded up to ensure clarity and simplicity.

- **BONUS**: **Alert Modals**: In case of severe weather alerts for the selected location, a modal is automatically displayed, providing users with important information from authoritative weather sources.

- **BONUS**: **Extended Weather Forecast**: weather forecast for the next 8 days in a carousel with stylized icons

### Future Enhancements

- **User Authentication**: Implement user authentication to allow users to save and view their favorite locations.

- **Localization**: Add support for multiple languages to cater to a global audience.

### Feedback and Contributions

Feel free to provide feedback or contribute to the project. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

   ```bash
   Copy the content above and save it in a file named `README.md` in your project's root directory.