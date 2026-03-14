const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const resultValue = document.getElementById('resultValue');
const resultSub = document.getElementById('resultSub');

function timeToMinutes(value) {
  const [hours, minutes] = value.split(':').map(Number);
  return (hours * 60) + minutes;
}

function calculateDuration() {
  const start = startTimeInput.value;
  const end = endTimeInput.value;

  if (!start || !end) {
    result.hidden = false;
    resultValue.textContent = 'Enter both times';
    resultSub.textContent = 'Please choose a start time and an end time.';
    return;
  }

  let startMinutes = timeToMinutes(start);
  let endMinutes = timeToMinutes(end);

  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60;
  }

  const totalMinutes = endMinutes - startMinutes;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  result.hidden = false;
  resultValue.textContent = `${hours}h ${minutes}m`;
  resultSub.textContent = `${totalMinutes} total minutes`;
}

function resetCalculator() {
  startTimeInput.value = '';
  endTimeInput.value = '';
  result.hidden = true;
}

calculateBtn.addEventListener('click', calculateDuration);
resetBtn.addEventListener('click', resetCalculator);
