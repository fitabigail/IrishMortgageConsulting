    //Navigation 

    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    menu.addEventListener('click', ()=>{

        navbar.classList.toggle('change');
        menu.classList.toggle('change');

    })

    // Section About - Video

    const video = document.querySelector('.video')
    const btn = document.querySelector('.buttons i')
    const bar = document.querySelector('.video_bar')

    const playPause =()=>{
        if(video.paused)    
        {
            video.play()
            btn.className ='far fa-pause-circle'
            video.style.opacity='.9'
        }
        else{
            video.pause()
            btn.className ='far fa-play-circle'
            video.style.opacity='.6'
        }
       
    }

    btn.addEventListener('click', ()=> {
        playPause();
    }) 

    //video bar 

    video.addEventListener('timeupdate', () =>{
       const barWidth =video.currentTime/video.duration
       bar.style.width =`${barWidth * 100}%`
       if(video.ended){
        btn.className ='far fa-play-circle'
        video.style.opacity ='0.6'
       }


    })

// Mortgage calculator

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