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

// let dayW = dayName[date.getDay()];
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();
