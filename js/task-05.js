const refs = {
    input: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output')
};

refs.input.addEventListener('input', changeName);


function changeName(event) {
    if (event.currentTarget.value === "") {
        refs.nameSpan.textContent = "Anonymous";
    } else {
        refs.nameSpan.textContent = event.currentTarget.value;
    } 
};

