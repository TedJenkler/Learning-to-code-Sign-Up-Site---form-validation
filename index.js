let fName = document.querySelector('#firstname')
let lName = document.querySelector('#lastname')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('#form')
let textErrorOne = document.querySelector('#errorOne')
let warningIconOne = document.querySelector('#warningOne')
let textErrorTwo = document.querySelector('#errorTwo')
let warningIconTwo = document.querySelector('#warningTwo')
let textErrorThree = document.querySelector('#errorThree')
let warningIconThree = document.querySelector('#warningThree')
let textErrorFour = document.querySelector('#errorFour')
let warningIconFour = document.querySelector('#warningFour')
let btn = document.querySelector('#submit')

fName.classList.remove('redborder')
lName.classList.remove('redborder')
email.classList.remove('redborder')
password.classList.remove('redborder')

form.addEventListener('submit', (e) => {

const validationMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(fName.value === ""){
    e.preventDefault()
    fName.classList.add('redborder')
    textErrorOne.classList.remove('error')
    warningIconOne.classList.remove('warning')
}
else {
    textErrorOne.classList.add('error')
    warningIconOne.classList.add('warning')
    fName.classList.remove('redborder')
}
if(lName.value === ""){
    e.preventDefault()
    textErrorTwo.classList.remove('error')
    warningIconTwo.classList.remove('warning')
    lName.classList.add('redborder')
}
else {
    textErrorTwo.classList.add('error')
    warningIconTwo.classList.add('warning')
    lName.classList.remove('redborder')
}
if(email.value === "" || !email.value.match(validationMail)){
    e.preventDefault()
    textErrorThree.classList.remove('error')
    warningIconThree.classList.remove('warning')
    email.classList.add('redborder')
}
else {
    textErrorThree.classList.add('error')
    warningIconThree.classList.add('warning')
    email.classList.remove('redborder')
}
if(password.value === ""){
    e.preventDefault()
    textErrorFour.classList.remove('error')
    warningIconFour.classList.remove('warning')
    password.classList.add('redborder')
}
else {
    textErrorFour.classList.add('error')
    warningIconFour.classList.add('warning')
    password.classList.remove('redborder')
}
})