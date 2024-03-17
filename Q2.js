$(document).ready(function() {
    const apiKey = '6517fd8427a97efcc4d2d82ba9adc4ff';
    
    function fetchWeather(city) {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        // Fetch current weather
        $.get(currentWeatherUrl, function(data) {
            displayCurrentWeather(data);
        }).fail(function() {
            alert("Error fetching weather data.");
        });

        // Fetch 5-day forecast
        $.get(forecastUrl, function(data) {
            displayForecast(data);
        }).fail(function() {
            alert("Error fetching forecast data.");
        });
    }

    function displayCurrentWeather(data) {
        $('#currentWeather').html(`
            <div class="weather-card">
                <h2>Current Conditions</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Condition:</strong> ${data.weather[0].main}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            </div>
        `);
    }

    function displayForecast(data) {
        let forecastHtml = '<div class="weather-card"><h2>5-Day Forecast</h2>';
        for (let i = 0; i < data.list.length; i += 8) { // Approx. every 24 hours
            forecastHtml += `
                <p>${new Date(data.list[i].dt_txt).toLocaleDateString()} - Temp: ${data.list[i].main.temp} °C, ${data.list[i].weather[0].main}</p>
            `;
        }
        forecastHtml += '</div>';
        $('#forecast').html(forecastHtml);
    }

    $('#searchBtn').click(function() {
        const city = $('#cityInput').val();
        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });
});
