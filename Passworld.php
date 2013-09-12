<?php

//$insert=odbc_exec($connection,"insert into tbl_co_codigo_passworld(id,est_codigo_Regenerador) values('".$matric."','".$p."')");

  $connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbUnidom';

$user = 'HdezC';
$pass = 'tester';


$matric=$_POST['matri'];
$correo=$_POST['cor'];
$cedula=$_POST['ced']; 



$connection = odbc_connect($connection_string, $user, $pass );

//echo $matric;
//if($connection){

//echo "Esta funcionando!!";

//$VARIABLE='09-MIST-1-008';
$result=odbc_exec($connection,"select* from tbl_co_estudiante,tbl_co_codigo_passworld where est_matricula='".$matric."';");
	    
    while($row = odbc_fetch_array($result)) {        
		
		if(strtolower($matric)==strtolower($row['est_matricula'])){
			
			 if(strtolower($cedula)==strtolower($row['est_cedula'])){
			
			
			  
			  $pass=true; }
			
			 }else {
				 
				    $pass=false;
				 }
			
			    
}    
	  



if($pass==true){

$p=md5("".$row['est_matricula']."");	
 
	   
  $resultados=odbc_exec($connection,"select* from  tbl_co_codigo_passworld where Matricula='".$matric."';");
	         
 while($row = odbc_fetch_array($resultados)) {
 
if(strtolower($matric)==strtolower($row['Matricula'])){

    if($row['est_codigo_Regenerador']==""){
	  
	  $insert=true;
	  
	  $update=false;
	  
	  echo "Modifica algo";
}

   }else{
   
     $insert=false;
	 $update=true;
   }
     }  
 
   
   
   
 if($insert==true){ 
 
 $insertar=odbc_exec($connection,"insert into tbl_co_codigo_passworld(est_codigo_Regenerador,Matricula) values('".$p."','".$matric."')")or die();
  
  //echo "Se agrego a la base de datos";
 
  }else{
	  
	 // echo "No se agrego";
	  }



if($update==true){

   if($modificar=odbc_exec($connection,"Update tbl_co_codigo_passworld set codigo='".$p."' where id='".$matric."'")){
  
       echo "Se modifico satifactoriamente";
}else{
   
    echo "Hubo inconvenientes al actualizar la informacion";
    }

}	



/*if($update==true){

   if($modificar=odbc_exec($connection,"Update tbl_co_codigo_passworld set Codigo='".$p."' where co_matricula='".$matric."'")){
  
       echo "Se modifico satifactoriamente";
}else{
   
    echo "Hubo inconvenientes al actualizar la informacion";
    }

}	
*/

//if($mds==true){
if ($_POST['cor'] != "") {
		// email de destino
		$email = $_POST['cor'];
		
		$subject = "Cambio de contraseña";
		

		$mensaje = "Hola! ".$matric."";
	
	 $mensaje.= " <html><head>
		
	<script>(function(d, s, id) {
	
  var js, fjs = d.getElementsByTagName(s)[0];
  
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/es_ES/all.js#xfbml=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


	
		</head><body>
		
		   ha olvidado su contrasena, para accesar a su cuenta siga los siguientes pasos <a href='../Link.html'>CLICK AQUI!!</a>
		  
		   1-copie este codigo:  " .$p."
		   
		   2-coloque la nueva contrasena 
		   
		   3-envie
		   
		   4 Listo! 
	


		
<img src='http://www.udoym.edu.do/images/social_networks_imgs/banner_socialnetwoks.jpg'></img>

<div class='fb-follow' data-href='https://www.facebook.com/pages/Universidad-Dominicana-OM/163263233742403'data-width='450' data-show-faces='true'></div>
	
<a href='https://twitter.com/twitterapi' class='twitter-follow-button' data-show-count='true' data-lang='en'>Follow @twitterapi</a>
	
</body></html>";
		
		
		
		//$mensaje.=$_POST['enlace'];
		$mensaje.= "\n";
		$mensaje.= "Enviado desde  Servidor O&M \n";
		
		// headers del email
		$headers = "From: "."webmaster@udoym.do"."\r\n";
		
		// Enviamos el mensaje
		if (mail($email, $subject, $mensaje, $headers)) {
		
		echo "Se envio satifactoriamente";
		
		}else {
		 	
		 echo " No se envio";	
		}
	}

}



?>