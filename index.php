
<?php
include 'JSON.php';
require_once('Conexion.php');
//Crea fichero xml http://bp0.blogger.com/_vtkTP7fJIdM/SB75ElhCDQI/AAAAAAAAAFU/k998xPXVK5Y/s1600-h/codigo.JPG
//Cadena de conexión
//$connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

$user = 'HdezC';
$pass = 'tester';


$matric=$_GET['matri'];
$contrac=$_GET['contra'];
$Recinto=$_POST['rec'];


//$cedula=$_POST['cedu'];
//$clave=$_POST['clave'];

//Establecemos la conexión

$connection = odbc_connect($connection, $user, $pass );

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
     
	 if(strtolower($contrac)==strtolower($row['est_clave'])){
      
      //echo $row['est_codigo'];
	  
    // echo $row['tan_codigo'];
	
	
	
		 $login=true; 	
	   }
	     }

		 else{

		    $login=false;
			
			
		
			
		
		 }
   
            	} 




//$resultadosJson =   $resultados["validacion"];

//echo $_GET['json'] .  $resultadosJson ;


if($login==true){

echo 'ok  Estudiante';



 "<script language='javascript'>
 
 
 window.location='consultar.php?matri=$matric';
 
    
 
 
 </script >";
	
	
	
	
	// echo $resu;
	
	//echo $row['est_nombres'].$row['est_apellidos'];

      // $e=fopen("respuesta.xml","w+");
		
		//$x=fwrite($e,$xml);
		
		//$c=fclose($e);	
	
	}else {
		
		  echo 'No';
		   
		//$e=fopen("respuesta.xml","w+");
		
		//$x=fwrite($e,$xml);
		
		//$c=fclose($e);
		
		
		
		
		
		}
           
		

           
	
?>