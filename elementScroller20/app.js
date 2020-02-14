const button = document.querySelector('button');
const cElement = document.getElementById('cElement');
const sElement = document.getElementById('sElement');
const speed = document.querySelector('input');
const output = document.querySelector('.output');
let scroller = true;
const content = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio, illum quae et aliquid sapiente maxime minus, facere doloribus, saepe temporibus eius distinctio neque excepturi accusantium similique mollitia quisquam assumenda facilis ratione sit perspiciatis! Sunt nesciunt beatae laboriosam non hic explicabo nisi unde id. Velit doloribus nisi rerum quibusdam delectus enim, fugiat placeat vero alias vel, ullam optio voluptatibus sint veniam! Accusantium, quisquam provident. Ipsa necessitatibus et ex neque veniam asperiores saepe tempora cumque non quasi aut distinctio, sit hic ducimus, odio nulla velit fugiat obcaecati cum nobis eum! Ab, fugiat cupiditate reiciendis illo officiis eligendi fugit illum, eius numquam velit laborum maiores ea ex laudantium iure soluta. Et dolore excepturi ea mollitia rem sint in vero repellendus corrupti sed! Corporis amet ullam ut similique quos laudantium minima, recusandae vitae aliquid non adipisci est, maiores sed error! Aliquid hic dolore quaerat? Nobis tenetur accusamus illum dolore autem voluptatem placeat quia beatae quidem perferendis animi repellat, odit temporibus provident ea officia ducimus repudiandae inventore minima molestiae! Placeat, reprehenderit numquam quibusdam suscipit doloremque delectus repellendus impedit nesciunt velit blanditiis dicta dolorum optio nisi nobis molestias ipsa obcaecati iste praesentium, deserunt laboriosam. Excepturi culpa laudantium nam alias vitae placeat blanditiis, nesciunt incidunt dolorum sunt dolor doloribus quae rerum quia ad expedita nisi cum qui odio magnam maiores quaerat distinctio quibusdam at! Nisi porro, perferendis quia incidunt ipsa sint quisquam a sunt cupiditate, tempore ducimus voluptas voluptates quam quae pariatur ex eveniet impedit perspiciatis. Perferendis voluptatum minus officiis qui nostrum illo, velit, molestiae nulla ducimus corrupti et natus delectus, consequatur unde illum voluptatem explicabo quidem placeat earum? Quibusdam illo voluptate molestias quia, fuga nisi. Sit et enim laborum? Dolore, cum? Ad saepe dicta a vero quisquam! Reiciendis est facilis itaque nisi tempore veniam beatae magnam, delectus excepturi ad reprehenderit quae perspiciatis recusandae cupiditate? Id natus aliquid iste debitis eum fugiat tempore, unde consequatur saepe eos quasi repudiandae tempora? Voluptatibus adipisci, excepturi voluptates sed et aliquid. Quidem nisi provident beatae magnam magni delectus ducimus similique vero id cum, facere nemo animi deserunt iste labore dignissimos quos odio. Consequuntur eaque accusamus, corrupti dolor, hic magnam alias, aperiam nam illum architecto enim ratione aliquam sequi. Alias voluptatem animi quasi autem fugit aperiam eaque omnis sit, incidunt, praesentium qui amet ex fugiat temporibus possimus maxime facere pariatur obcaecati, debitis unde voluptate deleniti sunt? Vero culpa qui distinctio iste facilis tenetur pariatur delectus, dolorum perspiciatis laboriosam ipsa consequuntur fugit suscipit earum, quisquam officiis? Ipsum quo enim, molestias asperiores in molestiae vero provident at, quas voluptates assumenda repudiandae aperiam veritatis. Ducimus amet impedit facere, quos dignissimos suscipit fugit iusto doloribus ipsa delectus magnam ratione perspiciatis dolorem dolorum! Id quaerat odit tempora voluptatem quidem nam, culpa nobis consequatur suscipit molestias quia. Aut dicta, voluptatibus sequi sit soluta perspiciatis expedita, ducimus harum deserunt id maxime! Rerum in atque sint sapiente molestiae saepe expedita, suscipit tempora, porro nemo quasi placeat minus hic ut totam repellendus unde reprehenderit veniam laborum iusto ea! Tenetur velit quasi facilis repellat nulla, deserunt maiores eaque id repudiandae aut.</p>'

window.onload = setupScroll;

button.addEventListener('click', function () {
  scroller ^= true; //toggle shorthand;
  button.innerText = scroller ? 'Start' : 'Stop';
})
cElement.addEventListener('mouseenter', scrollSpeed);
cElement.addEventListener('mouseleave', scrollSpeed);

function scrollSpeed(e) {
  scroller = (e.type === 'mouseenter') ? false : true;
}

function setupScroll() {
  sElement.innerHTML = content;
  let temp = sElement.getBoundingClientRect();
  cElement.style.height = (temp.height / 2) + "px";
  sElement.style.top = temp.height + "px";
  scrollInt = setInterval(scrollingEle, 50);
}

function scrollingEle() {
  let scrollSpeed = speed.value;

  if (scroller) {
    let posY = parseInt(sElement.style.top);
    if (posY + sElement.clientHeight > 0) {
      sElement.style.top = posY - scrollSpeed + "px";
    } else {
      sElement.style.top = cElement.clientHeight + 'px';
    }
    output.innerHTML = 'Scroll speed: ' + scrollSpeed + " ,Y Position: " + posY;
  }

}