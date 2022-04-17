const refs = {
    input: document.querySelector('#validation-input'),
    lengthInput: document.querySelector('[data-length]')
}


refs.input.addEventListener('input', (event) => {
        if (Number(refs.lengthInput.dataset.length) === event.currentTarget.value.length) {
            refs.input.classList.remove('invalid');
            refs.input.classList.add('valid');
        } else {
            refs.input.classList.remove('valid');
            refs.input.classList.add('invalid');
    }

    console.log(event.currentTarget.value.length);
});