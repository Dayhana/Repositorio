<?php
//Crea fichero xml http://bp0.blogger.com/_vtkTP7fJIdM/SB75ElhCDQI/AAAAAAAAAFU/k998xPXVK5Y/s1600-h/codigo.JPG
//Cadena de conexión
include 'JSON.php';
require_once('Conexion.php');



$matric=$_GET['matri'];
$recin=$_GET['rec'];
//$cedula=$_POST['cedu'];
//$clave=$_POST['clave'];

//Establecemos la conexión

$connection = odbc_connect($connection, $user, $pass );

//echo $matric;
//if($connection){

//echo "Esta funcionando!!";
//top 10 = limit
//$VARIABLE='09-MIST-1-008';
 
 
 
$sql1="SELECT*  FROM tbl_co_estudiante Join tbl_co_entidad  on tbl_co_entidad.ent_codigo=tbl_co_estudiante.ent_codigo 

  Join  tbl_co_carrera on tbl_co_estudiante.car_codigo=tbl_co_carrera.car_codigo  where  tbl_co_estudiante.est_matricula='".$matric."';"; 
 


$result=odbc_exec($connection,$sql1);

while($row=odbc_fetch_array($result)) {

  $xml=array('recinto'=> odbc_result($result,"ent_nombre"),'direccion'=>odbc_result($result,"ent_direccion"),'direccion'=>odbc_result($result,"ent_direccion"),'nombre'=>odbc_result($result,"est_nombres"),'apellido'=>odbc_result($result,"est_apellidos"),'carrera'=>odbc_result($result,"car_descripcion"),'matri' =>odbc_result($result,"est_matricula"));
   	
	  
	
 	}
		  

   echo  json_encode($xml);

	   
	  

?>