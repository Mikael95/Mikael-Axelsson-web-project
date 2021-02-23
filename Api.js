var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');



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