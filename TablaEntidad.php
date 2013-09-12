<?php

$connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

$user = 'HdezC';
$pass = 'tester';


$rec=$_GET['r'];
$m=$_GET['mat'];
//$cedula=$_POST['cedu'];
//$clave=$_POST['clave'];

//Establecemos la conexión

$connection = odbc_connect($connection_string, $user, $pass);


$result=odbc_exec($connection,"select* from tbl_co_entidad where ent_codigo='".$rec."'"); 


while($row=odbc_fetch_array($result)){
	

echo odbc_result($result,"ent_direccion");

	
	
	}
?>