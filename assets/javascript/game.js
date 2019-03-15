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

//Function to get random value
getRand = (max, min) => {
  return Math.floor(Math.random() * max) + min;
};

//Assign values to the buttons and goals
// getNum = () => {
//   // let goal = getRand(80, 20);
//   console.log("The goal is " + goal);
//   document.querySelector("#goal").innerHTML = goal;
// };

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
  // getNum();
  createBtns();
  // check();
};
//Initialize game
init();

//Add event listener to page to check if crystal is clicked
document.addEventListener("click", e => {
  //Checks id of button
  console.log(e.target.id);
  // name = e.target.id;

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
  }
});

//Function to add crystal value to score
addScore = buttonName => {
  //Grab value of button that is clicked
  score += parseInt(buttonName.getAttribute("value"));
  // console.log(`The value is ${buttonName.getAttribute("value")}`);
  // console.log(score);
  //display in html
  document.querySelector("#score").innerHTML = score;
};

check = () => {
  if (score === goal) {
    // console.log("YOU WON!!!");
    wins++;
    document.querySelector("#update").innerHTML = "OMG YOU WON!!!";
    document.querySelector("#wins").innerHTML = wins;
  } else if (score > goal) {
    // console.log("YOU LOSE");
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#update").innerHTML = "YOU LOST!!!";
    // reset()
  } else {
    // console.log("Keep going");
    document.querySelector("#update").innerHTML = "Keep clicking";
  }
};
