import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    btnStart: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    DataSeconds: document.querySelector('[data-seconds]'),
};
let selectedDate = null;
let timerId = null;
refs.btnStart.disabled = true;

    
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        console.log(selectedDates[0]);
        selectedDate = selectedDates[0].getTime();
        checkDate(selectedDates);
    },
}; 
flatpickr("input#datetime-picker", options);

refs.btnStart.addEventListener('click', startTimer);

function startTimer() {
    timerId = setInterval(updateClockFace, 1000);
    refs.btnStart.disabled = true;
    
};


function updateClockFace() {
    const currentTime = Date.now();
    const deltaTime = selectedDate - currentTime;
    const endtime = convertMs(deltaTime);
    
    if (deltaTime <= 1000) {
        clearInterval(timerId);
        console.log('time is over');
    };

    refs.dataDays.innerHTML = pad(endtime.days);
    refs.dataHours.innerHTML = pad(endtime.hours);
    refs.dataMinutes.innerHTML = pad(endtime.minutes);
    refs.DataSeconds.innerHTML = pad(endtime.seconds);
};

function checkDate(selectedDates) {
    const currentDate = Date.now();

    if (selectedDate > currentDate ) {
        refs.btnStart.disabled = false;
        
    } else {
        Notify.failure("Please choose a date in the future");
        refs.btnStart.disabled = true;
    }
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}