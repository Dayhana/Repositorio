<?php

$matric=$_POST['mat'];
$cod=$_POST['cod'];
 $clave=$_POST['cl']; 

  $connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

$user = 'HdezC';
$pass = 'tester';




	 
  $conect=mysql_connect('localhost','root','1234');
  
    $selecdb=mysql_select_db('estudiantes',$conect);
  
	     
 
$connection = odbc_connect($connection_string, $user, $pass );


 
	   
  $resultados=odbc_exec($connection,"select* from  tbl_co_codigo_passworld where Matricula='".$matric."';");
	         
 while($row = odbc_fetch_array($resultados)) {
 
if(strtolower($matric)==strtolower($row['Matricula'])){

  if(strtolower($cod)==strtolower($row['est_codigo_Regenerador'])){
	  
	 $com=true;  
	  }
 
   }else{
	   
	$com=false;   
	   
   }
     }  
 

if($com==true){
	
	
	//cambiar por sql server mysql_query($connection,"UPDATE tbl_co_estudiante set est_clave='".$pass."' where est_matricula='".$matri."'")

 if(mysql_query("Update students set clave='".$clave."' where matricula='".$matric."'",$conect)){
	 
  echo "OK";
  
}else{
	
	echo "Fallo";
	}
	
	
	}else{
	
	 echo "Fall";
	
	}
















?>