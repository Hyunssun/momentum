const API_KEY ="b458d9aadcf6798e2db26c1d7bc6ccf3";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span");
        weather.innerText = `${data.main.temp}°C @${data.name}`;
    }));
}
function onGeoError() {
    alert("can't find you. No weather for you.")
}

navigator
    .geolocation
    .getCurrentPosition(onGeoOk, onGeoError);