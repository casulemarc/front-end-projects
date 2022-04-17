let launchName = document.getElementById("launch-name");
let launchDescription = document.getElementById("launch-description");
let launchImage = document.getElementById("launch-image");

//1 Button
const buttonOne = document.getElementById("launch-1");

//2 Button
const buttonTwo = document.getElementById("launch-2");

//3 Button
const buttonThree = document.getElementById("launch-3");

// store data in a list
//fetch json file
const list = fetch("./source/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //if button 1 is clicked
    buttonOne.addEventListener("click", function (e) {
      launchName.innerText = data.technology[0].name;
      launchDescription.innerText = data.technology[0].description;
      launchImage.src = data.technology[0].images.portrait;
    });

    //if 2 is clicked
    buttonTwo.addEventListener("click", function (e) {
      launchName.innerText = data.technology[1].name;
      launchDescription.innerText = data.technology[1].description;
      launchImage.src = data.technology[1].images.portrait;
    });

    //if 3 is clicked
    buttonThree.addEventListener("click", function (e) {
      launchName.innerText = data.technology[2].name;
      launchDescription.innerText = data.technology[2].description;
      launchImage.src = data.technology[2].images.portrait;
    });
  });
