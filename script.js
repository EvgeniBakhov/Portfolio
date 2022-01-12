const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

const form = document.getElementsByTagName('form')[0];
const emailField = document.getElementById('mail');
const nameField = document.getElementById('name');
const msgField = document.getElementById('msg');
const error = document.querySelector('.error');

emailField.addEventListener('input', function (event) {

    if (emailField.validity.valid) {
        error.textContent = '';
        error.className = 'error';
    } else {
     
        showError();
    }
});

form.addEventListener('submit', function (event) {

    if (!emailField.validity.valid || !nameField.validity.valid || !msgField.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (nameField.validity.valueMissing) {
        error.textContent = 'You need to enter your name.';
    } else if (nameField.validity.tooShort) {
        error.textContent = `Name should be at least ${nameField.minLength} characters. You entered ${nameField.value.length}.`;
    } else if (emailField.validity.valueMissing) {
        error.textContent = 'You need to enter an e-mail address.';
    } else if (emailField.validity.typeMismatch) {
        error.textContent = 'Entered value needs to be an e-mail address.';
    } else if (emailField.validity.tooShort) {
        error.textContent = `Email should be at least ${emailField.minLength} characters. You entered ${emailField.value.length}.`;
    } else if (msgField.validity.valueMissing) {
        error.textContent = 'You need to enter some text message.';
    } else if (msgField.validity.tooShort) {
        error.textContent = `Message should be at least ${msgField.minLength} characters. You entered ${msgField.value.length}.`;
    }
    error.className = 'error active';
}