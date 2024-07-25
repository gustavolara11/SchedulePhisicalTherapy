document.addEventListener("DOMContentLoaded", displayTable);

// Open Register Form
let opencad = document.querySelector("button#cad_button");
opencad.addEventListener("click", openCad);
function openCad() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "none";

  let openForm = document.querySelector("div.new_client_form");
  openForm.style.display = "flex";

  let shadow = document.querySelector("div.shadow");
  shadow.style.display = "flex";

  let buttons = document.querySelector("div.but_container");
  buttons.style.display = "none";
}

// Close Register Form
let closecad = document.querySelector("input#back_button");
closecad.addEventListener("click", closeCad);
function closeCad() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeForm = document.querySelector("div.new_client_form");
  closeForm.style.display = "none";

  let shadow = document.querySelector("div.shadow");
  shadow.style.display = "none";

  let buttons = document.querySelector("div.but_container");
  buttons.style.display = "flex";
  // TENTANDO NÃO ABRIR OS BOTOES AUTOMATICAMENTE
  // let initB = document.querySelectorAll("button.init_button");
  // initB.style.opacity = 0;
}
// open Search Form
let openform = document.querySelector("button#search_button");
openform.addEventListener("click", openForm);
function openForm() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "none";

  let opensearch = document.querySelector("div.search_form");
  opensearch.style.display = "flex";

  let shadow = document.querySelector("div.shadow");
  shadow.style.display = "flex";
}
// Close Search Form
let closesearch = document.querySelector("input#back_button2");
closesearch.addEventListener("click", closeForm);
function closeForm() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeform = document.querySelector("div.search_form");
  closeform.style.display = "none";

  let shadow = document.querySelector("div.shadow");
  shadow.style.display = "none";
}
// New Patients and Search Buttons
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

// Display Patients Table
async function displayTable() {
  const data = { operation: "list" };
  const response = await fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();

  var list = document.querySelector(".patients_list");
  list.innerHTML = "";
  for (i = 0; i < jsonData.length; i++) {
    list.innerHTML += `<tr><td>${jsonData[i].name}</td><td>${jsonData[i].birthday}</td><td>${jsonData[i].adress}</td><td>${jsonData[i].city}</td><td>${jsonData[i].phone}</td><td><button onclick='updateP(${jsonData[i].id})'>Update</button> / <button onclick='deleteP(${jsonData[i].id})'>Delete</button></td></tr>`;
  }
}
async function register() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeForm = document.querySelector("div.new_client_form");
  closeForm.style.display = "none";

  var data = {
    name: document.querySelector("#name").value,
    birthday: document.querySelector("#birthday").value,
    adress: document.querySelector("#adress").value,
    city: document.querySelector("#city").value,
    phone: document.querySelector("#phone").value,
    operation: "create",
  };

  const response = fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  await displayTable();
}
//parado aqui, update não funciona ainda
function updateP(id) {
  openCad();
  // Changes to update form
  let title = document.querySelector("h1#form_title");
  title.innerHTML = "Update Patient";
  let registerB = document.querySelector("input#register_button");
  registerB.style.display = "none";
  let updateB = document.querySelector("input#update_button");
  updateB.style.display = "flex";
  let idPatient = document.querySelector("input#idPatient");
  idPatient.value = id;
}
async function updatePatient() {
  var data = {
    id: document.querySelector("#idPatient").value,
    name: document.querySelector("#name").value,
    birthday: document.querySelector("#birthday").value,
    adress: document.querySelector("#adress").value,
    city: document.querySelector("#city").value,
    phone: document.querySelector("#phone").value,
    operation: "update",
  };
  try {
    const response = await fetch("../api/endpoint.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error);
  }

  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";
  let closeForm = document.querySelector("div.new_client_form");
  closeForm.style.display = "none";

  await displayTable();
}

// não funcionou o add event com query selector all
async function deleteP($id) {
  var data = {
    id: $id,
    operation: "delete",
  };
  const response = fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  await displayTable();
}
async function searchP() {
  const data = {
    name: document.querySelector("input#search").value,
    operation: "search",
  };
  const response = await fetch("../api/endpoint.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();

  var list = document.querySelector(".patients_list");
  list.innerHTML = "";
  for (i = 0; i < jsonData.length; i++) {
    list.innerHTML += `<tr><td>${jsonData[i].name}</td><td>${jsonData[i].birthday}</td><td>${jsonData[i].adress}</td><td>${jsonData[i].city}</td><td>${jsonData[i].phone}</td><td><button onclick='updateP(${jsonData[i].id})'>Update</button> / <button onclick='deleteP(${jsonData[i].id})'>Delete</button></td></tr>`;
  }
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeform = document.querySelector("div.search_form");
  closeform.style.display = "none";
}
