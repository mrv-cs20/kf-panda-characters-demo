// Kung Fu Panda Image Gallery

// Variables for html elements
let container = document.getElementById("container");

// Array of Image Names
let imgNames = [
  "po",
  "shifu",
  "oogway",
  "tigress",
  "crane",
  "mantis",
  "monkey",
  "viper",
  "mr-ping",
  "tai-lung",
];

// Add img elements to container element
let htmlStr = "";
for (let i = 0; i < imgNames.length; i++) {
  htmlStr += `<div><img src="img/${imgNames[i]}.png" /></div>`;
}
container.innerHTML = htmlStr;
