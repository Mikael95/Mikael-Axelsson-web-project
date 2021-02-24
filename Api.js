var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');


/*
function GetData(){

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var positionLat = position.coords.latitude;
			var positionLong = position.coords.longitude;

			fetch('http://api.openweathermap.org/data/2.5/weather?lat='+positionLat+'&lon='+positionLong+'&appid=2cfe10be92fe5b0dbd0f000a1e989776')
			.then(response => response.json())
			.then(data => console.log(data))
		
			.catch(err => alert("Invalid position!"))
		});
	} else {
		alert("Sorry, your browser does not support HTML5 geolocation.");
	}

}
*/
/*
function showApi(id){
	
	var weatherBtn = document.createElement("BUTTON");
	weatherBtn.innerHTML = "Get Weather";
	document.getElementById(id).appendChild(weatherBtn);

	var logoutBtn = document.createElement("BUTTON");
	logoutBtn.innerHTML = "Logout";
	document.getElementById(id).appendChild(logoutBtn);
	
}
var cityName;
const uri = "https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5";

function getCity(){
	fetch(uri)
	.then(response => response.json())
	.then(data => {
		cityName = data['city']
	})
    .catch(error => console.error('Unable to get items.', error));
	return cityName;
}

getCity();
*/


function getPosition(){
	fetch("https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5")
	.then(response => response.json())
	.then(data => {
		console.log(data)
		document.getElementById("country_code").textContent = data["country_code"];
		document.getElementById("country_name").textContent = data["country_name"];
		document.getElementById("city").textContent = data["city"];
		document.getElementById("postal").textContent = data["postal"];
		document.getElementById("latitude").textContent = data["latitude"];
		document.getElementById("longitude").textContent = data["longitude"];
		document.getElementById("IP").textContent = data["IP"];
		document.getElementById("state").textContent = data["state"];
		document.getElementById("api2").style.visibility = "visible";
		
	})
	.catch(err => alert("Invalid position!"))

}



function getWeather(){
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var positionLat = position.coords.latitude;
			var positionLong = position.coords.longitude;

			fetch('http://api.openweathermap.org/data/2.5/weather?lat='+positionLat+'&lon='+positionLong+'&units=metric&appid=2cfe10be92fe5b0dbd0f000a1e989776')
			.then(response => response.json())
			.then(data => {
				document.getElementById("city").textContent = data['name'];
				document.getElementById("tempActual").textContent = data['main']['temp']+" C";
				document.getElementById("weather").textContent = data['weather'][0]['main'];
				document.getElementById("weather-description").textContent = data['weather'][0]['description'];
				document.getElementById("wind-deg").textContent = "Degrees: "+data['wind']['deg'];
				document.getElementById("wind-gust").textContent = "Gust: "+data['wind']['gust']+" m/s";
				document.getElementById("wind-speed").textContent = "Speed: "+data['wind']['speed']+" m/s";
				document.getElementById("api1").style.visibility = "visible";
				console.log(data)
				
			})
		
			.catch(err => alert("Invalid position!"))
		});
	} else {
		alert("Sorry, your browser does not support HTML5 geolocation.");
	}

}


