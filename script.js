//create image array
const imageArray = [
  {
    name: "bird",
    image: "images/bird.png",
  },
  {
    name: "bunny",
    image: "images/bunny.png",
  },
  {
    name: "fox",
    image: "images/fox.png",
  },
  {
    name: "lion",
    image: "images/lion.png",
  },
  {
    name: "mouse",
    image: "images/mouse.png",
  },
  {
    name: "owl",
    image: "images/owl.png",
  },
  {
    name: "bird",
    image: "images/bird.png",
  },
  {
    name: "bunny",
    image: "images/bunny.png",
  },
  {
    name: "fox",
    image: "images/fox.png",
  },
  {
    name: "lion",
    image: "images/lion.png",
  },
  {
    name: "mouse",
    image: "images/mouse.png",
  },
  {
    name: "owl",
    image: "images/owl.png",
  },
];

let cardChoosen = [];
const cardsWon = [];

//shuffle the array
imageArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const marksDisplay = document.querySelector("#marks");

function createBoard() {
  imageArray.forEach((img, index) => {
    //create html element
    const card = document.createElement("img");

    //set attributes that created html element
    card.setAttribute("src", "images/question.jpeg");
    card.setAttribute("data-id", index);

    //add event listner
    card.addEventListener("click", flipCard);

    //create the board by appending
    gridDisplay.appendChild(card);
  });
}
createBoard();

function flipCard() {
  //get images details
  const cardId = this.getAttribute("data-id");

  //set attributes
  this.setAttribute("src", imageArray[cardId].image);

  //get selected image id
  cardChoosen.push({ ...imageArray[cardId], id: cardId });

  //check two cards are equal
  if (cardChoosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const optionOne = cardChoosen[0];
  const optionTwo = cardChoosen[1];
  const cards = document.querySelectorAll("img");

  if (optionOne.id === optionTwo.id) {
    alert("You have clicked the same card!");
    cards[optionOne.id].setAttribute("src", "images/question.jpeg");
    cards[optionTwo.id].setAttribute("src", "images/question.jpeg");
  } else if (optionOne.name === optionTwo.name) {
    cards[optionOne.id].setAttribute("src", "images/tick.png");
    cards[optionTwo.id].setAttribute("src", "images/tick.png");
    cardsWon.push(cardChoosen);
    cards[optionOne.id].removeEventListener("click", flipCard);
    cards[optionTwo.id].removeEventListener("click", flipCard);
  } else {
    cards[optionOne.id].setAttribute("src", "images/question.jpeg");
    cards[optionTwo.id].setAttribute("src", "images/question.jpeg");
  }

  if (cardsWon.length === imageArray.length / 2) {
    marksDisplay.innerHTML = "You have won";
  }
  //clear the array
  cardChoosen = [];
}
