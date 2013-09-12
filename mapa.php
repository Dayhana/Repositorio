<?php
include('JSON.php');
//$connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

//$user = 'HdezC';
//$pass = 'tester';

$recinto=$_GET['rec'];

 
//$connection = odbc_connect($connection_string, $user, $pass );


	$conect=mysql_connect('localhost','root','1234');

  
     		 $selecdb=mysql_select_db('mapa',$conect);
	  

      			  $sql2=mysql_query("select Latitud from mapas where Direccion='".$recinto."'");

 while($row=mysql_fetch_array($sql2)) {

 $xml=array('latitud'=>mysql_result($sql2,"Latitud"));
 

 echo json_encode($xml);



 
 }




















?>