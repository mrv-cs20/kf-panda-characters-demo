// Kung Fu Panda Image Gallery

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");

// Initialize Array of Character Objects from json file
let characterData = [];
fetch("character-data.json")
  .then((res) => res.json())
  .then((data) => {
    characterData = data;
  });

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "display-group") {
    displayGroup();
  }
}

// Display All Characters
function displayAll() {
  let htmlStr = "";
  for (let i = 0; i < characterData.length; i++) {
    htmlStr += characterHTMLStr(characterData[i]);
  }
  container.innerHTML = htmlStr;
}

// Display Group of Characters
function displayGroup() {
  // Prompt user for group to display
  let searchGroup = prompt("Please enter group to display: ");

  // Display all characters in provided group
  let htmlStr = "";
  for (let i = 0; i < characterData.length; i++) {
    if (characterData[i].group === searchGroup) {
      htmlStr += characterHTMLStr(characterData[i]);
    }
  }
  container.innerHTML = htmlStr;
}

// Return html string of provided character
function characterHTMLStr(char) {
  return `
    <div>
      <img src="img/${char.imgName}" />
      <h3>${char.name}</h3>
      <p>${char.quote}</p>
    </div>`;
}
