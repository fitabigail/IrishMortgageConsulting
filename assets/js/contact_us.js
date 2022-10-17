//Navigation 

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
});



// CONTACT US FORM

function sendEmail(){
    Email.send({
        Host : "smtp.yahoo.com",
        Username : "abi_dinu@yahoo.com",
        Password : "",
        To : 'abidinu35@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById('name').value
        + "<br> Email:" + document.getElementById('email').value
        + "<br> Phone no:" + document.getElementById('phone').value
        + "<br> Message:" + document.getElementById('message').value
    }).then(
      message => alert("Message send succefuly")
    );
}
