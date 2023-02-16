console.log("Hello World");

document.getElementById("root").innerHTML = "szia";


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(responseJson => console.log(responseJson));