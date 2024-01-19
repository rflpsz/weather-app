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

### Additional Features

- The application provides a toggle button to switch between Celsius and Fahrenheit units.
- If there are weather alerts issued by authorities, a modal will appear on the screen informing you of the details automatically.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.

   ```bash
   Copy the content above and save it in a file named `README.md` in your project's root directory.