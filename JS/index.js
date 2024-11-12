async function main() {
  var ulMessages = document.querySelector("ul#ul_messages");
  var newMessageContainer = document.querySelector("div.newMessageContainer");

// Patients names on Select
async function renderSelect() {
  data = { operation: "select" };
  const response = await fetch("api/endpoint.php", {
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
await renderSelect();
}
main();