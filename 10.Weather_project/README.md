# Weather App

A simple and clean Weather Application built with HTML, CSS, and JavaScript that allows users to search for current weather information by city name.

## ✨ Features

- Search weather by city name
- Displays current temperature
- Shows weather description (e.g., "Clear Sky", "Rain", etc.)
- Clean and responsive design
- Error handling for invalid city names
- Real-time weather data

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and responsiveness
- **Vanilla JavaScript** - Logic and API integration
- **OpenWeatherMap API** (or any weather API of your choice)

## 🔍 How It Works

The Weather App works in the following steps:

1. **User Input**: The user types a city name in the input field and clicks the "Get Weather" button.

2. **Event Handling**: JavaScript listens for the button click and retrieves the city name.

3. **API Request**: The app sends a request to the **OpenWeatherMap API** using `fetch()` with the city name and your API key.

4. **Data Processing**: 
   - If the city is found, the API returns weather data in JSON format.
   - The app extracts temperature, weather description, and city name from the response.

5. **UI Update**: The weather information is dynamically displayed on the page (city name, temperature, and description).

6. **Error Handling**: If the city is not found or there's a network issue, an error message is shown to the user.

The entire application runs entirely in the browser using client-side JavaScript with no backend required.
