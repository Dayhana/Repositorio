//Calendario

//************************************************
//--------------------------------ENERO-------------------------------

/**	alert(document.getElementById('ene').innerHTML)
	alert( document.getElementById('feb').innerHTML)
	Calendario();
	
 }

function Prueba2(){

if($('#ene').click()){
	
	$('#h').show();
	
	} else if($('#feb').click()){
                 	$('#h').hide();
}
	}*/
  
function Enero(){  
 
$.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=1",	  
	  
success: function(msg){
//alert(msg);	
//sessionStorage.firtsname=msg;	

//$("#en").load(msg);
$("#en").html(msg);
//alert($("#en").load(msg));
//alert($("#en").html(msg));
} 

  });
  
  
 
}
  
  
 
function Febrero(){  
 
$.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=2",	  
	  
success: function(msg){
	
//alert(msg);	
//sessionStorage.firtsname=msg;	

//$("#fb").load(msg);
$("#feb").html(msg);
//alert($("#en").load(msg));
//alert($("#en").html(msg));
} 

  });
  
  
 
}

function Marzo(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=3",	  
	  
success: function(ms){
	
	  //sessionStorage.mar=ms;
	//alert(ms);
	
	//alert(enero);

//$("#mar").load(msq);
$("#mar").html(ms);



} 

  });

  
 
}


function Abril(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=4",	  
	  
success: function(ms){
	
$("#ab").html(ms);
	
	
	
} 

  });

  
 
}

function Mayo(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=5",	  
	  
success: function(ms){
	
$("#may").html(ms);

} 

  });

  
 
}function Junio(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=6",	  
	  
success: function(ms){
$("#ju").html(ms);

} 

  });

  
 
}function Julio(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=7",	  
	  
success: function(ms){
$("#jul").html(ms);
} 

  });

  
 
}function Agosto(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=8",	  
	  
success: function(ms){
$("#ag").html(ms);
  
}

  });

  
 
}function Septiembre(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=9",	  
	  
success: function(ms){
$("#sep").html(ms);

} 

  });

  
 
}function Octubre(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=10",	  
	  
success: function(ms){

$("#oc").html(ms);

} 

  });

  
 
}function Noviembre(){
	
 
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=11",	  
	  
success: function(ms){
$("#nov").html(ms);	


} 

  });

  
 
}
function Diciembre(){
	
	 
 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/Probando/Calendario.php",

data: "mes=12",	  
	  
success: function(ms){
$("#dic").html(ms);	

} 

  });

  
 
}


