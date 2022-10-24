//Navigation 

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
});



// CONTACT US FORM

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var textError = document.getElementById('text-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required'; /*check if the input field is empty*/
        return false;
    }
    if(!name.match(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/)){
        nameError.innerHTML ='Only letters.'; /*Name must match to the expresion*/
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'; /*check if the input field is empty*/
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "ex:johndoe@example.com.";        /*check for email format*/
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}


function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required'; /*check if the input field is empty*/
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone should be max 13 digits'; /*check  for max digits*/
        return false;
    }
    if(!phone.match(/^\d{10}$/)){
        phoneError.innerHTML = 'Only digits'; /* check if are digits*/
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateText(){
    var message = document.getElementById('message').value;
    var required = 10;
    var left = required - message.length;

    if(left > 0){
        textError.innerHTML = left + 'more characters required';
        return false;
    }
    
    textError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateFormCotact(){

    if(!validateName() || !validateEmail() || !validatePhone() || !validateText()){
        submitError.style.display ='block';
        submitError.style.color ='black';
        submitError.innerHTML = "Please check your inputs to submit!";
        setTimeout(function(){submitError.style.display ='none';}, 3000);
        return false;
    }

    
        window.alert("Thank you for your message,\n one of our team member will contact you soon"); 
        return true;
        
}


