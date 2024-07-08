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
  public function save($id=NULL){
    $connection = new Connection;
    if($id=NULL){
      $sql = "INSERT INTO `patients`(`id`, `name`, `birthday`, `adress`, `city`, `phone`) VALUES (NULL,'".$this->getName()."','".$this->getBirthday()."','".$this->getAdress()."','".$this->getCity()."','".$this->getPhone()."');";
    }else{
      $sql = "UPDATE `patients` SET `name` = ".$this->getName().", `birthday` = ".$this->getBirthday().", `adress` = ".$this->getAdress().", `city` = ".$this->getCity().", `phone` = ".$this->getPhone()." WHERE `id` = ".$id.";";
    }
    $connection->queryC($sql);
  }
  public function load($id=" "){
    $connection = new Connection;
    $sql = "SELECT * FROM `patients` WHERE `name` LIKE '%$id%'";
    $query = $connection->queryR($sql);
    if(empty($query) || $query->num_rows == 0){
      echo "Usuário não encontrado.";
    }else{
      return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }
       
  }
  public function delete(){

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