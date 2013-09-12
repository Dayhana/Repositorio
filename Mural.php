<?php
include 'JSON.php';
require_once('Conexion.php');

$user = 'HdezC';
$pass = 'tester';


$noticias=$_GET['noti'];

//art_imagen

$connection = odbc_connect($connection_string, $user, $pass);


if($connection){
$sql="select top 1 * from tbl_info_art join  tbl_multimedia_art on  tbl_info_art.id_art_inf= tbl_multimedia_art.id_art_inf";


$result=odbc_exec($connection,$sql);

	while($row=odbc_fetch_array($result)) {
	
	     
        	
	       $nombre=$row['art_imagen'];   	  
		   
          $img='http://www.udoym.edu.do/logolemaoym.png';  	
		  
		   echo   $row['Titulo_art']." "."<div align='right'>".$row['fecha_inicio_art']."</div>"."<br>".$imagenes="<img src='$img'></img>"."<br>".$row['Contenido_art'];
		   
		   $contenido=$row['Titulo_art'];
		   $cons=$row['Contenido_art'];
		   
	

			
			  
	  	// $ajson=array('imagen'=>$imagenes,'titulo'=> $row['Titulo_art'], 'contenido'=> $row['Contenido_art']);
	
	
	//  $xml=array('recinto'=> odbc_result($result,"ent_nombre"),'direccion'=>odbc_result($result,"ent_direccion"),'direccion'=odbc_result($result,"ent_direccion"),		         
	 // "<html><head></head><body><img src='$img'></img></body></html>";
	 
	}

}else{
	
	echo "El servidor esta fuera de servicio";
	}
 // echo  json_encode($ajson);

 "<a href=javascript:(function(){TwitThisPop=window.open(%22http://twitthis.com/twit?url=%22+encodeURIComponent(location.href)+%22&amp;title=%22+((document.title)%20?%20encodeURIComponent(document.title.replace(/^\s*|\s*$/g,%27%27))%20:%20%22%22),%20%22TwitThisPop%22,%20%22width=600,%20height=500,%20location,%20status,%20scrollbars,%20resizable,%20dependent=yes%22);%20setTimeout(%22TwitThisPop.focus()%22,%20100);%20})(><img alt='TwitThis' src='http://www.gxportal.com/media/design/style000001/00000001440000001271.gif' style='border:none;'/></a>";

 "<a href='#' 
  onclick='
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+$contenido&$cons, 
      'facebook-share-dialog', 
      'width=626,height=436'); 
    return false;'>
  Share on Facebook
</a>"	
























?>