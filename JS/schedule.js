let schedule = document.querySelector("button#schedule_button");
schedule.addEventListener("click", openForm);

function openForm() {
  renderSelect();
  let form = document.querySelector("div.form_schedule");
  form.style.display = "flex";
  let button = document.querySelector("div.buttons");
  button.style.display = "none";
}
// Buttons
let button = document.querySelector("div.buttons");
button.addEventListener("click", clickButton);

function clickButton() {
  let buttons = document.querySelectorAll(".init_button");
  buttons.forEach(function (openB) {
    if (openB.style.display == "none" || openB.style.display == "") {
      openB.style.display = "flex";
      openB.style.height = "50px";
    } else {
      openB.style.display = "none";
    }
  });
}
// Calendar
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

renderCalendar(aryMonth, lastDay, firstDay);

// Each day Schedule
async function renderSchedule() {
  var data = { operation: "dailySchedule" };
  const response = await fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  console.log(aryMonth);
  aryMonth.forEach((element) => {
    var day = document.querySelector("li#cDay" + element + "");
  });
}
document.addEventListener("DOMContentLoaded", renderSchedule);
// Patients names on Select
const select = document.querySelector("select#patient_name");
async function renderSelect() {
  data = { operation: "select" };
  const response = await fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();

  var list = document.querySelector("select#patient_name");
  list.innerHTML = "";
  for (i = 0; i < jsonData.length; i++) {
    list.innerHTML += `<option value="${jsonData[i].id}">${jsonData[i].name}</option>`;
  }
}

// New Schedule
async function newSchedule() {
  var data = {
    id: document.querySelector("select#patient_name").value,
    date: document.querySelector("input#date").value,
    hour: document.querySelector("input#time").value,
    operation: "newSchedule",
  };
  const response = await fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
