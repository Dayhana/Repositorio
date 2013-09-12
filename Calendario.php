<?php
//Carreras

include 'JSON.php';

$user = 'HdezC';
$pass = 'tester';

$meses=$_GET['mes'];


$connection_string = 'DRIVER={SQL Server};SERVER=SERVER-CTE-PC;DATABASE=dbProcesos';

$connection = odbc_connect($connection_string, $user, $pass);

 $result=odbc_exec($connection,"select fechaInicio,Descripcion,fechaFinal  from procesos where calendarioAcademico='1' and visble='1'; ");
	  
	 
	  
		while($row = odbc_fetch_array($result)){ 
		 
		    
			
			//$row['fechaInicio']; 
			$repa=substr($row['fechaInicio'],3,-5);
			$all= substr($row['fechaInicio'],6,9);
			$all2=substr($row['fechaFinal'],6,9);
					 
switch($meses){
	
	case '1': 	
	
	if($repa=='01'){
	  
echo $sub=substr_replace($row['fechaInicio'],"Enero",3)."/".$all." ".$row['Descripcion']."<br>";
 
 //$bus= substr_replace($row['fechaFinal'],"Enero",3)
	}
	break;
	
	case '2':
	
	if($repa=='02'){
	
echo $sub= substr_replace($row['fechaInicio'],"Febrero",3)."/".$all."". $row['Descripcion']."<br>";
	//$bus= substr_replace($row['fechaFinal'],"Enero",3). $all2. 
	}
break;	
	
	case '3':
	if($repa=='03'){
	
	echo $sub= substr_replace($row['fechaInicio'],"Marzo",3)."/".$all." ". $row['Descripcion']. "<br>";
	//$bus= substr_replace($row['fechaFinal'],"Marzo",3). $all2.
	 
	}
	
	break;
	case '4':
	 if($repa=='04'){
	
 echo $sub= substr_replace($row['fechaInicio'],"Abril",3)."/".$all. " " . $row['Descripcion']."<br>";
	    //$bus= substr_replace($row['fechaFinal'],"Marzo",3). $all2. 
	}
	  break;
	case '5':
	 if($repa=='05'){
	
	echo $sub= substr_replace($row['fechaInicio'],"Mayo",3)."/".$all. " ". $row['Descripcion']."<br>";
      // $bus= substr_replace($row['fechaFinal'],"Mayo",3). $all2.
	}
	  break;
	case '6':
	 if($repa=='06'){
	
echo $sub= substr_replace($row['fechaInicio'],"Junio",3)."/".$all. " ". $row['Descripcion']."<br>";
	  //$bus= substr_replace($row['fechaFinal'],"Mayo",3). $all2.
	}
	break;
	case '7':
	if($repa=='07'){
	
	 echo $sub= substr_replace($row['fechaInicio'],"Julio",3)."/".$all. "". $row['Descripcion']."<br>";
	 //$bus= substr_replace($row['fechaFinal'],"Mayo",3). $all2.
	}
	  break;
   case '8':	  
	 if($repa=='08'){
	
echo $sub= substr_replace($row['fechaInicio'],"Agosto",3)."/".$all. "". $row['Descripcion']."<br>";
	 //  $bus= substr_replace($row['fechaFinal'],"Agosto",3). $all2.
	}
	break;
	case '9':
	 if($repa=='09'){
	
	echo $sub= substr_replace($row['fechaInicio'],"Septiembre",3)."/".$all. " ". $row['Descripcion']."<br>";
	 //$bus= substr_replace($row['fechaFinal'],"Septiembre",3). $all2.
	}
	
	break;
	case '10':
	 if($repa=='10'){
	
echo $sub= substr_replace($row['fechaInicio'],"Octubre",3)."/".$all." "."<br>";
	   //$row['Descripcion'].$bus= substr_replace($row['fechaFinal'],"Octubre",3). $all2.
	}
	
	 break;
	 case '11':
	 
	 if($repa=='11'){
	
	 echo $sub= substr_replace($row['fechaInicio'],"Noviembre",3)."/".$all." "."<br>";
	//  $row['Descripcion'].$bus= substr_replace($row['fechaFinal'],"Noviembre",3). $all2.
	}
	break;
	
	case '12':
	 if($repa=='12'){
	
	echo $sub= substr_replace($row['fechaInicio'],"Diciembre",3)."/".$all." ". $all2."<br>";
	   // $row['Descripcion'].$bus= substr_replace($row['fechaFinal'],"Diciembre",3).
	}
	
break;  	     
	
	

		
		//json_encode($sub);
		
		
		
		 
		}
		
		}
		

		 
		

























?>