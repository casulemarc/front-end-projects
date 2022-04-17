let title = document.getElementById("destination-title");
let description = document.getElementById("destination-description");
let distance = document.getElementById("distance");
let months = document.getElementById("months");
let destinyImage = document.getElementById("destiny-image");

//Moon Button
const moonButton = document.getElementById("moon-tab");

//Mars Button
const marsButton = document.getElementById("mars-tab");

//Europa Button
const europaButton = document.getElementById("europa-tab");

//Titan Button
const titanButton = document.getElementById("titan-tab");

// store data in a list
//fetch json file
const list = fetch("./source/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //if Moon is clicked
    moonButton.addEventListener("click", function (e) {
      title.innerText = data.destinations[0].name;
      description.innerText = data.destinations[0].description;
      distance.innerText = data.destinations[0].distance;
      months.innerText = data.destinations[0].travel;
      destinyImage.src = data.destinations[0].images.webp;
    });

    //if MARS is clicked
    marsButton.addEventListener("click", function (e) {
      title.innerText = data.destinations[1].name;
      description.innerText = data.destinations[1].description;
      distance.innerText = data.destinations[1].distance;
      months.innerText = data.destinations[1].travel;
      destinyImage.src = data.destinations[1].images.webp;
    });

    //if Europa is clicked
    europaButton.addEventListener("click", function (e) {
      title.innerText = data.destinations[2].name;
      description.innerText = data.destinations[2].description;
      distance.innerText = data.destinations[2].distance;
      months.innerText = data.destinations[2].travel;
      destinyImage.src = data.destinations[2].images.webp;
    });

    //if Titan is clicked
    titanButton.addEventListener("click", function (e) {
      title.innerText = data.destinations[3].name;
      description.innerText = data.destinations[3].description;
      distance.innerText = data.destinations[3].distance;
      months.innerText = data.destinations[3].travel;
      destinyImage.src = data.destinations[3].images.webp;
    });
  });
