const apiKey ="7eb09de8ccfed32afbe83f5032c67960";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response =await fetch(apiUrl+ city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style .display = "block";
        document.querySelector(".weather").style .display = "block";
    }else{

    


    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="weather-app-img/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src ="weather-app-img/images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src ="weather-app-img/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png";
    }
    else if (data.weather[0].main == "Humidity"){
        weatherIcon.src ="weather-app-img/images/humidity.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src ="weather-app-img/images/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src ="weather-app-img/images/snow.png";
    }
    document.querySelector(".error").style .display = "none";
    document.querySelector(".weather").style .display = "block";
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

