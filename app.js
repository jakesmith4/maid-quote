// Global Vars
const select = document.getElementById('options');
const spinner = document.querySelector('.loading-spinner');
const displayOptions = document.querySelector('.display-options');
const amount = document.querySelector('.amount');
const hourRate = document.getElementById('hours');
const tax = document.getElementById('tax-rate');
const deep = document.querySelector('.deep');
const general = document.querySelector('.general');
const weekly = document.querySelector('.weekly');
const biWeekly = document.querySelector('.bi-weekly');
const monthly = document.querySelector('.monthly');
const deepHours = document.querySelector('.deep-hours');
const generalHours = document.querySelector('.general-hours');
const weeklyHours = document.querySelector('.weekly-hours');
const biWeeklyHours = document.querySelector('.bi-weekly-hours');
const monthlyHours = document.querySelector('.monthly-hours');
const amountHours = document.querySelectorAll('.hours');
const scale = document.querySelector('.scale-deep');
const scaleOption = scale.getElementsByTagName('option');
const scaleGeneral = document.querySelector('.scale-general');
const GeneralOption = scaleGeneral.getElementsByTagName('option');
const scaleWeekly = document.querySelector('.scale-weekly');
const weeklyOption = scaleWeekly.getElementsByTagName('option');
const scaleBiWeekly = document.querySelector('.scale-bi-weekly');
const scaleBiWeeklyOption = scaleBiWeekly.getElementsByTagName('option');
const scaleMonthly = document.querySelector('.scale-monthly');
const scaleMonthlyOption = scaleMonthly.getElementsByTagName('option');
const scaleChange = document.querySelectorAll('.scale-change');
const hChange = document.querySelectorAll('.h-change');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const lockIcon = document.querySelectorAll('.lock-icon');
const unlock = document.querySelectorAll('.unlock');

const maidQuoteContainer = document.querySelector('.maid-quote-container');

// Show Page On Mobile
maidQuoteContainer.style.display = 'none';
// window.setTimeout(() => {
// }, 2000);

toggleBtns[0].addEventListener('click', (e) => {
  lockFunction(0);
  e.preventDefault();
});

toggleBtns[1].addEventListener('click', (e) => {
  lockFunction(1);
  e.preventDefault();
});

toggleBtns[2].addEventListener('click', (e) => {
  lockFunction(2);
  e.preventDefault();
});

toggleBtns[3].addEventListener('click', (e) => {
  lockFunction(3);
  e.preventDefault();
});

toggleBtns[4].addEventListener('click', (e) => {
  lockFunction(4);
  e.preventDefault();
});

function lockFunction(index) {
  scaleChange[index].toggleAttribute('disabled');
  lockIcon[index].classList.toggle('toggle-red');
  lockIcon[index].classList.toggle('display-block');
  unlock[index].classList.toggle('display-none');
  scaleChange[index].classList.toggle('cursur-default');
}

// Event Listner
// Change Event On scaleMonthly
scaleMonthly.addEventListener('change', () => {
  const scaleValue = scaleMonthly.options[scaleMonthly.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);
  console.log(scaleValueNumMinus);

  if (scaleValueNum === 0) {
    amountHours[4].style.color = '#004643';
    scaleChange[4].style.background = '#004643';
  }

  if (scaleValueNum > 0) {
    amountHours[4].style.color = 'black';
    scaleChange[4].style.background = 'black';
  }

  if (scaleValueNumMinus < 0) {
    amountHours[4].style.color = 'red';
    scaleChange[4].style.background = 'red';
  }

  hChange[4].style.color = 'red';
  hChange[4].textContent = 'Hours Changed';

  if (scaleValue === '0') {
    amountHours[4].style.color = '#004643';
    scaleChange[4].style.background = '#004643';
    hChange[4].style.color = '#004643';
    hChange[4].textContent = 'Change Hours';
  }

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeMonthly(hours) {
    // Monthly
    monthly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Monthly Hours
    monthlyHours.textContent = hours;
  }

  const vell = select.options[select.selectedIndex].value;

  function ifExpress(hour) {
    if (scaleValue === '-2') {
      changeMonthly(hour - 2);
    }
    if (scaleValue === '-1.75') {
      changeMonthly(hour - 1.75);
    }
    if (scaleValue === '-1.50') {
      changeMonthly(hour - 1.5);
    }
    if (scaleValue === '-1.25') {
      changeMonthly(hour - 1.25);
    }
    if (scaleValue === '-1') {
      changeMonthly(hour - 1);
    }
    if (scaleValue === '-.75') {
      changeMonthly(hour - 0.75);
    }
    if (scaleValue === '-.50') {
      changeMonthly(hour - 0.5);
    }
    if (scaleValue === '-.25') {
      changeMonthly(hour - 0.25);
    }
    if (scaleValue === '0') {
      changeMonthly(hour);
    }
    if (scaleValue === '+.25') {
      changeMonthly(hour + 0.25);
    }
    if (scaleValue === '+.50') {
      changeMonthly(hour + 0.5);
    }
    if (scaleValue === '+.75') {
      changeMonthly(hour + 0.75);
    }
    if (scaleValue === '+1') {
      changeMonthly(hour + 1);
    }
    if (scaleValue === '+1.25') {
      changeMonthly(hour + 1.25);
    }
    if (scaleValue === '+1.50') {
      changeMonthly(hour + 1.5);
    }
    if (scaleValue === '+1.75') {
      changeMonthly(hour + 1.75);
    }
    if (scaleValue === '+2') {
      changeMonthly(hour + 2);
    }
  }

  if (vell === '1000-1500') {
    ifExpress(3.25);
  }
  if (vell === '1600-2000') {
    ifExpress(3.5);
  }
  if (vell === '2100-2200') {
    ifExpress(4);
  }
  if (vell === '2300-2500') {
    ifExpress(4.25);
  }
  if (vell === '2600-2800') {
    ifExpress(4.5);
  }
  if (vell === '2900-3100') {
    ifExpress(4.75);
  }
  if (vell === '3200-3400') {
    ifExpress(5);
  }
  if (vell === '3500-3700') {
    ifExpress(5.25);
  }
  if (vell === '3800-4000') {
    ifExpress(5.5);
  }
  if (vell === '4100-4300') {
    ifExpress(5.75);
  }
  if (vell === '4400-4600') {
    ifExpress(6);
  }
  if (vell === '4800-5000') {
    ifExpress(6.25);
  }
});

// Event Listner
// Change Event On scaleBiWeekly
scaleBiWeekly.addEventListener('change', () => {
  const scaleValue = scaleBiWeekly.options[scaleBiWeekly.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);

  if (scaleValueNum === 0) {
    amountHours[3].style.color = '#004643';
    scaleChange[3].style.background = '#004643';
  }

  if (scaleValueNum > 0) {
    amountHours[3].style.color = 'black';
    scaleChange[3].style.background = 'black';
  }

  if (scaleValueNumMinus < 0) {
    amountHours[3].style.color = 'red';
    scaleChange[3].style.background = 'red';
  }

  hChange[3].style.color = 'red';
  hChange[3].textContent = 'Hours Changed';

  if (scaleValue === '0') {
    amountHours[3].style.color = '#004643';
    scaleChange[3].style.background = '#004643';
    hChange[3].style.color = '#004643';
    hChange[3].textContent = 'Change Hours';
  }

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeBiWeekly(hours) {
    // Bi-Weekly
    biWeekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Bi-Weekly Hours
    biWeeklyHours.textContent = hours;
  }

  const vell = select.options[select.selectedIndex].value;

  function ifExpress(hour) {
    if (scaleValue === '-2') {
      changeBiWeekly(hour - 2);
    }
    if (scaleValue === '-1.75') {
      changeBiWeekly(hour - 1.75);
    }
    if (scaleValue === '-1.50') {
      changeBiWeekly(hour - 1.5);
    }
    if (scaleValue === '-1.25') {
      changeBiWeekly(hour - 1.25);
    }
    if (scaleValue === '-1') {
      changeBiWeekly(hour - 1);
    }
    if (scaleValue === '-.75') {
      changeBiWeekly(hour - 0.75);
    }
    if (scaleValue === '-.50') {
      changeBiWeekly(hour - 0.5);
    }
    if (scaleValue === '-.25') {
      changeBiWeekly(hour - 0.25);
    }
    if (scaleValue === '-1') {
      changeBiWeekly(hour - 1);
    }
    if (scaleValue === '-.75') {
      changeBiWeekly(hour - 0.75);
    }
    if (scaleValue === '-.50') {
      changeBiWeekly(hour - 0.5);
    }
    if (scaleValue === '-.25') {
      changeBiWeekly(hour - 0.25);
    }
    if (scaleValue === '0') {
      changeBiWeekly(hour);
    }
    if (scaleValue === '+.25') {
      changeBiWeekly(hour + 0.25);
    }
    if (scaleValue === '+.50') {
      changeBiWeekly(hour + 0.5);
    }
    if (scaleValue === '+.75') {
      changeBiWeekly(hour + 0.75);
    }
    if (scaleValue === '+1') {
      changeBiWeekly(hour + 1);
    }
    if (scaleValue === '+1.25') {
      changeBiWeekly(hour + 1.25);
    }
    if (scaleValue === '+1.50') {
      changeBiWeekly(hour + 1.5);
    }
    if (scaleValue === '+1.75') {
      changeBiWeekly(hour + 1.75);
    }
    if (scaleValue === '+2') {
      changeBiWeekly(hour + 2);
    }
  }

  if (vell === '1000-1500') {
    ifExpress(3);
  }
  if (vell === '1600-2000') {
    ifExpress(3.25);
  }
  if (vell === '2100-2200') {
    ifExpress(3.75);
  }
  if (vell === '2300-2500') {
    ifExpress(4);
  }
  if (vell === '2600-2800') {
    ifExpress(4.25);
  }
  if (vell === '2900-3100') {
    ifExpress(4.5);
  }
  if (vell === '3200-3400') {
    ifExpress(4.75);
  }
  if (vell === '3500-3700') {
    ifExpress(5);
  }
  if (vell === '3800-4000') {
    ifExpress(5.25);
  }
  if (vell === '4100-4300') {
    ifExpress(5.5);
  }
  if (vell === '4400-4600') {
    ifExpress(5.75);
  }
  if (vell === '4800-5000') {
    ifExpress(6);
  }
});

// Event Listner
// Change Event On scaleWeekly
scaleWeekly.addEventListener('change', () => {
  const scaleValue = scaleWeekly.options[scaleWeekly.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);
  console.log(scaleValueNumMinus);

  if (scaleValueNum === 0) {
    amountHours[2].style.color = '#004643';
    scaleChange[2].style.background = '#004643';
  }

  if (scaleValueNum > 0) {
    amountHours[2].style.color = 'black';
    scaleChange[2].style.background = 'black';
  }

  if (scaleValueNumMinus < 0) {
    amountHours[2].style.color = 'red';
    scaleChange[2].style.background = 'red';
  }

  hChange[2].style.color = 'red';
  hChange[2].textContent = 'Hours Changed';

  if (scaleValue === '0') {
    amountHours[2].style.color = '#004643';
    scaleChange[2].style.background = '#004643';
    hChange[2].style.color = '#004643';
    hChange[2].textContent = 'Change Hours';
  }

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeWeekly(hours) {
    // Weekly
    weekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Weekly Hours
    weeklyHours.textContent = hours;
  }

  const vell = select.options[select.selectedIndex].value;

  function ifExpress(hour) {
    if (scaleValue === '-2') {
      changeWeekly(hour - 2);
    }
    if (scaleValue === '-1.75') {
      changeWeekly(hour - 1.75);
    }
    if (scaleValue === '-1.50') {
      changeWeekly(hour - 1.5);
    }
    if (scaleValue === '-1.25') {
      changeWeekly(hour - 1.25);
    }
    if (scaleValue === '-1') {
      changeWeekly(hour - 1);
    }
    if (scaleValue === '-.75') {
      changeWeekly(hour - 0.75);
    }
    if (scaleValue === '-.50') {
      changeWeekly(hour - 0.5);
    }
    if (scaleValue === '-.25') {
      changeWeekly(hour - 0.25);
    }
    if (scaleValue === '0') {
      changeWeekly(hour);
    }
    if (scaleValue === '+.25') {
      changeWeekly(hour + 0.25);
    }
    if (scaleValue === '+.50') {
      changeWeekly(hour + 0.5);
    }
    if (scaleValue === '+.75') {
      changeWeekly(hour + 0.75);
    }
    if (scaleValue === '+1') {
      changeWeekly(hour + 1);
    }
    if (scaleValue === '+1.25') {
      changeWeekly(hour + 1.25);
    }
    if (scaleValue === '+1.50') {
      changeWeekly(hour + 1.5);
    }
    if (scaleValue === '+1.75') {
      changeWeekly(hour + 1.75);
    }
    if (scaleValue === '+2') {
      changeWeekly(hour + 2);
    }
  }

  if (vell === '1000-1500') {
    ifExpress(2.5);
  }
  if (vell === '1600-2000') {
    ifExpress(3);
  }
  if (vell === '2100-2200') {
    ifExpress(3.5);
  }
  if (vell === '2300-2500') {
    ifExpress(3.75);
  }
  if (vell === '2600-2800') {
    ifExpress(4);
  }
  if (vell === '2900-3100') {
    ifExpress(4.25);
  }
  if (vell === '3200-3400') {
    ifExpress(4.5);
  }
  if (vell === '3500-3700') {
    ifExpress(4.75);
  }
  if (vell === '3800-4000') {
    ifExpress(5);
  }
  if (vell === '4100-4300') {
    ifExpress(5.25);
  }
  if (vell === '4400-4600') {
    ifExpress(5.5);
  }
  if (vell === '4800-5000') {
    ifExpress(5.75);
  }
});

// Event Listner
// Change Event On scaleGeneral
scaleGeneral.addEventListener('change', () => {
  const scaleValue = scaleGeneral.options[scaleGeneral.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);

  if (scaleValueNum === 0) {
    amountHours[1].style.color = '#004643';
    scaleChange[1].style.background = '#004643';
  }

  if (scaleValueNum > 0) {
    amountHours[1].style.color = 'black';
    scaleChange[1].style.background = 'black';
  }

  if (scaleValueNumMinus < 0) {
    amountHours[1].style.color = 'red';
    scaleChange[1].style.background = 'red';
  }

  hChange[1].style.color = 'red';
  hChange[1].textContent = 'Hours Changed';

  if (scaleValue === '0') {
    amountHours[1].style.color = '#004643';
    scaleChange[1].style.background = '#004643';
    hChange[1].style.color = '#004643';
    hChange[1].textContent = 'Change Hours';
  }

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeGeneral(hours) {
    // General
    general.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // General Hours
    generalHours.textContent = hours;
  }

  const vell = select.options[select.selectedIndex].value;

  function ifExpress(hour) {
    if (scaleValue === '-2.25') {
      changeGeneral(hour - 2.25);
    }
    if (scaleValue === '-2') {
      changeGeneral(hour - 2);
    }
    if (scaleValue === '-1.75') {
      changeGeneral(hour - 1.75);
    }
    if (scaleValue === '-1.50') {
      changeGeneral(hour - 1.5);
    }
    if (scaleValue === '-1.25') {
      changeGeneral(hour - 1.25);
    }
    if (scaleValue === '-1') {
      changeGeneral(hour - 1);
    }
    if (scaleValue === '-.75') {
      changeGeneral(hour - 0.75);
    }
    if (scaleValue === '-.50') {
      changeGeneral(hour - 0.5);
    }
    if (scaleValue === '-.25') {
      changeGeneral(hour - 0.25);
    }
    if (scaleValue === '0') {
      changeGeneral(hour);
    }
    if (scaleValue === '+.25') {
      changeGeneral(hour + 0.25);
    }
    if (scaleValue === '+.50') {
      changeGeneral(hour + 0.5);
    }
    if (scaleValue === '+.75') {
      changeGeneral(hour + 0.75);
    }
    if (scaleValue === '+1') {
      changeGeneral(hour + 1);
    }
    if (scaleValue === '+1.25') {
      changeGeneral(hour + 1.25);
    }
    if (scaleValue === '+1.50') {
      changeGeneral(hour + 1.5);
    }
    if (scaleValue === '+1.75') {
      changeGeneral(hour + 1.75);
    }
    if (scaleValue === '+2') {
      changeGeneral(hour + 2);
    }
    if (scaleValue === '+2.25') {
      changeGeneral(hour + 2.25);
    }
  }

  if (vell === '1000-1500') {
    ifExpress(4);
  }
  if (vell === '1600-2000') {
    ifExpress(4.5);
  }
  if (vell === '2100-2200') {
    ifExpress(5);
  }
  if (vell === '2300-2500') {
    ifExpress(5.5);
  }
  if (vell === '2600-2800') {
    ifExpress(6);
  }
  if (vell === '2900-3100') {
    ifExpress(6.5);
  }
  if (vell === '3200-3400') {
    ifExpress(7);
  }
  if (vell === '3500-3700') {
    ifExpress(7.5);
  }
  if (vell === '3800-4000') {
    ifExpress(8);
  }
  if (vell === '4100-4300') {
    ifExpress(8.5);
  }
  if (vell === '4400-4600') {
    ifExpress(9);
  }
  if (vell === '4800-5000') {
    ifExpress(9.5);
  }
});

// Event Listner
// Change Event On scaleDeep
scale.addEventListener('change', () => {
  const scaleValue = scale.options[scale.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);

  if (scaleValueNum === 0) {
    amountHours[0].style.color = '#004643';
    scaleChange[0].style.background = '#004643';
  }

  if (scaleValueNum > 0) {
    amountHours[0].style.color = 'black';
    scaleChange[0].style.background = 'black';
  }

  if (scaleValueNumMinus < 0) {
    amountHours[0].style.color = 'red';
    scaleChange[0].style.background = 'red';
  }

  hChange[0].style.color = 'red';
  hChange[0].textContent = 'Hours Changed';

  if (scaleValue === '0') {
    amountHours[0].style.color = '#004643';
    scaleChange[0].style.background = '#004643';
    hChange[0].style.color = '#004643';
    hChange[0].textContent = 'Change Hours';
  }

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeDeep(hours) {
    // Deep
    deep.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Deep Hours
    deepHours.textContent = hours;
  }

  const vell = select.options[select.selectedIndex].value;

  function ifExpress(hour) {
    if (scaleValue === '-4') {
      changeDeep(hour - 4);
    }
    if (scaleValue === '-3.75') {
      changeDeep(hour - 3.75);
    }
    if (scaleValue === '-3.50') {
      changeDeep(hour - 3.5);
    }
    if (scaleValue === '-3.25') {
      changeDeep(hour - 3.25);
    }
    if (scaleValue === '-3') {
      changeDeep(hour - 3);
    }
    if (scaleValue === '-2.75') {
      changeDeep(hour - 2.75);
    }
    if (scaleValue === '-2.50') {
      changeDeep(hour - 2.5);
    }
    if (scaleValue === '-2.25') {
      changeDeep(hour - 2.25);
    }
    if (scaleValue === '-2') {
      changeDeep(hour - 2);
    }
    if (scaleValue === '-1.75') {
      changeDeep(hour - 1.75);
    }
    if (scaleValue === '-1.50') {
      changeDeep(hour - 1.5);
    }
    if (scaleValue === '-1.25') {
      changeDeep(hour - 1.25);
    }
    if (scaleValue === '-1') {
      changeDeep(hour - 1);
    }
    if (scaleValue === '-.75') {
      changeDeep(hour - 0.75);
    }
    if (scaleValue === '-.50') {
      changeDeep(hour - 0.5);
    }
    if (scaleValue === '-.25') {
      changeDeep(hour - 0.25);
    }
    if (scaleValue === '0') {
      changeDeep(hour);
    }
    if (scaleValue === '+.25') {
      changeDeep(hour + 0.25);
    }
    if (scaleValue === '+.50') {
      changeDeep(hour + 0.5);
    }
    if (scaleValue === '+.75') {
      changeDeep(hour + 0.75);
    }
    if (scaleValue === '+1') {
      changeDeep(hour + 1);
    }
    if (scaleValue === '+1.25') {
      changeDeep(hour + 1.25);
    }
    if (scaleValue === '+1.50') {
      changeDeep(hour + 1.5);
    }
    if (scaleValue === '+1.75') {
      changeDeep(hour + 1.75);
    }
    if (scaleValue === '+2') {
      changeDeep(hour + 2);
    }
    if (scaleValue === '+2.25') {
      changeDeep(hour + 2.25);
    }
    if (scaleValue === '+2.50') {
      changeDeep(hour + 2.5);
    }
    if (scaleValue === '+2.75') {
      changeDeep(hour + 2.75);
    }
    if (scaleValue === '+3') {
      changeDeep(hour + 3);
    }
    if (scaleValue === '+3.25') {
      changeDeep(hour + 3.25);
    }
    if (scaleValue === '+3.50') {
      changeDeep(hour + 3.5);
    }
    if (scaleValue === '+3.75') {
      changeDeep(hour + 3.75);
    }
    if (scaleValue === '+4') {
      changeDeep(hour + 4);
    }
  }

  if (vell === '1000-1500') {
    ifExpress(6.5);
  }
  if (vell === '1600-2000') {
    ifExpress(8);
  }
  if (vell === '2100-2200') {
    ifExpress(9.5);
  }
  if (vell === '2300-2500') {
    ifExpress(10.5);
  }
  if (vell === '2600-2800') {
    ifExpress(11.5);
  }
  if (vell === '2900-3100') {
    ifExpress(12.5);
  }
  if (vell === '3200-3400') {
    ifExpress(13.5);
  }
  if (vell === '3500-3700') {
    ifExpress(14.5);
  }
  if (vell === '3800-4000') {
    ifExpress(15.5);
  }
  if (vell === '4100-4300') {
    ifExpress(16.5);
  }
  if (vell === '4400-4600') {
    ifExpress(17.5);
  }
  if (vell === '4800-5000') {
    ifExpress(18.5);
  }
});

// Event Listner
// Input Event On Tax Rate
tax.addEventListener('input', () => {
  spinner.style.display = 'block';
  displayOptions.style.display = 'none';
  amountHours.forEach((item) => {
    item.style.color = 'green';
  });
  scaleChange.forEach((item) => {
    item.style.background = 'green';
  });
  hChange.forEach((item) => {
    item.style.color = 'green';
    item.textContent = 'Change Hours';
  });

  setTimeout(() => {
    spinner.style.display = 'none';
    displayOptions.style.display = 'grid';
  }, 1000);
  const cleanValue = select.options[select.selectedIndex].value;

  scale.value = scale.options[scale.selectedIndex].value;

  scaleGeneral.value = scaleGeneral.options[scaleGeneral.selectedIndex].value;

  scaleWeekly.value = scaleWeekly.options[scaleWeekly.selectedIndex].value;

  scaleBiWeekly.value =
    scaleBiWeekly.options[scaleBiWeekly.selectedIndex].value;

  scaleMonthly.value = scaleMonthly.options[scaleMonthly.selectedIndex].value;

  console.log(scaleWeekly.options[scaleWeekly.selectedIndex].value);

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeDeep(hours) {
    // Deep
    deep.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Deep Hours
    deepHours.textContent = hours;
  }

  function changeGeneral(hours) {
    // General
    general.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // General Hours
    generalHours.textContent = hours;
  }

  function changeWeekly(hours) {
    // Weekly
    weekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Weekly Hours
    weeklyHours.textContent = hours;
  }

  function changeBiWeekly(hours) {
    // Bi-Weekly
    biWeekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Bi-Weekly Hours
    biWeeklyHours.textContent = hours;
  }

  function changeMonthly(hours) {
    // Monthly
    monthly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Monthly Hours
    monthlyHours.textContent = hours;
  }
  const generalFloatPos = parseFloat(scaleChange[1].value);
  const generalFloatNeg = parseFloat(scaleChange[1].value.substring(1));

  const deepFloatPos = parseFloat(scaleChange[0].value);
  const deepFloatNeg = parseFloat(scaleChange[0].value.substring(1));

  const weeklyFloatPos = parseFloat(scaleChange[2].value);
  const weeklyFloatNeg = parseFloat(scaleChange[2].value.substring(1));

  const biWeeklyFloatPos = parseFloat(scaleChange[3].value);
  const biWeeklyFloatNeg = parseFloat(scaleChange[3].value.substring(1));

  const monthlyFloatPos = parseFloat(scaleChange[4].value);
  const monthlyFloatNeg = parseFloat(scaleChange[4].value.substring(1));

  function changeColorsPos(index) {
    amountHours[index].style.color = 'black';
    hChange[index].textContent = 'Hours Changed';
    hChange[index].style.color = 'red';
    scaleChange[index].style.background = 'black';
  }

  function changeColorsNeg(index) {
    amountHours[index].style.color = 'red';
    hChange[index].textContent = 'Hours Changed';
    hChange[index].style.color = 'red';
    scaleChange[index].style.background = 'red';
  }

  function changeColorsZero(index) {
    amountHours[index].style.color = 'green';
    scaleChange[index].style.background = 'green';
  }

  // *****************
  // 1000-1500 Sq Feet
  // *****************

  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(6.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(6.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(6.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(6.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(6.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(6.5);
      scale.value = 0;
    }
  }

  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
  }

  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(2.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(2.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(2.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(2.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(2.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(2.5);
      scaleBiWeekly.value = 0;
    }
  }

  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3);
      changeColorsZero(3);
    }
  }

  // False Biweekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
  }

  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '1000-1500') {
    console.log('has attribue of disabled');
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    console.log('has attribue of disabled');
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
  }

  // *************
  // 1600-2000 Sq Feet
  // *************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(8 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(8 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(8);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(8);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(8);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(8);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
  }

  // Bi-Weekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.25);
      changeColorsZero(3);
    }
  }

  // False Bi-Weekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      scaleBiWeekly.value = 0;
      changeBiWeekly(3.25);
    }
  }

  // Monthly
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      scaleMonthly.value = 0;
      changeMonthly(3.5);
    }
  }

  // **********************
  // 2100-2200 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(9.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(9.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(9.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(9.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(9.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(9.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.75);
      changeColorsZero(3);
    }
  }

  // False Bi-Weekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4);
      changeColorsZero(4);
    }
  }

  // False Monthy
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2300-2500 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(10.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(10.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(10.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(10.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(10.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(10.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2600-2800 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(11.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(11.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(11.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(11.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(11.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(11.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.25);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2900-3100 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(12.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(12.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(12.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(12.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(12.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(12.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.25 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.25 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.25);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.75 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.75 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.75);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3200-3400 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(13.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(13.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(13.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(13.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(13.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(13.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.75);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3500-3700 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(14.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(14.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(14.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(14.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(14.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(14.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3800-4000 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(15.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(15.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(15.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(15.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(15.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(15.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.25);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4100-4300 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(16.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(16.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(16.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(16.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(16.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(16.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.25 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.25 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.25);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.75 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.75 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.75);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4400-4600 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(17.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(17.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(17.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(17.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(17.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(17.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.75);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4800-5000 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(18.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(18.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(18.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(18.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(18.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(18.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9.5);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9.5);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9.5);
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(6 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(6 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(6);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
  }

  if (
    cleanValue === '1000-1500' &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(6.5);
    changeGeneral(4);
    changeWeekly(2.5);
    changeBiWeekly(3);
    changeMonthly(3.25);
    scaleValueToDefault();
    // scaleGeneral.value = scaleGeneral.options[scaleGeneral.selectedIndex].value;
  } else if (
    cleanValue === '1600-2000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(8);
    changeGeneral(4.5);
    changeWeekly(3);
    changeBiWeekly(3.25);
    changeMonthly(3.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '2100-2200' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(9.5);
    changeGeneral(5);
    changeWeekly(3.5);
    changeBiWeekly(3.75);
    changeMonthly(4);
    scaleValueToDefault();
  } else if (
    cleanValue === '2300-2500' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(10.5);
    changeGeneral(5.5);
    changeWeekly(3.75);
    changeBiWeekly(4);
    changeMonthly(4.25);
    scaleValueToDefault();
  } else if (
    cleanValue === '2600-2800' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(11.5);
    changeGeneral(6);
    changeWeekly(4);
    changeBiWeekly(4.25);
    changeMonthly(4.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '2900-3100' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(12.5);
    changeGeneral(6.5);
    changeWeekly(4.25);
    changeBiWeekly(4.5);
    changeMonthly(4.75);
    scaleValueToDefault();
  } else if (
    cleanValue === '3200-3400' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(13.5);
    changeGeneral(7);
    changeWeekly(4.5);
    changeBiWeekly(4.75);
    changeMonthly(5);
    scaleValueToDefault();
  } else if (
    cleanValue === '3500-3700' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(14.5);
    changeGeneral(7.5);
    changeWeekly(4.75);
    changeBiWeekly(5);
    changeMonthly(5.25);
    scaleValueToDefault();
  } else if (
    cleanValue === '3800-4000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(15.5);
    changeGeneral(8);
    changeWeekly(5);
    changeBiWeekly(5.25);
    changeMonthly(5.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '4100-4300' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(16.5);
    changeGeneral(8.5);
    changeWeekly(5.25);
    changeBiWeekly(5.5);
    changeMonthly(5.75);
    scaleValueToDefault();
  } else if (
    cleanValue === '4400-4600' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(17.5);
    changeGeneral(9);
    changeWeekly(5.5);
    changeBiWeekly(5.75);
    changeMonthly(6);
    scaleValueToDefault();
  } else if (
    cleanValue === '4800-5000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(18.5);
    changeGeneral(9.5);
    changeWeekly(5.75);
    changeBiWeekly(6);
    changeMonthly(6.25);
    scaleValueToDefault();
  }
});

// Event Listner
// Input Event On Hourly Rate
hourRate.addEventListener('input', () => {
  spinner.style.display = 'block';
  displayOptions.style.display = 'none';
  amountHours.forEach((item) => {
    item.style.color = 'green';
  });
  scaleChange.forEach((item) => {
    item.style.background = 'green';
  });
  hChange.forEach((item) => {
    item.style.color = 'green';
    item.textContent = 'Change Hours';
  });

  setTimeout(() => {
    spinner.style.display = 'none';
    displayOptions.style.display = 'grid';
  }, 1000);
  const cleanValue = select.options[select.selectedIndex].value;

  scale.value = scale.options[scale.selectedIndex].value;

  scaleGeneral.value = scaleGeneral.options[scaleGeneral.selectedIndex].value;

  scaleWeekly.value = scaleWeekly.options[scaleWeekly.selectedIndex].value;

  scaleBiWeekly.value =
    scaleBiWeekly.options[scaleBiWeekly.selectedIndex].value;

  scaleMonthly.value = scaleMonthly.options[scaleMonthly.selectedIndex].value;

  console.log(scaleWeekly.options[scaleWeekly.selectedIndex].value);

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeDeep(hours) {
    // Deep
    deep.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Deep Hours
    deepHours.textContent = hours;
  }

  function changeGeneral(hours) {
    // General
    general.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // General Hours
    generalHours.textContent = hours;
  }

  function changeWeekly(hours) {
    // Weekly
    weekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Weekly Hours
    weeklyHours.textContent = hours;
  }

  function changeBiWeekly(hours) {
    // Bi-Weekly
    biWeekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Bi-Weekly Hours
    biWeeklyHours.textContent = hours;
  }

  function changeMonthly(hours) {
    // Monthly
    monthly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Monthly Hours
    monthlyHours.textContent = hours;
  }
  const generalFloatPos = parseFloat(scaleChange[1].value);
  const generalFloatNeg = parseFloat(scaleChange[1].value.substring(1));

  const deepFloatPos = parseFloat(scaleChange[0].value);
  const deepFloatNeg = parseFloat(scaleChange[0].value.substring(1));

  const weeklyFloatPos = parseFloat(scaleChange[2].value);
  const weeklyFloatNeg = parseFloat(scaleChange[2].value.substring(1));

  const biWeeklyFloatPos = parseFloat(scaleChange[3].value);
  const biWeeklyFloatNeg = parseFloat(scaleChange[3].value.substring(1));

  const monthlyFloatPos = parseFloat(scaleChange[4].value);
  const monthlyFloatNeg = parseFloat(scaleChange[4].value.substring(1));

  function changeColorsPos(index) {
    amountHours[index].style.color = 'black';
    hChange[index].textContent = 'Hours Changed';
    hChange[index].style.color = 'red';
    scaleChange[index].style.background = 'black';
  }

  function changeColorsNeg(index) {
    amountHours[index].style.color = 'red';
    hChange[index].textContent = 'Hours Changed';
    hChange[index].style.color = 'red';
    scaleChange[index].style.background = 'red';
  }

  function changeColorsZero(index) {
    amountHours[index].style.color = 'green';
    scaleChange[index].style.background = 'green';
  }

  // *****************
  // 1000-1500 Sq Feet
  // *****************

  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(6.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(6.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(6.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(6.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(6.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(6.5);
      scale.value = 0;
    }
  }

  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
  }

  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(2.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(2.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(2.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(2.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(2.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(2.5);
      scaleBiWeekly.value = 0;
    }
  }

  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3);
      changeColorsZero(3);
    }
  }

  // False Biweekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
  }

  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '1000-1500') {
    console.log('has attribue of disabled');
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    console.log('has attribue of disabled');
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
  }

  // *************
  // 1600-2000 Sq Feet
  // *************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(8 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(8 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(8);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(8);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(8);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(8);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
  }

  // Bi-Weekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.25);
      changeColorsZero(3);
    }
  }

  // False Bi-Weekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      scaleBiWeekly.value = 0;
      changeBiWeekly(3.25);
    }
  }

  // Monthly
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      scaleMonthly.value = 0;
      changeMonthly(3.5);
    }
  }

  // **********************
  // 2100-2200 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(9.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(9.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(9.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(9.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(9.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(9.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.75);
      changeColorsZero(3);
    }
  }

  // False Bi-Weekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4);
      changeColorsZero(4);
    }
  }

  // False Monthy
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2300-2500 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(10.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(10.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(10.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(10.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(10.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(10.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2600-2800 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(11.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(11.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(11.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(11.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(11.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(11.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.25);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2900-3100 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(12.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(12.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(12.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(12.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(12.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(12.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.25 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.25 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.25);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.75 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.75 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.75);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3200-3400 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(13.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(13.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(13.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(13.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(13.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(13.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.75);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3500-3700 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(14.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(14.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(14.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(14.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(14.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(14.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3800-4000 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(15.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(15.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(15.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(15.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(15.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(15.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.25);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4100-4300 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(16.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(16.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(16.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(16.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(16.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(16.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.25 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.25 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.25);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.75 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.75 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.75);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4400-4600 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(17.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(17.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(17.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(17.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(17.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(17.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.75);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4800-5000 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(18.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(18.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(18.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(18.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(18.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(18.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9.5);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9.5);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9.5);
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(6 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(6 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(6);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
  }

  if (
    cleanValue === '1000-1500' &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(6.5);
    changeGeneral(4);
    changeWeekly(2.5);
    changeBiWeekly(3);
    changeMonthly(3.25);
    scaleValueToDefault();
    // scaleGeneral.value = scaleGeneral.options[scaleGeneral.selectedIndex].value;
  } else if (
    cleanValue === '1600-2000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(8);
    changeGeneral(4.5);
    changeWeekly(3);
    changeBiWeekly(3.25);
    changeMonthly(3.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '2100-2200' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(9.5);
    changeGeneral(5);
    changeWeekly(3.5);
    changeBiWeekly(3.75);
    changeMonthly(4);
    scaleValueToDefault();
  } else if (
    cleanValue === '2300-2500' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(10.5);
    changeGeneral(5.5);
    changeWeekly(3.75);
    changeBiWeekly(4);
    changeMonthly(4.25);
    scaleValueToDefault();
  } else if (
    cleanValue === '2600-2800' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(11.5);
    changeGeneral(6);
    changeWeekly(4);
    changeBiWeekly(4.25);
    changeMonthly(4.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '2900-3100' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(12.5);
    changeGeneral(6.5);
    changeWeekly(4.25);
    changeBiWeekly(4.5);
    changeMonthly(4.75);
    scaleValueToDefault();
  } else if (
    cleanValue === '3200-3400' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(13.5);
    changeGeneral(7);
    changeWeekly(4.5);
    changeBiWeekly(4.75);
    changeMonthly(5);
    scaleValueToDefault();
  } else if (
    cleanValue === '3500-3700' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(14.5);
    changeGeneral(7.5);
    changeWeekly(4.75);
    changeBiWeekly(5);
    changeMonthly(5.25);
    scaleValueToDefault();
  } else if (
    cleanValue === '3800-4000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(15.5);
    changeGeneral(8);
    changeWeekly(5);
    changeBiWeekly(5.25);
    changeMonthly(5.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '4100-4300' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(16.5);
    changeGeneral(8.5);
    changeWeekly(5.25);
    changeBiWeekly(5.5);
    changeMonthly(5.75);
    scaleValueToDefault();
  } else if (
    cleanValue === '4400-4600' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(17.5);
    changeGeneral(9);
    changeWeekly(5.5);
    changeBiWeekly(5.75);
    changeMonthly(6);
    scaleValueToDefault();
  } else if (
    cleanValue === '4800-5000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(18.5);
    changeGeneral(9.5);
    changeWeekly(5.75);
    changeBiWeekly(6);
    changeMonthly(6.25);
    scaleValueToDefault();
  }
});

// Event Listener
// Change Event On Square Footage
select.addEventListener('change', () => {
  spinner.style.display = 'block';
  displayOptions.style.display = 'none';
  amountHours.forEach((item) => {
    item.style.color = '#004643';
  });
  scaleChange.forEach((item) => {
    item.style.background = '#004643';
  });
  hChange.forEach((item) => {
    item.style.color = '#004643';
    item.textContent = 'Change Hours';
  });

  setTimeout(() => {
    spinner.style.display = 'none';
    displayOptions.style.display = 'grid';
  }, 1000);
  const cleanValue = select.options[select.selectedIndex].value;

  scale.value = scale.options[scale.selectedIndex].value;

  scaleGeneral.value = scaleGeneral.options[scaleGeneral.selectedIndex].value;

  scaleWeekly.value = scaleWeekly.options[scaleWeekly.selectedIndex].value;

  scaleBiWeekly.value =
    scaleBiWeekly.options[scaleBiWeekly.selectedIndex].value;

  scaleMonthly.value = scaleMonthly.options[scaleMonthly.selectedIndex].value;

  console.log(scaleWeekly.options[scaleWeekly.selectedIndex].value);

  const hoursSelect = document.getElementById('hours').value;
  const taxRate = document.getElementById('tax-rate').value;

  function changeDeep(hours) {
    // Deep
    deep.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Deep Hours
    deepHours.textContent = hours;
  }

  function changeGeneral(hours) {
    // General
    general.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // General Hours
    generalHours.textContent = hours;
  }

  function changeWeekly(hours) {
    // Weekly
    weekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Weekly Hours
    weeklyHours.textContent = hours;
  }

  function changeBiWeekly(hours) {
    // Bi-Weekly
    biWeekly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Bi-Weekly Hours
    biWeeklyHours.textContent = hours;
  }

  function changeMonthly(hours) {
    // Monthly
    monthly.textContent =
      hours * hoursSelect + percentage(hours * hoursSelect, taxRate);
    // Monthly Hours
    monthlyHours.textContent = hours;
  }
  const generalFloatPos = parseFloat(scaleChange[1].value);
  const generalFloatNeg = parseFloat(scaleChange[1].value.substring(1));

  const deepFloatPos = parseFloat(scaleChange[0].value);
  const deepFloatNeg = parseFloat(scaleChange[0].value.substring(1));

  const weeklyFloatPos = parseFloat(scaleChange[2].value);
  const weeklyFloatNeg = parseFloat(scaleChange[2].value.substring(1));

  const biWeeklyFloatPos = parseFloat(scaleChange[3].value);
  const biWeeklyFloatNeg = parseFloat(scaleChange[3].value.substring(1));

  const monthlyFloatPos = parseFloat(scaleChange[4].value);
  const monthlyFloatNeg = parseFloat(scaleChange[4].value.substring(1));

  function changeColorsPos(index) {
    amountHours[index].style.color = 'black';
    hChange[index].textContent = 'Hours Changed';
    hChange[index].style.color = 'red';
    scaleChange[index].style.background = 'black';
  }

  function changeColorsNeg(index) {
    amountHours[index].style.color = 'red';
    hChange[index].textContent = 'Hours Changed';
    hChange[index].style.color = 'red';
    scaleChange[index].style.background = 'red';
  }

  function changeColorsZero(index) {
    amountHours[index].style.color = 'green';
    scaleChange[index].style.background = 'green';
  }

  // *****************
  // 1000-1500 Sq Feet
  // *****************

  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(6.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(6.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(6.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(6.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(6.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(6.5);
      scale.value = 0;
    }
  }

  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4);
      scaleGeneral.value = 0;
    }
  }

  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(2.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(2.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(2.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(2.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(2.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(2.5);
      scaleBiWeekly.value = 0;
    }
  }

  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '1000-1500') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3);
      changeColorsZero(3);
    }
  }

  // False Biweekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3);
      scaleBiWeekly.value = 0;
    }
  }

  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '1000-1500') {
    console.log('has attribue of disabled');
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '1000-1500'
  ) {
    console.log('has attribue of disabled');
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.25);
      scaleMonthly.value = 0;
    }
  }

  // *************
  // 1600-2000 Sq Feet
  // *************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(8 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(8 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(8);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(8);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(8);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(8);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(4.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3);
      scaleWeekly.value = 0;
    }
  }

  // Bi-Weekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.25);
      changeColorsZero(3);
    }
  }

  // False Bi-Weekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      scaleBiWeekly.value = 0;
      changeBiWeekly(3.25);
    }
  }

  // Monthly
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '1600-2000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(3.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '1600-2000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(3.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(3.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      scaleMonthly.value = 0;
      changeMonthly(3.5);
    }
  }

  // **********************
  // 2100-2200 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(9.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(9.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(9.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(9.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(9.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(9.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.75);
      changeColorsZero(3);
    }
  }

  // False Bi-Weekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(3.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2100-2200') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4);
      changeColorsZero(4);
    }
  }

  // False Monthy
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2100-2200'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2300-2500 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(10.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(10.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(10.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(10.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(10.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(10.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(5.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(3.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2300-2500') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2300-2500'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.25);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2600-2800 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(11.5 + deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(11.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(11.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(11.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(11.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(11.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.25);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.25);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2600-2800') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2600-2800'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 2900-3100 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(12.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(12.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(12.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(12.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(12.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(12.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(6.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.25 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.25 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.25);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.25);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '2900-3100') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.75 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.75 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.75);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '2900-3100'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(4.75);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3200-3400 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(13.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(13.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(13.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(13.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(13.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(13.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.75);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(4.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3200-3400') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3200-3400'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3500-3700 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(14.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(14.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(14.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(14.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(14.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(14.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(7.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(4.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3500-3700') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3500-3700'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.25);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 3800-4000 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(15.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(15.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(15.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(15.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(15.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(15.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.25 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.25 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.25);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.25);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '3800-4000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.5 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.5 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.5);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '3800-4000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.5);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4100-4300 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(16.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(16.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(16.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(16.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(16.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(16.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(8.5);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.25 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.25 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.25);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.25);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.5 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.5 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.5);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.5);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4100-4300') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.75 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.75 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.75);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4100-4300'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(5.75);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4400-4600 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(17.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(17.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(17.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(17.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(17.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(17.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9);
      scaleGeneral.value = 0;
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.5 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.5 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.5);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.5);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.75 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.75 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.75);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(5.75);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4400-4600') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4400-4600'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6);
      scaleMonthly.value = 0;
    }
  }

  // **********************
  // 4800-5000 Square Feet
  // **********************
  // Deep
  if (scaleChange[0].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(18.5 + deepFloatPos);
      console.log(deepFloatPos);
      changeColorsPos(0);
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(18.5 - deepFloatNeg);
      changeColorsNeg(0);
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(18.5);
      changeColorsZero(0);
    }
  }

  // False Deep
  if (
    scaleChange[0].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(deepFloatPos) === 1) {
      changeDeep(18.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === -1) {
      changeDeep(18.5);
      scale.value = 0;
    }
    if (Math.sign(deepFloatPos) === 0) {
      changeDeep(18.5);
      scale.value = 0;
    }
  }

  // General
  if (scaleChange[1].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9.5 + generalFloatPos);
      changeColorsPos(1);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9.5 - generalFloatNeg);
      changeColorsNeg(1);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9.5);
      changeColorsZero(1);
    }
  }

  // False General
  if (
    scaleChange[1].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(generalFloatPos) === 1) {
      changeGeneral(9.5);
    }
    if (Math.sign(generalFloatPos) === -1) {
      changeGeneral(9.5);
    }
    if (Math.sign(generalFloatPos) === 0) {
      changeGeneral(9.5);
    }
  }

  // Weekly
  if (scaleChange[2].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.75 + weeklyFloatPos);
      changeColorsPos(2);
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.75 - weeklyFloatNeg);
      changeColorsNeg(2);
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.75);
      changeColorsZero(2);
    }
  }

  // False Weekly
  if (
    scaleChange[2].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(weeklyFloatPos) === 1) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === -1) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
    if (Math.sign(weeklyFloatPos) === 0) {
      changeWeekly(5.75);
      scaleWeekly.value = 0;
    }
  }

  // BiWeekly
  if (scaleChange[3].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(6 + biWeeklyFloatPos);
      changeColorsPos(3);
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(6 - biWeeklyFloatNeg);
      changeColorsNeg(3);
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(6);
      changeColorsZero(3);
    }
  }

  // False BiWeekly
  if (
    scaleChange[3].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(biWeeklyFloatPos) === 1) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === -1) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
    if (Math.sign(biWeeklyFloatPos) === 0) {
      changeBiWeekly(6);
      scaleBiWeekly.value = 0;
    }
  }

  // Monthy
  if (scaleChange[4].hasAttribute('disabled') && cleanValue === '4800-5000') {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6.25 + monthlyFloatPos);
      changeColorsPos(4);
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6.25 - monthlyFloatNeg);
      changeColorsNeg(4);
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6.25);
      changeColorsZero(4);
    }
  }

  // False Monthly
  if (
    scaleChange[4].hasAttribute('disabled') === false &&
    cleanValue === '4800-5000'
  ) {
    if (Math.sign(monthlyFloatPos) === 1) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === -1) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
    if (Math.sign(monthlyFloatPos) === 0) {
      changeMonthly(6.25);
      scaleMonthly.value = 0;
    }
  }

  if (
    cleanValue === '1000-1500' &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(6.5);
    changeGeneral(4);
    changeWeekly(2.5);
    changeBiWeekly(3);
    changeMonthly(3.25);
    scaleValueToDefault();
    // scaleGeneral.value = scaleGeneral.options[scaleGeneral.selectedIndex].value;
  } else if (
    cleanValue === '1600-2000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(8);
    changeGeneral(4.5);
    changeWeekly(3);
    changeBiWeekly(3.25);
    changeMonthly(3.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '2100-2200' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(9.5);
    changeGeneral(5);
    changeWeekly(3.5);
    changeBiWeekly(3.75);
    changeMonthly(4);
    scaleValueToDefault();
  } else if (
    cleanValue === '2300-2500' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(10.5);
    changeGeneral(5.5);
    changeWeekly(3.75);
    changeBiWeekly(4);
    changeMonthly(4.25);
    scaleValueToDefault();
  } else if (
    cleanValue === '2600-2800' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(11.5);
    changeGeneral(6);
    changeWeekly(4);
    changeBiWeekly(4.25);
    changeMonthly(4.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '2900-3100' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(12.5);
    changeGeneral(6.5);
    changeWeekly(4.25);
    changeBiWeekly(4.5);
    changeMonthly(4.75);
    scaleValueToDefault();
  } else if (
    cleanValue === '3200-3400' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(13.5);
    changeGeneral(7);
    changeWeekly(4.5);
    changeBiWeekly(4.75);
    changeMonthly(5);
    scaleValueToDefault();
  } else if (
    cleanValue === '3500-3700' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(14.5);
    changeGeneral(7.5);
    changeWeekly(4.75);
    changeBiWeekly(5);
    changeMonthly(5.25);
    scaleValueToDefault();
  } else if (
    cleanValue === '3800-4000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(15.5);
    changeGeneral(8);
    changeWeekly(5);
    changeBiWeekly(5.25);
    changeMonthly(5.5);
    scaleValueToDefault();
  } else if (
    cleanValue === '4100-4300' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(16.5);
    changeGeneral(8.5);
    changeWeekly(5.25);
    changeBiWeekly(5.5);
    changeMonthly(5.75);
    scaleValueToDefault();
  } else if (
    cleanValue === '4400-4600' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(17.5);
    changeGeneral(9);
    changeWeekly(5.5);
    changeBiWeekly(5.75);
    changeMonthly(6);
    scaleValueToDefault();
  } else if (
    cleanValue === '4800-5000' &&
    scaleChange[0].hasAttribute('disabled') === false &&
    scaleChange[1].hasAttribute('disabled') === false &&
    scaleChange[2].hasAttribute('disabled') === false &&
    scaleChange[3].hasAttribute('disabled') === false &&
    scaleChange[4].hasAttribute('disabled') === false
  ) {
    changeDeep(18.5);
    changeGeneral(9.5);
    changeWeekly(5.75);
    changeBiWeekly(6);
    changeMonthly(6.25);
    scaleValueToDefault();
  }
});

function scaleValueToDefault() {
  scale.value = 0;
  scaleGeneral.value = 0;
  scaleWeekly.value = 0;
  scaleBiWeekly.value = 0;
  scaleMonthly.value = 0;
}

function percentage(num, per) {
  return (num / 100) * per;
}
