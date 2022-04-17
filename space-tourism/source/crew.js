let crewRole = document.getElementById("role");
let crewName = document.getElementById("name");
let crewBio = document.getElementById("bio");
let crewImage = document.getElementById("crew-image");

//1 Button
const buttonOne = document.getElementById("button-1");

//2 Button
const buttonTwo = document.getElementById("button-2");

//3 Button
const buttonThree = document.getElementById("button-3");

//4 Button
const buttonFour = document.getElementById("button-4");

// store data in a list
//fetch json file
const list = fetch("./source/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //if button 1 is clicked
    buttonOne.addEventListener("click", function (e) {
      crewRole.innerText = data.crew[0].role;
      crewName.innerText = data.crew[0].name;
      crewBio.innerText = data.crew[0].bio;
      crewImage.src = data.crew[0].images.webp;
    });

    //if 2 is clicked
    buttonTwo.addEventListener("click", function (e) {
      crewRole.innerText = data.crew[1].role;
      crewName.innerText = data.crew[1].name;
      crewBio.innerText = data.crew[1].bio;
      crewImage.src = data.crew[1].images.webp;
    });

    //if 3 is clicked
    buttonThree.addEventListener("click", function (e) {
      crewRole.innerText = data.crew[2].role;
      crewName.innerText = data.crew[2].name;
      crewBio.innerText = data.crew[2].bio;
      crewImage.src = data.crew[2].images.webp;
    });

    //if 4 is clicked
    buttonFour.addEventListener("click", function (e) {
      crewRole.innerText = data.crew[3].role;
      crewName.innerText = data.crew[3].name;
      crewBio.innerText = data.crew[3].bio;
      crewImage.src = data.crew[3].images.webp;
    });
  });
