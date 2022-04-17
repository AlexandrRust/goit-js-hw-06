
const refs = {
  body: document.body,
  btn: document.querySelector(".change-color"),
}

refs.btn.addEventListener('click', changeColor);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

