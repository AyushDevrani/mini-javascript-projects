const mainEle = document.querySelectorAll('.main');
const conEle = document.querySelectorAll('.content');
for (let x = 0; x < mainEle.length; x++) {
  mainEle[x].addEventListener('click', function () {
    clearActive();
    mainEle[x].nextElementSibling.classList.toggle('active');
  })
}

function clearActive() {
  for (let x = 0; x < conEle.length; x++) {
    conEle[x].classList.remove('active');
  }
}