 document.addEventListener("DOMContentLoaded" , ()=>{

const cityInput = document.getElementById("city-input");

const getWeatherButton = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

const errorMsg = document.getElementById("error-message");


  const API_KEY = "8706ff7cf1545edcd831d1dedfd6b3be"; //env variables


  // keypress Enter 
cityInput.addEventListener("keydown" , (e)=>{

    // console.log(e.key);
    if(e.key === 'Enter') {
      getWeatherButton.click();
    } else return ; 

});



getWeatherButton.addEventListener("click" , async ()=>{

// trim in city input 

  let city = cityInput.value.trim();
// check empty 
if(!city)  return ;  // !city --> "";

/*
handle with error bez of api , when work on API then rember always 

1. API may be throw a error --> try catch 
2. API or server always in another continent --> async await
 */

try {
    
    // first fetch data then displya data 
 let weatherData =  await fetchWeatherData(city);
 displayData(weatherData);


} catch (error) {
    //    console.log("404 Error");
showError();

}
 
});


async function  fetchWeatherData(city){
// get data , store and return data 


 try{
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` ;
   const response = await fetch(url);


//    console.log(typeof response); --> Object 
   console.log("Respones is : " ,  response);
// if ok --> false then Error

if(! response.ok){
// throw new error --> not handle error use try catch 
throw new Error (` Failded to fetch Data , 404 Error ${city} is Not City! , Try Again`);
}


let data = await response.json();
 return data;
 }
 catch (err){
  console.log(err);
 }

}




function displayData(data){
// display weather info 
console.log(data);
const { name, main, weather} = data; 

console.log(name);
console.log(weather);

cityName.innerText = name; 
temperature.innerHTML = `Tempreature : ${main.temp}  <br> Pressure: ${main.pressure} `

description.innerText = `Weather : ${weather[0].description};`

weatherInfo.classList.remove("hidden");
errorMsg.classList.add("hidden");
cityInput.value = "";

}

// error massge display 
function showError(){

    errorMsg.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
    cityInput.value = "";
}


 });