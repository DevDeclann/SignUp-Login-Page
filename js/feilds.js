/*const myForm = document.querySelector('#myForm');
const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(emailInput.value === '' || passInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all Feilds!';

        setTimeout(() => msg.remove(), 3000);
    } 
}*/

const email = document.forms['form']['email'];
const password = document.forms['form']['password'];
const emailError = document.querySelector('#email_error');
const passError = document.querySelector('#pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
    if(email.value.length < 8){
        email.style.border = '1px solid red';
        email.focus();
        emailError.style.display = 'block';
        return false;
    }

    if(password.value.length < 8){
        password.style.border = '1px solid red';
        password.focus();
        passError.style.display = 'block';
        return false;
    }
}

function email_Verify(){
    if(email.value.length < 8){
        email.style.border = '1px solid silver';
        emailError.style.display = 'none';
        return true;
    }
}

function pass_Verify(){
    if(password.value.length < 8){
        password.style.border = '1px solid silver';
        passError.style.display = 'none';
        return true;
    }
}
