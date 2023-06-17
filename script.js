const countryName = document.getElementById('countryName');
const stateName = document.getElementById('stateName');
const city = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const temprature = document.getElementById('temprature');
const iconText = document.getElementById('iconText');
const iconImg = document.getElementById('iconImg');
const inputCityName = document.getElementById('inputCityName');
const submitBtn = document.getElementById('submitBtn');


const getData =async (event)=>{

    event.preventDefault();
    if(!inputCityName.value){
        alert('Enter a city name : ');
        return;
    }

    const cityName = inputCityName.value.trim();
    // console.log(cityName);

    const fetchData = await fetch( `https://api.weatherapi.com/v1/current.json?key=596d919f63e343e5ba960858231302&q=${cityName}`);

    const orgData = await fetchData.json();
    let data = orgData;
    
    countryName.innerText = data.location.country;
    stateName.innerText = data.location.region;
    city.innerText = data.location.name;
    humidity.innerText = data.current.humidity;
    windSpeed.innerText = data.current.wind_kph;
    temprature.innerText = data.current.temp_c;
    iconText.innerText = data.current.condition.text;
    iconImg.src = data.current.condition.icon;
    
}

submitBtn.addEventListener('click', getData);