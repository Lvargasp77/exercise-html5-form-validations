let form = document.querySelector('#form');
let parentContainer = document.getElementById('alert');

form.addEventListener('submit', (e) => {
        e.preventDefault();
        let card = document.querySelector('#card');
        let cvc = document.querySelector('#cvc');
        let amount = document.querySelector('#amount');
        let firstName = document.querySelector('#firstName');
        let lastName = document.querySelector('#lastName');
        let city = document.querySelector('#city');
        let state = document.querySelector('#state');
        let postalCode = document.querySelector('#postalCode');
        let messages = document.querySelector('#messages');
        
        msj(card);
        msj(cvc);
        msj(amount);
        msj(firstName);
        msj(lastName);
        msj(city);
        msj(postalCode);
        msj(messages);
        msj(state);
})

function msj(id) {
    if (id.value.length === 0) {
        id.style.backgroundColor = '#ffcdd2';
        alertShow();
        setTimeout(() => {
            id.style.backgroundColor = '#ffffff';
        }, 3000)
    }
}

function alertShow () {
        parentContainer.innerHTML = '<div class="alert alert-danger" role="alert" id="alert-msg">Some fields are missing.</div>'
    setTimeout(()=> {
        parentContainer.innerHTML = null;
    }, 3000)
}

function resetForm() {
    form.reset()
}