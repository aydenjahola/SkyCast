# SkyCast Weather App

Skycast is a weather application built using `NextJS` and `TypeScript` that allows users to get accurate weather forecasts for different cities. The app utilizes the WeatherAPI service to fetch weather data and presents it in an intuitive and visually appealing manner. Skycast provides real-time weather information, including the current weather conditions, a week-long forecast, and additional weather details to help users plan their activities accordingly.

## Features

- **Real-Time Weather Data**: Skycast fetches the latest weather data using the WeatherAPI service, ensuring that users receive up-to-date information.

- **Search by City**: Users can easily search for weather information by entering the name of the desired city.

- **Current Weather**: The app displays the current weather conditions, including the temperature, weather description, and a weather icon representing the condition.

- **Week Forecast**: Users can view a week-long weather forecast for the selected city. The forecast includes daily maximum and minimum temperatures, weather descriptions, and weather icons.

- **Weather Details**: Skycast provides additional weather details, such as wind speed, humidity, wind direction, sunrise and sunset times, air pressure, feels-like temperature, and visibility.

- **Temperature Units**: Users can toggle between Celsius and Fahrenheit temperature units to view the weather data in their preferred format.

- **Responsive Design**: The app is designed to work seamlessly on various devices, including desktops, tablets, and mobile phones.

- **Stunning Background Images**: Skycast displays beautiful background images related to the selected city to enhance the user experience.

## Installation

To run the Skycast Weather App locally, please ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)

Follow these steps to install and run the app:

1. Clone this repository to your local machine using Git:

```bash
git clone git@github.com:aydenjahola/SkyCast.git
```

2. Change into the project directory:
```bash
cd SkyCast
```

3. Install the required dependencies:
```bash
npm install
```

## Usage
Once you have installed the required dependencies, you can start the Skycast Weather App using the following command:

```bash
npm run dev
```
This will launch the app on a local development server. Open your web browser and access the app at `http://localhost:3000`.

## App Structure

The Skycast Weather App follows a component-based architecture to keep the code organized and maintainable. Here is a brief overview of the main components used in the app:

- `Home (in /app/page.tsx)`: This is the main component that handles the app's logic, including fetching weather data, handling user input, and rendering the appropriate content.

- `Input (in /app/components/Input.tsx)`: This component provides an input field where users can enter the city name for weather search. It also includes a search button with an icon for better user experience.

- `Current (in /app/components/Current.tsx)`: The Current component displays the current weather details, such as temperature, weather description, weather icon, and additional information like wind speed, humidity, and location.

- `WeekForecast (in /app/components/WeekForecast.tsx)`: This component presents the week-long weather forecast for the selected city. It includes daily weather icons, maximum and minimum temperatures for each day.

- `WeatherDetails (in /app/components/WeatherDetails.tsx)`: The WeatherDetails component provides additional weather details, including wind speed, wind direction, sunrise, sunset times, air pressure, feels-like temperature, and visibility.

## TODO: Errors and Fixes

The **Skycast** Weather App currently has the following `TypeScript` errors that need to be fixed:

1. ***Error***: `Type '{}' is missing the following properties from type '{ current: { condition: { icon: string; text: string; }; temp_c: number; }; location: { name: string; country: string; }; }': current, location`

    - Location: `/app/page.tsx`, Line: 57
    - Related Information: See `/app/components/Current.tsx`, Line: 7
    - Description: The `Home` component is missing the required properties current and - location that are expected in the `Current` component.

2. ***Error***: `Property 'forecast' is missing in type '{}' but required in type '{ forecast: { forecastday: DayForecast[]; }; }'.`

    - Location: `/app/page.tsx`, Line: 58
    - Related Information: See `/app/components/WeekForecast.tsx`, Line: 15, Line: 14
    - Description: The `Home` component is missing the required property `forecast` that - is expected in the `WeekForecast` component.

3. ***Error***: `Type '{}' is missing the following properties from type '{ current: { wind_kph: number; humidity: number; wind_dir: string; pressure_mb: number; feelslike_c: number; vis_km: number; }; forecast: { forecastday: { astro: { sunrise: string; sunset: string; }; }[]; }; }': current, forecast`

    - Location: `/app/page.tsx`, Line: 61
    - Related Information: See `/app/components/WeatherDetails.tsx`, Line: 9
    - Description: The `Home` component is missing the required properties current and - forecast that are expected in the `WeatherDetails` component.

4. ***Error***: `Property 'location' does not exist on type '{}'.`

    - Location: `/app/page.tsx`, Line: 76, Line: 77 (multiple occurrences)
    - Description: The `location` property is missing in the `Home` component's state object.







## Contributing

Contributions to the Skycast Weather App are highly appreciated. If you find a bug, have suggestions for improvements, or want to add new features, please follow these steps:

1. Fork this repository.
2. Create a new branch for your contribution.
3. Commit your changes.
4. Push your changes to your fork.
5. Submit a pull request.

Please ensure that your code adheres to the existing coding style and includes appropriate tests where applicable.

## License
The Skycast Weather App is licensed under the [AGPL License](LICENSE). 