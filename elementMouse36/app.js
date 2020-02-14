const container = document.querySelector('.container');
const startGame = document.querySelector('.startGame');
const scoreArea = document.querySelector('.score');
let player = {
  score: 0
}
startGame.addEventListener('click', function () {
  startGame.getElementsByClassName.display = 'none';
  let ranTime = Math.random() * 2000 + 1000;
  this.style.display = 'none';
  setTimeout(makeItem, ranTime);
})

function makeItem() {
  let boundary = container.getBoundingClientRect();
  let div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = Math.random() * boundary.width + 'px';
  div.style.top = (Math.random() * boundary.height) + 150 + 'px';
  div.style.width = Math.random() * 10 + 40 + 'px';
  div.style.height = Math.random() * 10 + 40 + 'px';
  div.style.borderRadius = '10%';
  div.style.cursor = 'pointer';
  div.style.backgroundColor = '#' + Math.random().toString(16).substr(-6);
  div.style.border = '1px solid black';
  div.startTime = Date.now();
  div.addEventListener('click', function () {
    let endTime = Date.now();
    let diff = (endTime - div.startTime) / 1000;
    player.score++;
    scoreArea.innerHTML = 'Clicked in ' + diff + ' seconds' + '<br>' + 'Score: ' + player.score;
    clearTimeout(div.timer);
    makeItem();
    container.removeChild(div);
  })
  div.timer = setTimeout(function () {
    container.removeChild(div);
    makeItem();
  }, 1000);
  container.appendChild(div);
}