const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
const weekDay = document.querySelector(".week-days");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const date = new Date();
const thisWeekDay = weekdays[date.getDay()];
const thisYear = date.getFullYear();
const thisMonth = date.getMonth();
const thisDay = date.getDate();

weekDay.innerHTML = thisWeekDay;
day.innerHTML = thisDay;
month.innerHTML = months[thisMonth];
year.innerHTML = thisYear;

function formatTime(time){
    if(time < 10) return time = `0${time}`;
    return time;
}
function currentTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    hour.innerHTML = formatTime(hours);
    minute.innerHTML = formatTime(minutes);
    second.innerHTML = formatTime(seconds);
}
setInterval(currentTime,1000);


