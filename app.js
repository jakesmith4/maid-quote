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

// Event Listner
// Change Event On scaleMonthly
scaleMonthly.addEventListener('change', () => {
  const scaleValue = scaleMonthly.options[scaleMonthly.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);
  console.log(scaleValueNumMinus);

  if (scaleValueNum === 0) {
    amountHours[4].style.color = 'green';
    scaleChange[4].style.background = 'green';
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
    amountHours[4].style.color = 'green';
    scaleChange[4].style.background = 'green';
    hChange[4].style.color = 'green';
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
  console.log(scaleValueNumMinus);

  if (scaleValueNum === 0) {
    amountHours[3].style.color = 'green';
    scaleChange[3].style.background = 'green';
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
    amountHours[3].style.color = 'green';
    scaleChange[3].style.background = 'green';
    hChange[3].style.color = 'green';
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
    amountHours[2].style.color = 'green';
    scaleChange[2].style.background = 'green';
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
    amountHours[2].style.color = 'green';
    scaleChange[2].style.background = 'green';
    hChange[2].style.color = 'green';
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
  console.log(scaleValueNumMinus);

  if (scaleValueNum === 0) {
    amountHours[1].style.color = 'green';
    scaleChange[1].style.background = 'green';
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
    amountHours[1].style.color = 'green';
    scaleChange[1].style.background = 'green';
    hChange[1].style.color = 'green';
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
  }

  if (vell === '1000-1500') {
    ifExpress(4);
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
// Change Event On Scale
scale.addEventListener('change', () => {
  const scaleValue = scale.options[scale.selectedIndex].value;

  const scaleValueNum = parseFloat(scaleValue.substring(1));
  const scaleValueNumMinus = parseFloat(scaleValue);
  console.log(scaleValueNumMinus);

  if (scaleValueNum === 0) {
    amountHours[0].style.color = 'green';
    scaleChange[0].style.background = 'green';
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
    amountHours[0].style.color = 'green';
    scaleChange[0].style.background = 'green';
    hChange[0].style.color = 'green';
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
  scale.value = scaleOption[4];
  scaleGeneral.value = scaleOption[4];
  scaleWeekly.value = scaleOption[4];
  scaleBiWeekly.value = scaleOption[4];
  scaleMonthly.value = scaleOption[4];
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

  if (cleanValue === '1000-1500') {
    changeDeep(6.5);
    changeGeneral(4);
    changeWeekly(2.5);
    changeBiWeekly(3);
    changeMonthly(3.25);
  } else if (cleanValue === '1600-2000') {
    changeDeep(8);
    changeGeneral(4.5);
    changeWeekly(3);
    changeBiWeekly(3.25);
    changeMonthly(3.5);
  } else if (cleanValue === '2100-2200') {
    changeDeep(9.5);
    changeGeneral(5);
    changeWeekly(3.5);
    changeBiWeekly(3.75);
    changeMonthly(4);
  } else if (cleanValue === '2300-2500') {
    changeDeep(10.5);
    changeGeneral(5.5);
    changeWeekly(3.75);
    changeBiWeekly(4);
    changeMonthly(4.25);
  } else if (cleanValue === '2600-2800') {
    changeDeep(11.5);
    changeGeneral(6);
    changeWeekly(4);
    changeBiWeekly(4.25);
    changeMonthly(4.5);
  } else if (cleanValue === '2900-3100') {
    changeDeep(12.5);
    changeGeneral(6.5);
    changeWeekly(4.25);
    changeBiWeekly(4.5);
    changeMonthly(4.75);
  } else if (cleanValue === '3200-3400') {
    changeDeep(13.5);
    changeGeneral(7);
    changeWeekly(4.5);
    changeBiWeekly(4.75);
    changeMonthly(5);
  } else if (cleanValue === '3500-3700') {
    changeDeep(14.5);
    changeGeneral(7.5);
    changeWeekly(4.75);
    changeBiWeekly(5);
    changeMonthly(5.25);
  } else if (cleanValue === '3800-4000') {
    changeDeep(15.5);
    changeGeneral(8);
    changeWeekly(5);
    changeBiWeekly(5.25);
    changeMonthly(5.5);
  } else if (cleanValue === '4100-4300') {
    changeDeep(16.5);
    changeGeneral(8.5);
    changeWeekly(5.25);
    changeBiWeekly(5.5);
    changeMonthly(5.75);
  } else if (cleanValue === '4400-4600') {
    changeDeep(17.5);
    changeGeneral(9);
    changeWeekly(5.5);
    changeBiWeekly(5.75);
    changeMonthly(6);
  } else if (cleanValue === '4800-5000') {
    changeDeep(18.5);
    changeGeneral(9.5);
    changeWeekly(5.75);
    changeBiWeekly(6);
    changeMonthly(6.25);
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
  scale.value = scaleOption[4];
  scaleGeneral.value = scaleOption[4];
  scaleWeekly.value = scaleOption[4];
  scaleBiWeekly.value = scaleOption[4];
  scaleMonthly.value = scaleOption[4];
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

  if (cleanValue === '1000-1500') {
    changeDeep(6.5);
    changeGeneral(4);
    changeWeekly(2.5);
    changeBiWeekly(3);
    changeMonthly(3.25);
  } else if (cleanValue === '1600-2000') {
    changeDeep(8);
    changeGeneral(4.5);
    changeWeekly(3);
    changeBiWeekly(3.25);
    changeMonthly(3.5);
  } else if (cleanValue === '2100-2200') {
    changeDeep(9.5);
    changeGeneral(5);
    changeWeekly(3.5);
    changeBiWeekly(3.75);
    changeMonthly(4);
  } else if (cleanValue === '2300-2500') {
    changeDeep(10.5);
    changeGeneral(5.5);
    changeWeekly(3.75);
    changeBiWeekly(4);
    changeMonthly(4.25);
  } else if (cleanValue === '2600-2800') {
    changeDeep(11.5);
    changeGeneral(6);
    changeWeekly(4);
    changeBiWeekly(4.25);
    changeMonthly(4.5);
  } else if (cleanValue === '2900-3100') {
    changeDeep(12.5);
    changeGeneral(6.5);
    changeWeekly(4.25);
    changeBiWeekly(4.5);
    changeMonthly(4.75);
  } else if (cleanValue === '3200-3400') {
    changeDeep(13.5);
    changeGeneral(7);
    changeWeekly(4.5);
    changeBiWeekly(4.75);
    changeMonthly(5);
  } else if (cleanValue === '3500-3700') {
    changeDeep(14.5);
    changeGeneral(7.5);
    changeWeekly(4.75);
    changeBiWeekly(5);
    changeMonthly(5.25);
  } else if (cleanValue === '3800-4000') {
    changeDeep(15.5);
    changeGeneral(8);
    changeWeekly(5);
    changeBiWeekly(5.25);
    changeMonthly(5.5);
  } else if (cleanValue === '4100-4300') {
    changeDeep(16.5);
    changeGeneral(8.5);
    changeWeekly(5.25);
    changeBiWeekly(5.5);
    changeMonthly(5.75);
  } else if (cleanValue === '4400-4600') {
    changeDeep(17.5);
    changeGeneral(9);
    changeWeekly(5.5);
    changeBiWeekly(5.75);
    changeMonthly(6);
  } else if (cleanValue === '4800-5000') {
    changeDeep(18.5);
    changeGeneral(9.5);
    changeWeekly(5.75);
    changeBiWeekly(6);
    changeMonthly(6.25);
  }
});

// Event Listener
// Change Event On Square Footage
select.addEventListener('change', () => {
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
  scale.value = scaleOption[4];
  scaleGeneral.value = scaleOption[4];
  scaleWeekly.value = scaleOption[4];
  scaleBiWeekly.value = scaleOption[4];
  scaleMonthly.value = scaleOption[4];
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

  if (cleanValue === '1000-1500') {
    changeDeep(6.5);
    changeGeneral(4);
    changeWeekly(2.5);
    changeBiWeekly(3);
    changeMonthly(3.25);
  } else if (cleanValue === '1600-2000') {
    changeDeep(8);
    changeGeneral(4.5);
    changeWeekly(3);
    changeBiWeekly(3.25);
    changeMonthly(3.5);
  } else if (cleanValue === '2100-2200') {
    changeDeep(9.5);
    changeGeneral(5);
    changeWeekly(3.5);
    changeBiWeekly(3.75);
    changeMonthly(4);
  } else if (cleanValue === '2300-2500') {
    changeDeep(10.5);
    changeGeneral(5.5);
    changeWeekly(3.75);
    changeBiWeekly(4);
    changeMonthly(4.25);
  } else if (cleanValue === '2600-2800') {
    changeDeep(11.5);
    changeGeneral(6);
    changeWeekly(4);
    changeBiWeekly(4.25);
    changeMonthly(4.5);
  } else if (cleanValue === '2900-3100') {
    changeDeep(12.5);
    changeGeneral(6.5);
    changeWeekly(4.25);
    changeBiWeekly(4.5);
    changeMonthly(4.75);
  } else if (cleanValue === '3200-3400') {
    changeDeep(13.5);
    changeGeneral(7);
    changeWeekly(4.5);
    changeBiWeekly(4.75);
    changeMonthly(5);
  } else if (cleanValue === '3500-3700') {
    changeDeep(14.5);
    changeGeneral(7.5);
    changeWeekly(4.75);
    changeBiWeekly(5);
    changeMonthly(5.25);
  } else if (cleanValue === '3800-4000') {
    changeDeep(15.5);
    changeGeneral(8);
    changeWeekly(5);
    changeBiWeekly(5.25);
    changeMonthly(5.5);
  } else if (cleanValue === '4100-4300') {
    changeDeep(16.5);
    changeGeneral(8.5);
    changeWeekly(5.25);
    changeBiWeekly(5.5);
    changeMonthly(5.75);
  } else if (cleanValue === '4400-4600') {
    changeDeep(17.5);
    changeGeneral(9);
    changeWeekly(5.5);
    changeBiWeekly(5.75);
    changeMonthly(6);
  } else if (cleanValue === '4800-5000') {
    changeDeep(18.5);
    changeGeneral(9.5);
    changeWeekly(5.75);
    changeBiWeekly(6);
    changeMonthly(6.25);
  }
});

function percentage(num, per) {
  return (num / 100) * per;
}
