
function currentTime(){
    let time = document.querySelector(".real-time");
    let now = new Date();
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let actualHour = now.getHours().toString().padStart(2, '0');
    let actualMinutes = now.getMinutes().toString().padStart(2, '0');
    
    time.innerHTML = `${day} ${actualHour}:${actualMinutes}`;
}

let time = document.querySelector(".search-button");
time.addEventListener("click", currentTime);

function displayWeather(response) {
    let heading = document.querySelector(".current-city");
    heading.innerHTML = response.data.city;
    let degrees = document.querySelector(".degrees");
    let tempValue = Math.round(response.data.temperature.current);
    degrees.innerHTML = tempValue;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    let speedElement = document.querySelector("#speed");
    speedElement.innerHTML = `${response.data.wind.speed}km/h`;
    let iconElement= document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"
							class="weather-icon"></img>`
}

function handleSearch(event){
    event.preventDefault();
    let input = document.querySelector(".search-input");
    let city = input.value;

    let apiKey = "cb4b5c34a3d226503of16c3598tb1fa5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
}

/////////////////////////FORECAST//////////////////////////////////////////
function displayForecast() {

    
    let days = ['Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    let forecastHTML = "";
    days.forEach(function(day){
    forecastHTML = forecastHTML +
    `<div class="weather-forecast-day">
					            <div class="weather-forecast-date">${day}</div>
					            <div class="weather-forecast-icon">☀</div>
					            <div class="weather-forecast-temperatures">
						            <div class="weather-forecast-temp"><strong>15&deg;</strong></div>
						            <div class="weather-forecast-temp"> 18&deg;</div>
					            </div>
                            </div>`;
                    
    });
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHTML;
};

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", handleSearch);
displayForecast();


				