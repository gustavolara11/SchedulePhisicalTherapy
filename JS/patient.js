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
function displayTable() {} // parei aqui, começando a melhorar a API pra retornar um JSON.\z

function register() {
  var name2 = document.querySelector("#name").value;
  var birthday = document.querySelector("#birthday").value;
  var adress = document.querySelector("#adress").value;
  var city = document.querySelector("#city").value;
  var phone = document.querySelector("#phone").value;

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
    operation: create,
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
