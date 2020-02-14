let myData = [
  ['Title', 'Content'],
  ['Row1', 'Content1'],
  ['Row2', 'Hello World'],
  ['Row3', 'Javascript'],
];
let url;

const output = document.querySelector('.output');
const btn = document.querySelector('button');
btn.style.backgroundColor = 'green';
btn.style.color = 'white';
btn.style.padding = '15px';
btn.style.fontSize = '1.5em';

btn.addEventListener('click', function () {
  createCSV(myData);
})

function clean(row) {
  let rep = '';
  row.forEach(function (cell, index) {
    cell = cell == null ? '' : cell.toString();
    if (cell.search(/('|,|\n)/g) >= 0) cell = '' + cell + '';
    if (index > 0) {
      rep += ',';
    }
    rep += cell;
  })
  return rep;
}

function createCSV(data) {
  let file;
  let holder = '';
  if (url !== null) {
    window.URL.revokeObjectURL(url);
  }
  let filename = 'test.csv';
  let properties = {
    type: 'text/csv;charset=utf-8'
  };

  data.forEach(function (item) {
    holder += clean(item) + '\n';
  })
  file = new File([holder], 'text.txt', properties);
  let link = document.createElement('a');
  url = URL.createObjectURL(file);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();

}