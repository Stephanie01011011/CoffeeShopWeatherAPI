let weather = {
    "apiKey": "[ENTER AN API KEY HERE]",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&appid=" + this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {icon, description} =data.weather[0];
        const { temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(icon, description, temp, humidity, speed);
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed/2 + " mph";
     
    }
   
}
weather.fetchWeather("Indianapolis");
