const message = document.querySelector('.message');
const score = document.querySelector('.score');
const button = document.querySelectorAll('button');
const gameplay = document.querySelector('.gameplay');
let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['hearts', 'diams', 'clubs', 'spades']; //these names matches with unicode

for (let i = 0; i < button.length; i++) { //adding event listeners to all buttons at once
  button[i].addEventListener('click', playGame);
}

function toggleButtons() { //show or hide buttons
  for (let i = 0; i < 3; i++) {
    button[i].classList.toggle('hideButton');
  }
}

function playGame(e) {
  let temp = e.target.innerText;
  let myCard = drawCard(); // mycard containes 1 card object out of 52 card
  let win = false;
  if (temp === 'Start') {
    message.innerHTML = 'Higher or Lower';
    gameplay.innerHTML = "";
    makeCard(myCard);
    toggleButtons();
    return;
  }
  if (myCard.value == curCardValue) { //if same number appears on new card
    win = 'Draw';
    message.innerHTML = 'Draw';
  } else {
    if ((temp === 'Higher' && (myCard.value > curCardValue)) || (temp == 'Lower' && (myCard.value < curCardValue))) {
      scoreValue++;
      score.innerHTML = scoreValue;
      message.innerHTML = 'Correct,Next?';
    } else {
      message.innerHTML = 'Wrong Game Over';
      scoreValue = 0;
      score.innerHTML = scoreValue;
      toggleButtons();
    }
  }
  makeCard(myCard); //this statement will always run
}

function drawCard() {
  if (deck.length > 0) {
    let randIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randIndex, 1)[0];

    return card; //return card object
  } else {
    makeDeck(); //will make a deck of 52 cards
    return drawCard();
  }
}

function makeDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      card.value = (j + 1);
      deck.push(card); //pushes card object into deck array as an element
    }
  }

}

function makeCard(card) { //will receive a card object containing rank,suit,value of a particular card
  let html1 = card.rank + "<br>&" + card.suit + ";";
  let html2 = card.rank + "&" + card.suit + ";";
  let curCards = document.querySelectorAll('.card');
  let div = document.createElement('div');
  div.setAttribute('class', 'card');
  div.style.left = (curCards.length * 25) + "px";
  curCardValue = card.value;
  if (card.suit === "hearts" || card.suit === "diams") {
    div.classList.add('red');
  }

  let span1 = document.createElement('span'); //span 1 and span 2 are the two symbols using unicode entity on card
  span1.setAttribute('class', 'tiny');
  span1.innerHTML = html2;
  div.appendChild(span1);

  let span2 = document.createElement('span');
  span1.setAttribute('class', 'big');
  span2.innerHTML = html1;
  div.appendChild(span2);


  gameplay.appendChild(div);
}