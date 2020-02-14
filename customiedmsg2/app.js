const outputEl = document.querySelector('.output');
const inputEl = document.querySelector('input[type="text"]');
const button = document.querySelector('input[type="button"]');


button.addEventListener('click', function () {
  const hours = getDateHour();

  outputEl.innerHTML = `<h1> Hello ${inputEl.value} .Have a Great ${timeDet(hours)} </h1>`
})


function getDateHour() {
  const date = new Date();
  return date.getHours();
}




function timeDet(hours) {
  let time;
  if (hours >= 0 && hours <= 12) {
    time = 'Day';
    outputEl.style.backgroundColor = "orange";
  } else if (hours > 12 && hours <= 16) {

    time = 'Afternoon';
    outputEl.style.backgroundColor = "darkorange"
  } else if (hours > 16 && hours <= 20) {
    time = 'Evening';
    outputEl.style.backgroundColor = "orangered"
  } else {
    time = 'Night';
    outputEl.style.backgroundColor = "black";
    outputEl.style.color = "white";
  }
  return time;

}