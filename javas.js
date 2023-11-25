
function getWeather() {
    const locationInput = document.getElementById('locationInput').value;

    if (locationInput.trim() !== '') {
        // Make a request to the OpenWeatherMap API
        const apiKey = '199c61c3b26ff8d4f1bfd8f7377745b1';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(locationInput)}&units=metric&appid=${apiKey}`;
        
        

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

                document.getElementById('weatherDetails').classList.remove('hidden');
                document.getElementById('error').classList.add('hidden');
            })
            .catch(error => {
                
                document.getElementById('error').textContent = `Error: ${error.message}`;
                document.getElementById('error').classList.remove('hidden');

                document.getElementById('weatherDetails').classList.add('hidden');
            });
    }
}
