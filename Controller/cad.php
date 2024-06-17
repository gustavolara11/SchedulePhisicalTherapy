<?php 
include_once '..\classes\patient.php';

$search = $_POST['search'] ?? '';
$name = $_POST['name'] ?? '';  
$birthday = $_POST['birthday'] ?? '';  
$adress = $_POST['adress'] ?? '';  
$city = $_POST['city'] ?? '';  
$phone = $_POST['phone'] ?? '';

if(!empty($search)){
  $newPacient = new Patient($name, $birthday, $adress, $city, $phone);
  $query = $newPacient->load($search);
  var_dump($query);
}else{
$newPacient = new Patient($name, $birthday, $adress, $city, $phone);
$newPacient->save(); // BUG: esta criando um dado em branco no DB após a inclusão do pacte na DB.
}
?>