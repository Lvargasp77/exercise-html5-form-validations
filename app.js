const form = document.querySelector('#form');

function validate() {
    form.addEventListener('send', (e) => {
        e.preventDefault();
        let card = document.querySelector('#card');
        let cvc = document.querySelector('#cvc');
        let amount = document.querySelector('#amount');
        let firstName = document.querySelector('#firstName');
        let lastName = document.querySelector('#lastName');
        let city = document.querySelector('#city');
        let state = document.querySelector('#state');
        let postalCode = document.querySelector('#postalCode');
        let alertCard = document.getElementById('alertCard');
        let alertCvc = document.getElementById('alertCvc');
        let alertAmount = document.getElementById('alertAmount');
        let alertName = document.getElementById('alertName');
        let alertLastName = document.getElementById('alertLastName');
        let alertCity = document.getElementById('alertCity');
        let alertState = document.getElementById('alertState');
        let alertPostal = document.getElementById('alertPostal');
        msj(card, alertCard);
        msj(cvc, alertCvc);
        msj(amount, alertAmount);
        msj(firstName, alertName);
        msj(lastName, alertLastName);
        msj(city, alertCity);
        msj(postalCode, alertPostal);
        if (state.value == "") {
            alertState.style.display = 'block'
            alertState.innerText = 'Por favor completa este campo';
            alertState.className = 'alert alert-danger'
            setTimeout(() => {
                alertState.style.display = 'none'
            }, 3000)
        }
    })
}

function msj(id, tag) {
    if (id.value == '') {
        tag.style.display = 'block'
        tag.innerText = 'Por favor completa este campo';
        tag.className = 'text-danger'
        id.classList.add(`alert-danger`)
        setTimeout(() => {
            tag.style.display = 'none';
            id.classList.remove(`alert-danger`)
        }, 3000)
    } else { id.classList.add(`alert-success`) }
}

function resetForm() {
    form.reset()
}