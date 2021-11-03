// Global Vars
const select = document.getElementById('options');
const spinner = document.querySelector('.loading-spinner');
const displayOptions = document.querySelector('.display-options');
const amount = document.querySelector('.amount');
const hourRate = document.getElementById('hours');
const tax = document.getElementById('tax-rate');

// Event Listner
// Input Event
hourRate.addEventListener('input', (e) => {
  spinner.style.display = 'block';
  displayOptions.style.display = 'none';

  setTimeout(() => {
    spinner.style.display = 'none';
    displayOptions.style.display = 'grid';
  }, 1000);
  const cleanValue = select.options[select.selectedIndex].value;
  console.log(cleanValue);
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
// Change Event
select.addEventListener('change', () => {
  spinner.style.display = 'block';
  displayOptions.style.display = 'none';

  setTimeout(() => {
    spinner.style.display = 'none';
    displayOptions.style.display = 'grid';
  }, 1000);
  const cleanValue = select.options[select.selectedIndex].value;
  console.log(cleanValue);
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
