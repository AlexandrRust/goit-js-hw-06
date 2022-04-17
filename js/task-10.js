const refs = {
  input: document.querySelector('input'),
  box: document.querySelector('#boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnCleare: document.querySelector('[data-destroy]'),
}

refs.input.addEventListener('input', getAmount);
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnCleare.addEventListener('click', destroyBoxes)


function getAmount() {
  return refs.input.value;
};

function createBoxes() {

  let amount = getAmount();
  let size = 30;
  
  for (let i = 0; i < amount; i++) {

    size += 10;
    const div = document.createElement('div');
    div.classList = "box"
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    console.log(div);
    refs.box.append(div);
  }
}

function destroyBoxes() {
  const boxRemove = document.querySelectorAll('.box');
  
  boxRemove.forEach(element => element.remove())

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

