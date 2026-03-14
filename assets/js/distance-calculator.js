const distanceInput = document.getElementById('distance');
const speedInput = document.getElementById('speed');
const unitInput = document.getElementById('unit');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const resultValue = document.getElementById('resultValue');
const resultSub = document.getElementById('resultSub');

function calculateTravelTime() {
  const distance = Number(distanceInput.value);
  const speed = Number(speedInput.value);

  if (!distance || !speed || distance <= 0 || speed <= 0) {
    result.hidden = false;
    resultValue.textContent = 'Enter valid numbers';
    resultSub.textContent = 'Distance and speed must both be greater than 0.';
    return;
  }

  const totalHours = distance / speed;
  const totalMinutes = Math.round(totalHours * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  result.hidden = false;
  resultValue.textContent = `${hours}h ${minutes}m`;
  resultSub.textContent = `${totalHours.toFixed(2)} total hours`;
}

function resetCalculator() {
  distanceInput.value = '';
  speedInput.value = '';
  unitInput.value = 'kmh';
  result.hidden = true;
}

calculateBtn.addEventListener('click', calculateTravelTime);
resetBtn.addEventListener('click', resetCalculator);
