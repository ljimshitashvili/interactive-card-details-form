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
const firstPage = document.querySelector('.main1');
const secondPage = document.querySelector('.main2');
const error = document.querySelector('.error-message');
const errorCvc = document.querySelector('.error-cvc');



// This event checks the validation of inputs and outputs new values on display.

submit.addEventListener('mouseover', () => {
    if(!(!nameOfUser.value || !number.value || !number.value ==16 || !month.value || !year.value || !cvc.value || !cvc.value ==3 )){
        submit.addEventListener('click', () => {
            userName.textContent = nameOfUser.value;
            cardNumber.textContent = number.value;
            console.log(cardNumber.textContent);
            copyCardNumber(number, cardNumber);
            expM.textContent = month.value.toString().padStart(2,"0");
            expY.textContent = "/ " + year.value;
            cvcCard.textContent = cvc.value;
            firstPage.style.display = "none";
            secondPage.style.display = "flex";
        })
    }else{
        submit.classList.toggle('float');
        checkInput(nameOfUser);    
        checkInput(number);    
        checkInput(month);    
        checkInput(year);    
        checkInput(cvc);    
        if(number.value.length !== 16){
            number.style.border = "1px solid red";
            error.classList.remove('hidden');
        }else{
            error.classList.add('hidden');
        }
        if(cvc.value.length !== 3){
            cvc.style.border = "1px solid red";
            errorCvc.classList.remove('hidden');
        }else{
            errorCvc.classList.add('hidden');
        }
    }
});

// This function checks if input is empty or not and changes color of border.

function checkInput(e){
    if(e.value){
        e.style.border = "1px solid #DFDEE0"  
    }else{
        e.style.border = "1px solid red";
    }
}


const copyCardNumber = (x, y) => {
    x.addEventListener("input", () => {
        let cardValue = x.value;
        let chunks = cardValue.match(/.{1,4}/g);
        let joinskip = chunks.join(" ");
        y.innerHTML = joinskip;
    })
}