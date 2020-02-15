window.addEventListener('load', init);

const myWords = ['javascript', 'html', 'course', 'laurence', 'coding', 'brackets'];
let cur = 0;
let startTime;

function init() {
  let div = document.createElement('div');
  div.setAttribute('class', 'message');
  document.body.appendChild(div);
  div.innerText = 'Press Start Button';

  let button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'Start Game';
  document.body.appendChild(button);

  button.addEventListener('click', start);

  let div1 = document.createElement('div');
  div1.classList.add('game');
  document.body.appendChild(div1);

}

function start() {
  cur = 0;
  startTime = new Date().getTime();
  this.style.display = 'none';
  let tempArr = myWords.slice(0);
  tempArr.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  myWords.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  const game = document.querySelector('.game');

  tempArr.forEach(function (item) {
    let temp = item.split(""); //temp contains array of characters each word is splitted into characters
    temp.sort(function (a, b) { //random sorting char arry
      return 0.5 - Math.random();
    });
    let temp1 = temp.join(""); //joining to make it a word which is scrambled

    let div = document.createElement('div');
    div.innerText = 'select';
    div.classList.add('box');
    div.style.backgroundColor = 'red';
    div.word = item;
    div.addEventListener('mouseenter', function () {
      div.style.backgroundColor = 'white';
      div.innerText = temp1;
    })
    div.addEventListener('mouseleave', function () {
      div.style.backgroundColor = 'red';
      div.innerText = 'Select';
    })
    div.addEventListener('click', function () {
      if (div.word == myWords[cur]) {
        this.classList.add('hidden');
        cur++;
        nextWord();
      } else {
        console.log('wrong');
      }
    })
    game.appendChild(div);
  })
  nextWord();
}

function nextWord() {
  if (cur >= myWords.length) {
    let endTime = new Date().getTime();
    let duration = (endTime - startTime) / 1000;
    message('Game Over ' + 'You took ' + duration + ' Seconds');
    document.querySelector('button').style.display = 'block';

  } else {
    message('Select this word: ' + myWords[cur]);
  }

}

function message(output) {
  document.querySelector('.message').innerHTML = output;
}