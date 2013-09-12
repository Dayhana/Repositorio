<?php
//ejecutar
 $matri=$_GET['mat'];
  
 $pass=$_GET['cl'];
   
 // $nombre=$_GET['nom'];
  
 /**$apellido=$_GET['ap'];
 
 
  $tele=$_GET['tel'];
  
 $celu=$_GET['cel'];
 
 
  $recin=$_GET['recinto'];
  
  $mailnuevo=$_GET['mail'];
 
 
    $pregu=$_GET['preg'];
   
   $pass2=$_GET['clC'];
*/   
   
   $conect=mysql_connect('localhost','root','1234');

  
      $selecdb=mysql_select_db('estudiantes1',$conect);
	  

mysql_query("INSERT INTO Estudiantes(Matricula,Clave) VALUES('".$matri."','".$pass."')");

printf ("Registros actualizados: %d\n", mysql_affected_rows());
//while(mysql_affected_rows()){
  	
	/**if(mysql_affected_rows()!=-1){
     echo $s=$s+1;              
       echo "Se afecto";

}else {
	
	echo "No afecto";
	//}	
	}
/**if(){
	
	echo "ERROR";
	
	}else{
		
	echo "Fila afectada";
}

*/

?>
