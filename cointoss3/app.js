const coinArray = ['Heads', 'Tails'];
const score = [0, 0];
const message = document.querySelector('.message');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {

  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * buttons.length);
  let computerGuess = coinArray[computerToss];
  let output;

  if (playerGuess === computerGuess) {
    output = 'Player Wins';
    score[0]++;
    let div = document.createElement('div');
    div.innerHTML = `<h1> ${output} 
     </h1>
    `
    message.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  } else {
    output = "Computer Wins";
    score[1]++;
    let div = document.createElement('div');
    div.innerHTML = `<h1> ${output} 
     </h1>
    `
    message.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
  result.innerHTML = `<h1> Player: ${score[0]}  Computer: ${score[1]} </h1>`;
}