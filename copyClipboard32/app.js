const copyTxt = document.querySelector('textarea[name=copyTxt]');
const finalTxt = document.querySelector('textarea[name=finalTxt]');
const moverBtn = document.querySelector('.moverBtn');
const copyBtn = document.querySelector('.copyBtn');
const output = document.querySelector('.output');


moverBtn.addEventListener('click', moveText);
copyBtn.addEventListener('click', copyText);
finalTxt.addEventListener('click', selAll);
copyTxt.addEventListener('click', selAll);

function selAll() {
  this.select();
}

function copyText() {
  let temp = copyTxt.value;
  copytoClipBoard(temp);
}

function copytoClipBoard(str) {
  const textarea = document.createElement('textarea');
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select(); //selected
  document.execCommand('copy'); //now copy in background
  document.body.removeChild(textarea);
  output.innerHTML = '<h3>Copied content </h3>' + textarea.value;
}


function moveText() {
  let temp = copyTxt.value;
  finalTxt.value = temp;
}