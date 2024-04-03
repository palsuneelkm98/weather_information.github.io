const apiKey="a5bcc7d014c4f9fefc64b6130c3e5774";
const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const cityName=document.getElementById("city-name").value;
    getWeatherData(cityName);
    
})

 async function getWeatherData(cityName){
    try{
     const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
    const response = await fetch(url);
    const data= await response.json();

    showWeatherInfo(data);
 }
 catch(err){
    alert("Sorry! City is not in my database.....");
 }
}

function showWeatherInfo(data){
   console.log(data);
    let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    const weatherInfo=document.getElementById("weather-info");
     weatherInfo.innerHTML=`<html><body><center><table border='2' ><tr><th>Field Name</th><th>Data</th></tr><tr><td>CountryCode:</td><td>${data.sys.country}</td></tr><tr><td>CountryName:</td><td>${data.name}</td></tr><tr><td>Temperature:</td><td>${data.main.temp }F|${Math.round(data.main.temp-273.15)}&deg;C</td></tr><tr><td>Humidity:</td><td>${data.main.humidity }%</td></tr><tr><td>Air Pressure:</td><td>${data.main.pressure}hPa</td></tr><tr><td>Weather:</td><td>${data.weather[0].description}<img src=${imgIcon} height="50" width="50"/></td></tr><tr><td>Wind Speed:</td><td>${data.wind.speed}m/s</td></tr></table></center></body></html>`

 }

 function weather(){
   const weatherInfo=document.getElementById("weather-info");
     weatherInfo.innerHTML="";
 }
