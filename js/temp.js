fetch('https://api.openweathermap.org/data/2.5/weather?q=Whitehorse&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("hebra").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Tromsø&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("jyga").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("gerudotemp").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Luxembourg&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("centralhyrule").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("faron").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Kotzebue&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("lanayru").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Hawthorne&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'] * 100;
  var icon = data['weather'][0]['icon'];
  document.getElementById("gorokvulcano").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})
// 
fetch('https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("lipland").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})
fetch('https://api.openweathermap.org/data/2.5/weather?q=brasilia&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("hyruleforest").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kinshasa&units=metric&appid=7553f8b14fe53bb13b60b7403c8def72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var icon = data['weather'][0]['icon'];
  document.getElementById("thundraplat").innerHTML = "<img src='http://openweathermap.org/img/wn/"+icon+".png'>"+tempValue;

})