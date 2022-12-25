import dayjs from 'dayjs';

const promotionDate = dayjs('2022-12-28');

const day = document.querySelector('.promotion__date-time.day');
const hours = document.querySelector('.promotion__date-time.hours');
const minutes = document.querySelector('.promotion__date-time.minutes');

const startTimer = () => {
  calculateTime();

  setInterval(calculateTime, 1000);
};

const calculateTime = () => {
  const now = dayjs();

  const dayDiff = promotionDate.diff(now, 'days');
  const hoursDiff = promotionDate.diff(now, 'hours');
  const minutesDiff = promotionDate.diff(now, 'minutes');

  day.innerHTML = String(dayDiff).padStart(2, '0');
  hours.innerHTML = String(hoursDiff - dayDiff * 24).padStart(2, '0');
  minutes.innerHTML = String(minutesDiff + 1 - hoursDiff * 60).padStart(2, '0');
};

document.addEventListener('DOMContentLoaded', startTimer);
