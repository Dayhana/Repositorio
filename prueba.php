<?php
include 'JSON.php';
//Crea fichero xml http://bp0.blogger.com/_vtkTP7fJIdM/SB75ElhCDQI/AAAAAAAAAFU/k998xPXVK5Y/s1600-h/codigo.JPG
//Cadena de conexión
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
	  
         
	  
	  
	$login=false;	
    $Valor=false;
	$ambos=false;
	
	

 while($row = odbc_fetch_array($result)) { 
  
  if(strtolower($matric)==strtolower($row['est_matricula'])){

		 $login=true; 
		 
		
	  
	     }

		 else{

		    $login=false;
		
		 }
   
          	} 





if($login==true){

echo 'ok';

	}else {
		
		  echo 'No';
	
		
		
		
		}
           
		
