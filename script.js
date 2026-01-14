const apiKey = "021c4a2133a96152a79fb2b6e21979f4";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    alert("City not found");
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163620.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    }
    document.querySelector(".weather").style.display  = "block";

  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});