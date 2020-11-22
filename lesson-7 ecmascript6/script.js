const name = document.querySelector("#name")
const description = document.querySelector("#description")
const temp = document.querySelector("#temp")
const humidity = document.querySelector("#humidity")
const img = document.querySelector("#img")

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})


function successLocation(position) { 
    console.log(position)
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=58eb9b73c6ff15206d68a765952d5d49&units=metric&lang=vi`)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    }
)
    .then((data => {
        // console.log(data)
        name.innerText = 'Thời tiết thành phố ' + data.name
        img.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        description.innerText = 'Bầu trời: ' +  data.weather[0].description
        temp.innerText = 'Nhiệt dộ: ' + data.main.temp
        humidity.innerText = 'Độ ẩm: '+ data.main.humidity + '%'

    }))
}
function errorLocation() {}

