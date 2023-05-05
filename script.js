const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '049bf7b7a3msh0c9a55ad626076cp1b505ajsn33ec1b33396a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        // cloud_pct.innerHTML= response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

// let cloud = document.getElementsByClassName("cloud")
let feels = document.getElementsByClassName("feels")
let humid = document.getElementsByClassName("humid")
let maxtemp = document.getElementsByClassName("maxtemp")
let mintemp = document.getElementsByClassName("mintemp")
let sunris = document.getElementsByClassName("sunris")
let sunset2 = document.getElementsByClassName("sunset2")
let temper = document.getElementsByClassName("temper")
let winddegree = document.getElementsByClassName("winddegree")
let windspeed = document.getElementsByClassName("windspeed")

const getWeatherManali = (city2)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            mcloud.innerHTML= response.cloud_pct
            mtemper.innerHTML = response.temp
            mfeels.innerHTML = response.feels_like
            mhumid.innerHTML = response.humidity
            mmintemp.innerHTML = response.min_temp
            mmaxtemp.innerHTML = response.max_temp
            mwindspeed.innerHTML = response.wind_speed
            mwinddegree.innerHTML = response.wind_degrees
            msunris.innerHTML = response.sunrise
            msunset2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeatherManali("Manali")

const getWeatherKerala = (city2)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            kcloud.innerHTML= response.cloud_pct
            ktemper.innerHTML = response.temp
            kfeels.innerHTML = response.feels_like
            khumid.innerHTML = response.humidity
            kmintemp.innerHTML = response.min_temp
            kmaxtemp.innerHTML = response.max_temp
            kwindspeed.innerHTML = response.wind_speed
            kwinddegree.innerHTML = response.wind_degrees
            ksunris.innerHTML = response.sunrise
            ksunset2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeatherKerala("Kerala")

const getWeatherMumbai = (city2)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            mucloud.innerHTML= response.cloud_pct
            mutemper.innerHTML = response.temp
            mufeels.innerHTML = response.feels_like
            muhumid.innerHTML = response.humidity
            mumintemp.innerHTML = response.min_temp
            mumaxtemp.innerHTML = response.max_temp
            muwindspeed.innerHTML = response.wind_speed
            muwinddegree.innerHTML = response.wind_degrees
            musunris.innerHTML = response.sunrise
            musunset2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeatherMumbai("Mumbai")

const getWeatherChennai = (city2)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            chcloud.innerHTML = response.cloud_pct
            chtemper.innerHTML = response.temp
            chfeels.innerHTML = response.feels_like
            chhumid.innerHTML = response.humidity
            chmintemp.innerHTML = response.min_temp
            chmaxtemp.innerHTML = response.max_temp
            chwindspeed.innerHTML = response.wind_speed
            chwinddegree.innerHTML = response.wind_degrees
            chsunris.innerHTML = response.sunrise
            chsunset2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeatherChennai("Chennai")

const getWeatherMysore = (city2)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            mycloud.innerHTML = response.cloud_pct
            mytemper.innerHTML = response.temp
            myfeels.innerHTML = response.feels_like
            myhumid.innerHTML = response.humidity
            mymintemp.innerHTML = response.min_temp
            mymaxtemp.innerHTML = response.max_temp
            mywindspeed.innerHTML = response.wind_speed
            mywinddegree.innerHTML = response.wind_degrees
            mysunris.innerHTML = response.sunrise
            mysunset2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeatherMysore("Mysore")