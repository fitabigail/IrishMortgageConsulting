//Navigation 

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener('click', ()=>{

    navbar.classList.toggle('change');
    menu.classList.toggle('change');

})

// Mortgage Calculator 

document.querySelector('form').style.background = '#ce5713';

const mortgageAmountInput = document.querySelector(".mortgage_amount");
const mortgageYearsInput = document.querySelector(".mortgage_years");
const interestRateInput = document.querySelector(".interest_rate");

const mortgageEMIValue = document.querySelector(".mortgage_emi .value");
const totalInterestValue = document.querySelector(".total_interest .value");
const totalAmountValue = document.querySelector(".total_amount .value");

const calculateBtn = document.querySelector(".calc_btn");
const resetBtn = document.querySelector("reset-btn");

let mortgageAmount = parseFloat(mortgageAmountInput.value);
let mortgageYears = parseFloat(mortgageYearsInput.value);
let interestRate = parseFloat(interestRateInput.value);


let interest = interestRate / 12 / 100;

const calculateEMI = () => {
   let emi = mortgageAmount * interest * (Math.pow(1 + interest, mortgageYears) / (Math.pow(1 + interest, mortgageYears) - 1));
   return(emi);
};


const updateData = (emi) =>{
   mortgageEMIValue.innerHTML = Math.round(emi);

   let totalAmount = Math.round(mortgageYears * emi); 
   totalAmountValue.innerHTML = totalAmount;

   let totalInterestPayable = Math.round(totalAmount - mortgageAmount);
   totalInterestValue.innerHTML = totalInterestPayable;
}

const refreshInputValues = () =>{
   mortgageAmount = parseFloat(mortgageAmountInput.value);
   mortgageYears = parseFloat(mortgageYearsInput.value);
   interestRate = parseFloat(interestRateInput.value);


   interest = interestRate / 12 / 100;
};

const init = () => {
   refreshInputValues();
  let emi = calculateEMI();
  updateData(emi);
};

init();

calculateBtn.addEventListener("click", init);







// Booking Form

document.querySelector('.booking_btn').addEventListener
('click', () => {
 document.querySelector('.booking').style.display = 'none';
 document.querySelector('.form_wp').style.cssText = 'opacity: 1; visibility: visible';
   });

document.querySelector('.close_btn').addEventListener('click', () =>{
   document.querySelector('.booking').style.display = 'flex';
   document.querySelector('.form_wp').style.cssText = 'opacity: 0; visibility: hidden';

});

function myBooking() {
   alert("Thank you for your booking request. Soon one of our team will be in touch with you.");
   window.location.href='https://8000-fitabigail-irishmortgag-tkpn56x4ty1.ws-eu63.gitpod.io/mortgage-calculator.html?';
};





