// apos juntar todos os json em uma unica função recebendo a variavel data operation
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
// Patients names on Select
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
let list = ""; // executar na terceira posicao
function renderCalendar(arry, lastday, dayweek, count) {
  let num = lastday + dayweek;
  for (let i = 0; i <= num; i++) {
    let aCount = count[i] || 0;
    list += `<li id="cDay${i}">${arry[i]}<span class="nAppoint">${aCount}</span></li>`;
  }
  daysCalendar.innerHTML = list;
}
async function conDB() {
  var data = { operation: "dailySchedule" };
  const response = await fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  return jsonData;
}
// Each day Schedule
async function renderSchedule(data) {
  // separar o mini schedule do json em funcoes diferentes json numa variavel e o mini schedule na primeira posicao da function

  var llist = document.querySelector("ul.llist");
  llist.innerHTML = "";

  // Date Format
  for (let i = 0; i < data.length; i++) {
    let nDate = new Date(data[i].date);
    let nDay = nDate.getDate();
    let nMonth = nDate.getMonth();

    if (nDay < "10") {
      if (nMonth < "10") {
        var finalDate = `0${nDay}/0${nMonth}`;
      } else {
        var finalDate = `0${nDay}/${nMonth}`;
      }
    } else {
      if (nMonth < "10") {
        var finalDate = `${nDay}/0${nMonth}`;
      } else {
        var finalDate = `${nDay}/${nMonth}`;
      }
    }
    // Hour Format
    let time = data[i].hour.split(":");
    var finalHour = `${time[0]}:${time[1]}`;
    // Name Format
    let name = data[i].name.split(" ");
    var finalName = `${name[0]} ${name[1]}`;

    llist.innerHTML += `<li>${finalDate} - ${finalHour} - ${finalName}</li>`;
  }
}
async function appointCount(data) {
  let appointCount = {};

  for (let i = 0; i < data.length; i++) {
    let nDate = new Date(data[i].date);
    let date = nDate.getDate();
    if (appointCount[date]) {
      appointCount[date]++;
    } else {
      appointCount[date] = 1;
    }
  }
  console.log(appointCount);
  return appointCount;
}
//a partir daqui começa a nova function

async function renderPage(firstDate, firstDay, lastDay) {
  let data = await conDB();
  arryMonth(firstDate, firstDay, lastDay);
  let count = appointCount(data);
  renderSchedule(data);
  renderCalendar(aryMonth, lastDay, firstDay, count);
}

document.addEventListener(
  "DOMContentLoaded",
  renderPage(firstDate, firstDay, lastDay)
);
