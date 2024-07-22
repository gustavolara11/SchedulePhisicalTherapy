<?php
require_once 'classes/patient.php';

// Recebendo os dados JSON do POST
$data = file_get_contents('php://input');
$json_data = json_decode($data, true);

if ($json_data) {
    $id = $json_data['id'] ?? NULL;
    $name = $json_data['name'] ?? '';
    $birthday = $json_data['birthday'] ?? '';
    $adress = $json_data['adress'] ?? '';
    $city = $json_data['city'] ?? '';
    $phone = $json_data['phone'] ?? '';
    $operation = $json_data['operation'] ?? '';
} else {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao receber dados']);
}
header('Content-Type: application/json');

switch($operation) {
  case 'create':
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $newP->save();   
    break;
  case 'list':
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $data = $newP->list();
    $jsonData = json_encode($data);
    echo $jsonData;
    break; 
  case 'update':
    error_log("Update operation called with ID: $id, Name: $name, Birthday: $birthday, Adress: $adress, City: $city, Phone: $phone");
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $data = $newP->update($id);
    error_log("Update result: " . print_r($data, true));
    $jsonData = json_encode($data);
    echo $jsonData;
    break;
  case 'delete':
    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $newP->delete($id); 
    break;
  default:
  json_encode(["message" => "Invalid operation."]);
    break;
};
?>