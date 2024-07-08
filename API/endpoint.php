<?php
require_once 'classes/patient.php';

// Recebendo os dados JSON do POST
$data = file_get_contents('php://input');
$json_data = json_decode($data, true);
header('Content-Type: application/json');
// Verificando se os dados foram recebidos corretamente
if ($json_data) {
    $name = $json_data['name'] ?? '';
    $birthday = $json_data['birthday'] ?? '';
    $adress = $json_data['adress'] ?? '';
    $city = $json_data['city'] ?? '';
    $phone = $json_data['phone'] ?? '';
    $operation = $json_data['operation'] ?? '';
} else {
    // Enviar uma resposta de erro ao cliente
    echo json_encode(['status' => 'error', 'message' => 'Erro ao receber dados']);
}

switch($operation) {
  case 'create': // receber o JSON para cadastro do paciente
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $newP->save();   
    break;
  case 'list':// receber o JSON para mostrar Todos os pacientes
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $data = $newP->load();
    $jsonData = json_encode($data);
    echo $jsonData;   
    break; 
  case 'read':// receber o JSON para pesquisar o paciente
    
    break;
   
  case 'update': // receber o JSON para atualizar o paciente
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $newP->save();
    break;
  case 'delete': // receber o JSON para deletar o Paciente
    # code...
    break;
  default:
    //
    break;
};


// $name = 'lara';
// $pt = new Patient('','','','','');
// $search = $pt->load($name);
// // var_dump($search);
// echo "<br><br>";
// $json = json_encode($search);
// echo $json;
// echo "<br><br>";
// // var_dump(json_decode($json));
// foreach ($search as $item) {
//   echo "ID: " . $item['id'] . "<br>";
//   echo "Nome: " . $item['name'] . "<br>";
//   echo "Data de Nascimento: " . $item['birthday'] . "<br>";
//   echo "Endereço: " . $item['adress'] . "<br>";
//   echo "Cidade: " . $item['city'] . "<br>";
//   echo "Telefone: " . $item['phone'] . "<br>";
//   echo "<hr>";
// }

// mandar o JSON para exibir tds os pacientes

?>