const sendButton = document.getElementById('sendButton');
const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const projectDetailsInput = document.getElementById('projectDetailsInput');
const successErrorStateContainer = document.querySelector('.form-text');
const contactFormText = document.getElementById('contactFormText');
const contactFormTextSvg = document.querySelector('.form-text-svg');

sendButton.addEventListener('click', e => {
    e.preventDefault();

    const errorMessages = [];

    if (fullNameInput.value.length === 0) {
        errorMessages.push('Gaps cannot be left empty.');
        fullNameInput.style.border = '1px solid red';

        contactFormText.textContent = 'Empty input';
        successErrorStateContainer.style.bottom = '20px';


        setTimeout(() => {
            successErrorStateContainer.style.bottom = '-100px';
        }, 3000);
        
    } else { 
        fullNameInput.style.border = '1px solid rgb(255,255,255,0)';
    };

    if (emailInput.value.length === 0) {
        errorMessages.push('Gaps cannot be left empty.');
        emailInput.style.border = '1px solid red';

        contactFormText.textContent = 'Empty input';
        successErrorStateContainer.style.bottom = '20px';


        setTimeout(() => {
            successErrorStateContainer.style.bottom = '-100px';
        }, 3000);
        
    } else { 
        emailInput.style.border = '1px solid rgb(255,255,255,0)';
    };

    if (projectDetailsInput.value.length === 0) {
        errorMessages.push('Gaps cannot be left empty.');
        projectDetailsInput.style.border = '1px solid red';

        contactFormText.textContent = 'Empty input';
        successErrorStateContainer.style.bottom = '20px';


        setTimeout(() => {
            successErrorStateContainer.style.bottom = '-100px';
        }, 3000);
        
    } else { 
        projectDetailsInput.style.border = '1px solid rgb(255,255,255,0)';
    };

    if (errorMessages.length === 0){
        contactFormText.textContent = 'Message has been sent. We will reach out to you as soon as possible.';
        successErrorStateContainer.style.bottom = '20px';
        contactFormTextSvg.style.color = 'rgb(106, 255, 0)';

        const form = document.querySelectorAll('.form-itself input');

        for (const resetForm of form) {
            resetForm.value = '';
            projectDetailsInput.value = '';
        };


        setTimeout(() => {
            successErrorStateContainer.style.bottom = '-100px';
        }, 3000);
    } else {
        contactFormTextSvg.style.color = 'orangered';
    }

});