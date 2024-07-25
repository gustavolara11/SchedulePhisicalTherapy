<?php 

include_once 'connection.php';

class Patient {
  protected $id;
  protected $name;
  protected $birthday;
  protected $adress;
  protected $city;
  protected $phone;

  public function __construct($name, $birthday, $adress, $city, $phone){
      $this->setName($name);
      $this->setBirthday($birthday);
      $this->setAdress($adress);
      $this->setCity($city);
      $this->setPhone($phone);
  }
  public function save(){
    $connection = new Connection;
    $sql = "INSERT INTO `patients`(`id`, `name`, `birthday`, `adress`, `city`, `phone`) VALUES (NULL,'".$this->getName()."','".$this->getBirthday()."','".$this->getAdress()."','".$this->getCity()."','".$this->getPhone()."');";
    $connection->queryC($sql);
  }
  public function update($id){
      $connection = new Connection;
      $name = $this->getName();
      $birthday = $this->getBirthday();
      $adress = $this->getAdress();
      $city = $this->getCity();
      $phone = $this->getPhone();

      $sql = "UPDATE `patients` SET `name` = '{$name}', `birthday` = '{$birthday}', `adress` = '{$adress}', `city` = '{$city}', `phone` = '{$phone}' WHERE `id` = '{$id}';";
      $connection->queryU($sql);
  }
  public function load($name=" "){
    $connection = new Connection;
    $sql = "SELECT * FROM `patients` WHERE `name` LIKE '%{$name}%' ORDER BY `name`;";
    $query = $connection->queryR($sql);
    if(empty($query) || $query->num_rows == 0){
      echo "Usuário não encontrado.";
    }else{
      return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }    
  }
  public function list(){
    $connection = new Connection;
    $sql = "SELECT * FROM `patients` ORDER BY `name`";
    $query = $connection->queryR($sql);
    if(empty($query) || $query->num_rows == 0){
      echo "Usuário não encontrado.";
    }else{
      return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }    
  }
  public function delete($id){
    $connection = new Connection;
    $sql = "DELETE FROM `patients` WHERE `id` = $id";
    $query = $connection->queryD($sql);
  }
  public function select(){
    $connection = new Connection;
    $sql = "SELECT `name`, `id` FROM `patients` ORDER BY `name`";
    $query = $connection->queryR($sql);
    if(empty($query) || $query->num_rows == 0){
      echo "Usuário não encontrado.";
    }else{
      return mysqli_fetch_all($query, MYSQLI_ASSOC);
    } 
  }
  public function newSchedule($id, $date, $hour){
    $nHour = sprintf('%02d:00:00', $hour);
    $connection = new Connection;
    $sql = "INSERT INTO `schedule`(`date`, `hour`, `NameID`) VALUES ('{$date}','{$nHour}','{$id}');";
    $connection->queryC($sql);
  }
  public function dailySchedule(){
    $connection = new Connection;
  $sql =  "SELECT p.name, s.date, s.hour FROM `schedule` s JOIN `patients` p ON s.nameID = p.id;";
    $query = $connection->queryR($sql);
    if(empty($query) || $query->num_rows == 0){
      echo "Usuário não encontrado.";
    }else{
      return mysqli_fetch_all($query, MYSQLI_ASSOC);
    } 
  }
  public function getId(){
    return $this->id;
  }
  public function setId($i){
    $this->id = $i;
  }
  public function getName(){
    return $this->name;
  }
  public function setName($n){
    $this->name = $n;
  }
  public function getBirthday(){
    return $this->birthday;
  }
  public function setBirthday($b){
    $this->birthday = $b;
  }
  public function getAdress(){
    return $this->adress;
  }
  public function setAdress($a){
    $this->adress = $a;
  }
  public function getCity(){
    return $this->city;
  }
  public function setCity($c){
    $this->city = $c;
  }
  public function getPhone(){
    return $this->phone;
  }
  public function setPhone($p){
    $this->phone = $p;
  }
}
?>