//Images to use to dynamically create the buttons
let images = [
  "assets/images/red.jpg",
  "assets/images/blue.jpeg",
  "assets/images/pink.jpeg",
  "assets/images/clear.jpeg"
];

//Initial values for wins/losses/score
var wins = 0;
var score = 0;
var losses = 0;
let goal = Math.floor(Math.random() * 100) + 40;
let isWon = false;

//Function to get random value
getRand = (max, min) => {
  return Math.floor(Math.random() * max) + min;
};

//Function that creates the buttons dynamically on page
createBtns = () => {
  for (let i = 0; i < 4; i++) {
    let image = document.createElement("img");
    image.className = "crystals";
    image.setAttribute("id", "btn" + i);
    image.setAttribute("value", getRand(20, 1));
    image.setAttribute("src", images[i]);
    document.querySelector(".images").append(image);
    document.querySelector("#goal").innerHTML = goal;
  }
};

init = () => {
  createBtns();
};

//Initialize game
init();

//Add event listener to page to check if crystal is clicked
document.addEventListener("click", e => {
  //Checks id of button
  console.log(e.target.id);

  switch (e.target.id) {
    case "btn0":
      addScore(btn0);
      check();
      break;

    case "btn1":
      addScore(btn1);
      check();
      break;

    case "btn2":
      addScore(btn2);
      check();
      break;

    case "btn3":
      addScore(btn3);
      check();
      break;

    default:
      break;
  }
});

//Function to reset goal number
reset = () => {
  let score = 0;
  let goal = Math.floor(Math.random() * 100) + 40;
  console.log(goal);
  document.querySelector("#score").innerHTML = score;
  document.querySelector("#update").innerHTML =
    "Click a crystal to uncover each value.See if you can reach the goal!";r
  document.querySelector("#goal").innerHTML = goal;
};

//Function to add crystal value to score
addScore = buttonName => {
  //Grab value of button that is clicked
  score += parseInt(buttonName.getAttribute("value"));
  //display in html
  // if (score === goal) {
  //   check();
  // } else if (score > goal) {
  //   reset();
  // }
  document.querySelector("#score").innerHTML = score;
};

//Function checks if player won or lost
check = () => {
  if (score === goal) {
    console.log("YOU WON!!!");
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  } else if (score > goal) {
    console.log("YOU LOSE");
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  } else {
    // console.log("Keep going");
    document.querySelector("#update").innerHTML = "Keep clicking";
  }
};
