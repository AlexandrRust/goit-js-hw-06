const refs = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    span: document.querySelector("#value")
};


let counterValue = 0;

refs.buttonIncrement.addEventListener('click', () => {
    
    counterValue ++;
    refs.span.innerHTML = counterValue;
});


refs.buttonDecrement.addEventListener('click', () => {

    if (counterValue >= 1) {
        counterValue--;
    }
    
    refs.span.innerHTML = counterValue;
});

