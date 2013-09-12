<?php
//Crea fichero xml http://bp0.blogger.com/_vtkTP7fJIdM/SB75ElhCDQI/AAAAAAAAAFU/k998xPXVK5Y/s1600-h/codigo.JPG
//Cadena de conexión
include 'JSON.php';
$connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

$user = 'HdezC';
$pass = 'tester';


$matric=$_GET['matri'];

//$cedula=$_POST['cedu'];
//$clave=$_POST['clave'];

//Establecemos la conexión

$connection = odbc_connect($connection_string, $user, $pass );

//echo $matric;
//if($connection){

//echo "Esta funcionando!!";

//$VARIABLE='09-MIST-1-008';


          $result=odbc_exec($connection,"select * from tbl_co_estudiante where est_matricula='".$matric."';");

	
 while($row = odbc_fetch_array($result)) {
	
if(strtolower($matric)==strtolower($row['est_matricula'])){
	 
	 $log=true;
	 //echo $xml=array ('nombre'=>$row['est_nombres']." ".$row['est_apellidos']);
	 echo $row['est_nombres']." ".$row['est_apellidos'];
      //echo  $row['ent_codigo'];
 
	// echo $row['ent_nombre'];
	  }
 }
  

 //echo json_encode($xml);

?>