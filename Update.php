<?php 

$matric=$_GET['usuario'];
$clave=$_GET['cl'];

$connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

$user = 'HdezC';
$pass = 'tester';

$slq="UPDATE tbl_co_estudiante set est_clave='".$clave."'  where est_matricula='".$matric."';";

$connection = odbc_connect($connection_string, $user, $pass );

 $result=odbc_exec($connection,"UPDATE tbl_co_estudiante set est_clave='".$clave."'  where est_matricula='".$matric."';");

	echo mysql_affected_rows();
	  
  if($result) {
	  
	  
	  echo "Puede iniciar sesion";
	  
	  } else{
		  
		  
		  echo "Hubo inconvenientes al modificar la clave";
		  }       


















?>
