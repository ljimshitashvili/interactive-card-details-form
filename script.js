const nameOfUser = document.querySelector('#name');
const number = document.querySelector('#number');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');
const submit = document.querySelector('.button');
const cardNumber = document.querySelector('.card-number');
const userName = document.querySelector('.username');
const expM = document.querySelector('.exp-month');
const expY = document.querySelector('.exp-year');
const cvcCard = document.querySelector('.cvc');


// This event checks the validation of inputs and outputs new values on display.

submit.addEventListener('mouseover', () => {
    if(!(!nameOfUser.value || !number.value || !month.value || !year.value || !cvc.value)){
        submit.addEventListener('click', () => {
            userName.textContent = nameOfUser.value;
            cardNumber.textContent = number.value;
            expM.textContent = month.value.toString().padStart(2,"0");
            expY.textContent = "/ " + year.value;
            cvcCard.textContent = cvc.value;
        })
    }else{
        submit.classList.toggle('float');
    }
});

