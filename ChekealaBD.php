<?php

  $matri=$_GET['mat'];
  
 	$pass=$_GET['cl'];
   

	$login=false;	

		$conect=mysql_connect('localhost','root','1234');

  
     		 $selecdb=mysql_select_db('estudiantes',$conect);
	  

      			  $sql2=mysql_query("select* from students where matricula='".$matri."'");




   	        	
			      //$result=odbc_exec($connection,"select * from tbl_co_estudiante where est_matricula='".$matric."';");
	  
         
	  
	  
	$login=false;	
    $Valor=false;
	$ambos=false;
	
	

 while($row = mysql_fetch_array($sql2)) { 
  
  if(strtolower($matri)==strtolower($row['matricula'])){
     
	
      echo "existe";
	
		 $login=true; 	
	   
	     }

		 else{
			 echo "no existe";

		    $login=false;
			
			
		
			
		
		 }
   	           	} 




?>