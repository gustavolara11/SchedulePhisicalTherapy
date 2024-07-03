<?php
require_once 'classes/patient.php';

// $operation = $_POST['operation'];
// $json = $_POST['json'];

// switch($operation) {
//   case 'create': // receber o JSON para cadastro do paciente
//     $item = json_decode($json);
    
//     $newP = new Patient($item->name, $item->birthday, $item->adress, $item->city, $item->phone);
//     $newP->save();
//     break;
//   case 'read':// receber o JSON para pesquisar o paciente
//     $item = json_decode($json);

//     $newP = new Patient('','','','','');
//     $newP->load($item);
//     break;
//   case 'readAll':// receber o JSON para mostrar Todos os pacientes
//     # code...
//     break;  
//   case 'update': // receber o JSON para atualizar o paciente
//     # code...
//     break;
//   case 'delete': // receber o JSON para deletar o Paciente
//     # code...
//     break;
//   default:
//     # code...
//     break;
// };

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
<?php
// Recebendo os dados JSON do POST
$data = file_get_contents('php://input');
$json_data = json_decode($data, true);

// Verificando se os dados foram recebidos corretamente
if ($json_data) {
    $name = $json_data['name'];
    $birthday = $json_data['birthday'];
    $adress = $json_data['adress'];
    $city = $json_data['city'];
    $phone = $json_data['phone'];

    $newP = new Patient($name, $birthday, $adress, $city, $phone);
    $newP->save();

    // Enviar uma resposta de volta ao cliente
    echo json_encode(['status' => 'success', 'message' => 'Dados recebidos com sucesso']);
} else {
    // Enviar uma resposta de erro ao cliente
    echo json_encode(['status' => 'error', 'message' => 'Erro ao receber dados']);
}
?>