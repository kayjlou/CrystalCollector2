let images = [
  "assets/images/red.jpg",
  "assets/images/blue.jpeg",
  "assets/images/pink.jpeg",
  "assets/images/clear.jpeg"
];

for (let i = 0; i < 4; i++) {
  let image = document.createElement("img");
  image.className = "crystals";
  image.setAttribute("id", "btn" + i);
  image.setAttribute("src", images[i]);
  document.querySelector(".images").append(image);
}
