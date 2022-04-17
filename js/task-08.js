const refs = {
    form: document.querySelector('.login-form'),
}



refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let formObj = {};

    formData.forEach(( value, name ) => {
        
        if (value.length === 0) {
            alert("Все поля должны быть заполнеными")
        } else {
            formObj[name] = value;
            event.currentTarget.reset();
        }
    })
console.log(formObj);
};