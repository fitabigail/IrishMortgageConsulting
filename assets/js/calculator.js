//Navigation 

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menu.classList.toggle('change');
});

// Chart mortgage loan

let myChart;
const displayChart = (totalInterestPayableValue) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Total Interest", "Mortgage Amount"],
      datasets: [{
        data: [totalInterestPayableValue, mortgageAmount],
        backgroundColor: ['#b3420e', '#312f2c'],
        borderWidth: 0,
      }, ],
    },
  });
};

const updateChart = (totalInterestPayableValue) => {
  myChart.data.datasets[0].data[0] = totalInterestPayableValue;
  myChart.data.datasets[0].data[1] = mortgageAmount;
  myChart.update();
};

// Mortgage Calculator 

document.querySelector('form').style.background = '#ce5713';

const mortgageAmountInput = document.querySelector(".mortgage_amount");
const mortgageYearsInput = document.querySelector(".mortgage_years");
const interestRateInput = document.querySelector(".interest_rate");

const mortgageEMIValue = document.querySelector(".mortgage_emi .value");
const totalInterestValue = document.querySelector(".total_interest .value");
const totalAmountValue = document.querySelector(".total_amount .value");

const calculateBtn = document.querySelector(".calc_btn");

let mortgageAmount = mortgageAmountInput.value;
let mortgageYears = mortgageYearsInput.value * 12;
let interestRate = interestRateInput.value;

let interest = interestRate / 12 / 100;

const calculateEMI = () => {
  let emi = mortgageAmount * interest * (Math.pow(1 + interest, mortgageYears) / (Math.pow(1 + interest, mortgageYears) - 1));
  return (emi);
};
const updateData = (emi) => {
  mortgageEMIValue.innerHTML = Math.round(emi);

  let totalAmount = Math.round(mortgageYears * emi);
  totalAmountValue.innerHTML = totalAmount;

  let totalInterestPayable = Math.round(totalAmount - mortgageAmount);
  totalInterestValue.innerHTML = totalInterestPayable;

  if (myChart) {
    updateChart(totalInterestPayable);
  } else {
    displayChart(totalInterestPayable);
  }
};

const refreshInputValues = () => {
  mortgageAmount = mortgageAmountInput.value;
  mortgageYears = mortgageYearsInput.value * 12;
  interestRate = interestRateInput.value;
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

document.querySelector('.booking_btn').addEventListener('click', () => {
  document.querySelector('.booking').style.display = 'none';
  document.querySelector('.form_wp').style.cssText = 'opacity: 1; visibility: visible';
});
document.querySelector('.close_btn').addEventListener('click', () => {
  document.querySelector('.booking').style.display = 'flex';
  document.querySelector('.form_wp').style.cssText = 'opacity: 0; visibility: hidden';
});

function myBooking() {
  alert("Thank you for your booking request. Soon one of our team will be in touch with you.");
  window.location.replace('https://fitabigail.github.io/IrishMortgageConsulting/mortgage-calculator.html');
  }