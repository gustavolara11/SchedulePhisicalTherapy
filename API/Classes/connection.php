<?php 
class Connection {
  protected $ad = 'localhost';
  protected $db = 'pt_cp';
  protected $log = 'root';
  protected $pass = '';

  public function __construct(){}
  
  public function getCon(){
    try {
      return $con = mysqli_connect($this->ad, $this->log, $this->pass, $this->db);
    } catch (Error) {
      echo "Erro ao conectar ao Banco de Dados.";
    }
  }
  public function queryC($sql){
    echo $sql;
    $query = mysqli_query($this->getCon(), $sql);
  }
  public function queryR($sql){
    $query = mysqli_query($this->getCon(), $sql);
    return $query;
  }
  public function queryU($sql){
    $query = mysqli_query($this->getCon(), $sql);
  }
  public function queryD($sql){
    $query = mysqli_query($this->getCon(), $sql);
  }
}
?>