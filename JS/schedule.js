let schedule = document.querySelector("button#schedule_button");
schedule.addEventListener("click", openForm);

function openForm() {
  let form = document.querySelector("div.form_schedule");
  form.style.display = "flex";
  let button = document.querySelector("div.buttons");
  button.style.display = "none";
}
// desenvolver o calendario
const dayName = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
const date = new Date();

// Month in Calendar
let monthOnCalendar = document.querySelector("h1#month");
let monthD = monthName[date.getMonth()];
monthOnCalendar.innerHTML = "<strong>" + monthD + "</strong>";

// Day in Calendar
let currMonth = date.getMonth();
let currYear = date.getFullYear();
let lastDay = new Date(currYear, currMonth + 1, 0).getDate();
let firstDate = new Date(currYear, currMonth, 0).getDate();
let firstDay = new Date(currYear, currMonth, 0).getDay();
let daysCalendar = document.getElementById("daysMonth");

var aryMonth = [];
function arryMonth(dayNumber, dayWeek, lastDay) {
  var din = dayWeek;
  for (let i = 0; i <= dayWeek; i++) {
    let arryDay = dayNumber - din;
    din -= 1;
    aryMonth.push(arryDay);
  }
  for (let i = 1; i <= lastDay; i++) {
    let arryDay = i;
    aryMonth.push(arryDay);
  }
  // for (let i = 1; i <= dayNumber; i++) {
  //   let arryDay = i;
  //   aryMonth.push(arryDay);
  // } // adicionar dias dos mes seguinte
}
arryMonth(firstDate, firstDay, lastDay);

let list = "";
function renderCalendar(arry, lastday, dayweek) {
  let num = lastday + dayweek;
  for (let i = 0; i <= num; i++) {
    list += `<li id="cDay${i}">${arry[i]}</li>`;
  }
  daysCalendar.innerHTML = list;
}
function colorLasMonth(dayweek) {
  for (let i = 0; i >= dayweek; i++) {
    let render = document.querySelector(`#cDay${i}`);
    render.style.color = "#999"; //faltar arrumar cor pra mais transparente
  }
}
renderCalendar(aryMonth, lastDay, firstDay);
colorLasMonth(firstDay);
