# Modern Weather Dashboard

A responsive, modern weather dashboard built with React and Tailwind CSS. This application provides real-time weather data, an 8-day forecast, and other key meteorological highlights. It automatically detects the user's location on startup and also includes a dynamic city search feature with suggestions.

---

### Demo

![Weather Dashboard Screenshot](./public/screenshot.png)

---

## ✨ Features

- **Fully Responsive Design:** A clean UI that adapts seamlessly to desktop, tablet, and mobile screens.
- **Automatic Geolocation:** Detects the user's city via their IP address on initial load.
- **Dynamic City Search:** A search bar with live, auto-completing city suggestions.
- **Current Weather Display:** Shows current temperature, conditions, date, and "feels like" temperature.
- **Today's Highlights:** A grid of detailed cards for Wind Status, Humidity, UV Index, Visibility, Sunrise, and Sunset.
- **8-Day Forecast:** A horizontally scrolling view of the forecast for the next 8 days.
- **Mobile Navigation:** Features a functional, slide-out sidebar menu for mobile users.

---

## 🛠️ Tech Stack

- **Framework:** React (with Vite)
- **Styling:** Tailwind CSS
- **Data Fetching:** Axios
- **APIs:**
  - OpenWeatherMap API (One Call 3.0 & Geocoding)
  - ipinfo.io (for IP-based geolocation)

---

## 🚀 Getting Started

To run this project locally, follow these steps.

### Prerequisites

- Node.js (v18 or later)
- A package manager like `npm` or `yarn`

### Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3.  **Set up Environment Variables**
    This project requires an API key from OpenWeatherMap to function.

    - Create a new file in the root of your project directory named `.env`.
    - Open the `.env` file and add your API key in the following format:

    ```
    VITE_API_KEY=your_openweathermap_api_key_goes_here
    ```

    > **Note:** To enable all features (like UV Index and the 8-day forecast), you must activate the "One Call API 3.0" for your key. This is free but requires a payment method on file in your OpenWeatherMap account dashboard.

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

The application should now be running on `http://localhost:5173`.
