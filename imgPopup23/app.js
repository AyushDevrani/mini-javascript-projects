const images = document.querySelectorAll('.pop img');
images.forEach(function (ele) {
  ele.addEventListener('click', popImage);
})
const output = document.querySelector('.output');
const show = document.querySelector('.show');
const close = document.querySelectorAll('.close');
close.forEach(function (ele) {
  ele.addEventListener('click', function () {
    show.classList.add('hide');
  })
})

function popImage(e) {
  output.querySelector('img').setAttribute('src', this.src);
  show.classList.remove('hide');
}