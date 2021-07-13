import DonutMaker from './DonutMaker';
import style from './style';
const donutMaker = new DonutMaker(0, 0, 0);

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const addDonut = document.querySelector('.addDonut');
const autoclickers = document.querySelector('.autoclickers');
const multipliers = document.querySelector('.multipliers');
const reset = document.querySelector('.reset');

const addBtn = document.createElement('button');
addBtn.innerText = 'Add Donut';
addDonut.appendChild(addBtn);
container1.appendChild(addDonut)


const autoClickerBtn = document.createElement('button');
autoClickerBtn.innerText = 'Purchase AutoClicker';
autoclickers.appendChild(autoClickerBtn);
container1.appendChild(autoclickers)

const multipliersBtn = document.createElement('button');
multipliersBtn.innerText = ' Purchase multipliers';
multipliers.appendChild(multipliersBtn);
container1.appendChild(multipliers);

const resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset';
reset.appendChild(resetBtn);
container1.appendChild(reset);

const donutCount = document.createElement('h2');
donutCount.innerText = donutMaker.numDonuts + " donuts";
container2.appendChild(donutCount)

const donutbite = document.querySelector('.donutBite');
container2.appendChild(donutbite);


addBtn.addEventListener('click', () => {
  donutMaker.addDonut();
  donutCount.innerText = donutMaker.numDonuts + " donuts";
  if (donutMaker.numDonuts < 10) {
    autoClickerBtn.disabled = true,
      multipliersBtn.disabled = true
  } else {
    autoClickerBtn.disabled = false;
    multipliersBtn.disabled = false;
  }

})

multipliersBtn.addEventListener('click', () => {
   donutMaker.addMultipliers();
  donutCount.innerText = Math.pow(1.2, donutMaker.numDonutMultipliers).toFixed(2) + " donuts";
})


autoClickerBtn.addEventListener('click', () => {
  autoClickerBtn.disabled = true,
  multipliersBtn.disabled = true,
    donutMaker.addAutoClicker();
  setInterval(() => {
    donutMaker.addDonut();
    donutCount.innerText = donutMaker.numDonuts + " donuts";
  }, 1000);

})




resetBtn.addEventListener('click', () => {
  donutMaker.reset();
  donutCount.innerText = donutMaker.numDonuts + " donuts";
  autoClickerBtn.disabled = false,
  multipliersBtn.disabled = false;
  
  
  
})

export default index.js;