const message = document.querySelector('.message');
const button = document.querySelector('button');
const gameArea = document.querySelector('.gameArea');
let playArea = {};
playArea.inPlay = false;
messager('Click Start Button');

button.addEventListener('click', function () {
  if (!playArea.inPlay) {
    playArea.inPlay = true;
    button.style.display = 'none';
    messager('Click the circles as quickly as you see them');
    playArea.timer = setTimeout(myBox, rand(3000));

  }
})


function myBox() {
  let el = document.createElement('div');
  el.style.backgroundColor = getColor();
  el.style.width = rand(30) + 70 + 'px';
  el.style.height = rand(30) + 70 + 'px';
  el.style.borderRadius = rand(50) + '%';
  el.style.position = 'relative';
  el.style.top = rand(500) + 'px';
  el.style.left = rand(500) + 'px';
  el.start = new Date().getTime();
  el.addEventListener('click', hit);
  gameArea.appendChild(el);

}

function hit(e) {
  let end = new Date().getTime();
  let start = e.target.start;
  let duration = (end - start) / 1000;
  messager('It took ' + duration + " seconds to click");
  clearTimeout(playArea.time);
  gameArea.children[0].remove();
  playArea.timer = setTimeout(myBox, rand(2000));
}

function getColor() {
  function col() {
    let hex = rand(255).toString(16);
    return ('0' + String(hex)).substr(-2);
  }

  return '#' + col() + col() + col();
}

function rand(num) {
  let tempVal = Math.floor(Math.random() * num);
  return tempVal
}

function messager(mes) {
  message.innerHTML = mes;
}