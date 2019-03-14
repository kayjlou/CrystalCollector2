//Images to use to dynamically create the buttons
let images = [
  "assets/images/red.jpg",
  "assets/images/blue.jpeg",
  "assets/images/pink.jpeg",
  "assets/images/clear.jpeg"
];

//Initial values for wins/losses/score
let wins = 0;
let score = 0;
let losses = 0;

//Function to get random value
getRand = () = {
  math
}

//Assign values to the buttons and goals
let btn0 =
let btn1 =
let btn2 =
let btn3 = 


//Function that creates the buttons dynamically on page 
createBtns = () => {
  for (let i = 0; i < 4; i++) {
    let image = document.createElement("img");
    image.className = "crystals";
    image.setAttribute("id", "btn" + i);
    image.setAttribute("value", i + 1);
    image.setAttribute("src", images[i]);
    document.querySelector(".images").append(image);
  }
};

//Run create buttons 
createBtns();

//Add event listener to page to check if crystal is clicked
document.addEventListener("click", e => {
  console.log(e.target.id);
  switch (e.target.id) {
    case btn0:
      console.log("0");
      addScore(btn0);
      break;

    case btn1:
      console.log("1");
      addScore(btn1);
      break;

    case btn2:
      console.log("1");
      addScore(btn2);
      break;

    case btn3:
      console.log("1");
      addScore(btn3);
      break;


  }
});

//Function to add crystal value to score 
addScore = value => {
  score = score + value;
  console.log(value)
  //display in html
  document.querySelector("#score").innerHtml = score;
};
