const classArray = ["padded", "bigger", "borderAdd"];
const elementArray = ["div", "p", "span"];
const selClasses = document.querySelector("select[name=classes]");
const eleMaker = document.querySelector("select[name=eleMaker]");
const addElement = document.querySelector("select[name=addElement]");
const adder = document.querySelector("button[name=adder]");
const selElement = document.querySelector("div");
const seInput = document.querySelector("input[name=outputText]");
const seBg = document.querySelector("input[name=bg]");
const seTxt = document.querySelector("input[name=txt]");
const btn = document.querySelector(".btn");
const main = document.querySelector("#main");
let nodeLister;
adder.addEventListener("click", function () {
  let temp = document.createElement(addElement.value);
  temp.textContent = addElement.value;
  temp.addEventListener("click", removeEle);
  main.appendChild(temp);
  dropDownBuilder();
})
btn.addEventListener("click", function (event) {
  let tempElement = nodeLister[eleMaker.value];
  tempElement.textContent = seInput.value;
  tempElement.style.backgroundColor = seBg.value;
  tempElement.style.color = seTxt.value;
  tempElement.classList.toggle(selClasses.value);
})
document.addEventListener("DOMContentLoaded", function () {
  classArray.forEach(function (item) {
    let opt = document.createElement("option");
    opt.value = item;
    opt.innerHTML = item;
    selClasses.appendChild(opt);
  })
  elementArray.forEach(function (item) {
    let opt = document.createElement("option");
    opt.value = item;
    opt.innerHTML = item;
    addElement.appendChild(opt);
  })
  nodeLister = document.querySelectorAll("#main >*");
  removerElements();
  dropDownBuilder();
})

function removerElements() {
  nodeLister.forEach(function (item) {
    item.addEventListener("click", removeEle);
  })
}

function removeEle() {
  main.removeChild(this);
  dropDownBuilder();
}

function dropDownBuilder() {
  eleMaker.innerHTML = "";
  nodeLister = document.querySelectorAll("#main >*");
  nodeLister.forEach(function (item, index) {
    let opt = document.createElement("option");
    opt.value = index;
    opt.innerHTML = item.tagName;
    eleMaker.appendChild(opt);
  })
}