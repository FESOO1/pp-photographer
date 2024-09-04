const sendButton = document.getElementById('sendButton');
const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const projectDetailsInput = document.getElementById('projectDetailsInput');
const successErrorStateContainer = document.querySelector('.form-text');
const contactFormText = document.getElementById('contactFormText');

sendButton.addEventListener('click', e => {
    e.preventDefault();

    const errorMessages = [];

    if (fullNameInput.value.length === 0) {
        errorMessages.push('Gaps cannot be left empty.');
        fullNameInput.style.border = '1px solid red';

        contactFormText.textContent = 'Empty input';
        contactFormText.style.bottom = '20px';


        setTimeout(() => {
            contactFormText.style.bottom = '-100px';
        }, 3000);
        
    } else { 
        fullNameInput.style.border = '1px solid rgb(255,255,255,0)';
    };

});