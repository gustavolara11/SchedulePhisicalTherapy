<?php
require_once 'classes/patient.php';
$con = new Connection;
$operation = $_POST['operation'];
$json = $_POST['json'];

switch($operation) {
  case 'create': // receber o JSON para cadastro do paciente
    $item = json_decode($json);
    
    $newP = new Patient($item->name, $item->birthday, $item->adress, $item->city, $item->phone);
    $newP->save();
    break;
  case 'read':// receber o JSON para pesquisar o paciente
    $item = json_decode($json);

    $newP = new Patient('','','','','');
    $newP->load($item);
    break;
  case 'readAll':// receber o JSON para mostrar Todos os pacientes
    # code...
    break;  
  case 'update': // receber o JSON para atualizar o paciente
    # code...
    break;
  case 'delete': // receber o JSON para deletar o Paciente
    # code...
    break;
  default:
    # code...
    break;
};





$name = 'lara';
$pt = new Patient('','','','','');
$search = $pt->load($name);
// var_dump($search);
echo "<br><br>";
$json = json_encode($search);
echo $json;
echo "<br><br>";
// var_dump(json_decode($json));
foreach ($search as $item) {
  echo "ID: " . $item['id'] . "<br>";
  echo "Nome: " . $item['name'] . "<br>";
  echo "Data de Nascimento: " . $item['birthday'] . "<br>";
  echo "Endereço: " . $item['adress'] . "<br>";
  echo "Cidade: " . $item['city'] . "<br>";
  echo "Telefone: " . $item['phone'] . "<br>";
  echo "<hr>";
}



// mandar o JSON para exibir tds os pacientes
















?>