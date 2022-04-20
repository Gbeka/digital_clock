
window.addEventListener('load',calculateTime)
function calculateTime(){


const date=new Date();

let hour=date.getHours();
let minute=date.getMinutes();
let second=date.getSeconds();
const ampm=hour>=12? "PM" : "AM";
const dayNumber=date.getDay();
const days=['星期天','星期一','星期二', '星期三', '星期四', '星期五', '星期六'];

hour=hour%12;
hour = hour < 10 ? "0" + hour:hour;
minute= minute < 10 ? '0' + minute : minute;
second=second<10? "0"+second:second;


document.getElementById("day").innerHTML=days[dayNumber];
document.getElementById("hour").innerHTML=hour;
document.getElementById("minute").innerHTML=minute;
document.getElementById("second").innerHTML=second;
document.getElementById("ampm").innerHTML=ampm;

setTimeout(calculateTime, 200);
}