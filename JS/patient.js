// Open Register Form
let opencad = document.querySelector("button#cad_button");
opencad.addEventListener("click", openCad);

function openCad() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "none";

  let openForm = document.querySelector("div.new_client_form");
  openForm.style.display = "flex";
}
// Close Register Form
let closecad = document.querySelector("input#back_button");
closecad.addEventListener("click", closeCad);

function closeCad() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeForm = document.querySelector("div.new_client_form");
  closeForm.style.display = "none";
}
// open Search Form

let openform = document.querySelector("button#search_button");
openform.addEventListener("click", openForm);

function openForm() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "none";

  let opensearch = document.querySelector("div.search_form");
  opensearch.style.display = "flex";
}
// Close Search Form
let closesearch = document.querySelector("input#back_button2");
closesearch.addEventListener("click", closeForm);

function closeForm() {
  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeform = document.querySelector("div.search_form");
  closeform.style.display = "none";
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
  }).then((response) => {
    const jsonData = response.json();
    console.log(jsonData);
    var list = document.querySelector("#patients_list");
    jsonData.forEach((element) => {
      const listItem = document.createElement("li");
      listItem.innerHTML =
        element.name +
        element.birthday +
        element.address +
        element.city +
        element.phone;
      list.appendChild(listItem);
      console.log(listItem);
    });
  });
}
displayTable();

function register() {
  var name2 = document.querySelector("#name").value;
  var birthday = document.querySelector("#birthday").value;
  var adress = document.querySelector("#adress").value;
  var city = document.querySelector("#city").value;
  var phone = document.querySelector("#phone").value;
  var operation = "create";

  let closebuttons = document.querySelector("div.buttons");
  closebuttons.style.display = "flex";

  let closeForm = document.querySelector("div.new_client_form");
  closeForm.style.display = "none";

  var data = {
    name: name2,
    birthday: birthday,
    adress: adress,
    city: city,
    phone: phone,
    operation: operation,
  };

  // Enviando os dados via AJAX
  $.ajax({
    url: "../api/endpoint.php",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (response) {
      // Sucesso ao enviar os dados
      console.log("Dados enviados com sucesso:", response);
    },
    error: function (error) {
      // Erro ao enviar os dados
      console.error("Erro ao enviar dados:", error);
    },
  });
}

// function displayTable() {
//   $(document).ready(() => {
//     var data = { operation: "list" };
//     $.ajax({
//       url: "../api/endpoint.php",
//       type: "POST",
//       contentType: "application/json",
//       data: JSON.stringify(data),
//       success: function (response) {
//         console.log(response);
//         var list = document.querySelector("#patients_list");
//         var jsonData = response;
//         jsonData.forEach((element) => {
//           list.innerHTML =
//             element.name +
//             element.birthday +
//             element.adress +
//             element.city +
//             element.phone;
//         });
//       },
//       error: function (error) {
//         console.error("Erro ao enviar dados:", error);
//       },
//     });
//   });
// }
