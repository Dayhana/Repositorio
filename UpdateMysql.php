<?php
//insert y 
  $matri=$_GET['matri'];
  
// $pass=$_GET['contra'];
   


	 
  $conect=mysql_connect('localhost','root','1234');
  
      $selecdb=mysql_select_db('estudiantes',$conect);
	  
       $selecdb2=mysql_select_db('estudiantes1',$conect);
	     
	   
/*$col=mysql_query("select students.clave,estudiantes.Clave,students.matricula,estudiantes.Matricula  from estudiantes.students,estudiantes1.estudiantes where students.matricula='".$matri."' and estudiantes.Matricula='".$matri."';",$conect) or die(mysql_error());
*/
//$lo=mysql_query("select students.clave,estudiantes.Clave,students.recinto from estudiantes.students,estudiantes1.estudiantes where students.matricula='".$matri."';",$conect) or die(mysql_error());
				 
$col=mysql_query("select students.clave,estudiantes.Clave,students.matricula,estudiantes.Matricula  from 
estudiantes.students,estudiantes1.estudiantes where students.matricula='".$matri."' and estudiantes.Matricula=students.matricula;",$conect) or die(mysql_error());


	while($fila=mysql_fetch_array($col)){
		
		

		
		if($matric==$fila['students.matricula']){
		 
		 	if($matric==$fila['estudiantes.Matricula']){
			
				echo  $fila['matricula'];
				
				 //echo $fila['students.clave'] .$fila['estudiates.Clave'];
				 
			}
	        	}
		//echo "Esto son de la otra tabla: ". $fila['matricula'];
				
	}







?>
