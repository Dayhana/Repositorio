//Variables Globale
 
 /**   function Enero(){
		
	      var mes="01";
		  
	  		 var parametros = {
				           
							"mes":mes,
						
						};

					$.ajax({
						
	                data:  parametros,
	                url:   'Calendario.php',
	                type:  'get',
					dataType: "html",
					
	                beforeSend: function(){
						
	                },
	               		 success:function(response){
							
				             //$("#cola").val(response);
						
							 if(response=="01"){
								 
						            $("#cola").val(response);
							  }
								  

				
	                }
	            });
  
		}
  
 
  */
  /**function si(){
	  
	  var hi="hi desde aqui";
	 if($("#mes").slideToggle()){
		 
	     $('#mes').children('p').text(hi);	 
		   
		   
		   }
	  <div ng-controller="Calendario">{{enero}}
    
    </div>  
	  
	  }
  */
  //
 
//$(function(){
//este desplaza el menu
	//$("#mes").click(function() {
      // alert("please")
 	//event.isDefaultPrevented();
    // if($("#mes").slideToggle()){
    //}
//});

//$("#mes").click(function(event) {
	//event.preventDefault();
	//$("#mes").slideUp();
//});
//});
	
	
	
	
	//} 
	  
 // $('#mes').children('h3').text('new text');  
  
//  })
  		//}
		

 /**  
  console.log() para enviar y registrar mensajes generales;
console.dir() para registrar un objeto y visualizar sus propiedades;
console.warn() para registrar mensajes de alerta;
console.error() para registrar mensajes de error.
 
 
 <div ng-controller="Calendario">{{enero}}</div>
 
 */ 
 
 
//https://ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js

/**
$('#btnLogin').click(function()  { 
	

	 var matri=formLogin.matric.value;
	archivoValidacion = "http://localhost:81/Prueba/consultar.php?"
 
	$.getJSON( archivoValidacion,{recup:matri})
	.done(function(validacion) {
	   
	   $("#respuesta").val(validacion);
	    
		alert(validacion);

  
	})
	
})
*/

//
  

/**
 function Login()
 {
  var matri=$("#matric").val();
  var contra=$("#contra").val();
  
 
	if (matri=="")
	{
     alert("Es requerido la matircula");
	
	 return false;
	}	
	 else if(contra=="")
	{

      alert("Es requerido la clave");
	 
	 return false;
	} 
    
	   var parametros = {
				           
							"matri" : matri,
							"contra" : contra
							//"valores" :valores
						};

					$.ajax({
	                data:  parametros,
	                url:   'index.php',
	                type:  'post',
					dataType: "html",
	                beforeSend: function () {
						
	                 alert("cargando....");
					   
						var m=matri;	
	                },
	                success:function(response) 
					{
								
				             $("#respuesta").val(response);
							  	
								var Hola=response;
								
								String(Hola);
								//var Jeiny=ltrim(Hola);
								
								var Prueba=Hola.substring(4,2);
								
								//alert(Prueba+" "+" alo");
						
								
							 if(Prueba=="ok"){
						
					           var guar=window.location="Estudiantes.html"
							
							  
							  // $('#cuerpo').load('Estudiantes.html');
							   
							  }else{
								  
								  //alert(Prueba);
								 window.location="no.html";
								 
						  
								  }
						
	                }
	            });
  
}
*/



/*
function validar(){

	if (formLogin.matric.value=="" ){
		alert("Introducir un usuario");
		formLogin.matric.focus();
		return false;
	}else if(formLogin.contra.value=="" ){
		alert("Introducir una Clave");
		formLogin.contra.focus();
		return false;
	}else if(formLogin.matric.value!="" && formLogin.contra.value!="") {
	document.formLogin.action="http://www.google.com.do";
	document.forms("formLogin").submit;
	}
	}*/


/** function crearXMLHttpRequest()  //funcion que cre la conexion Ajax ya sea el ActiveXObject o el nativo de Javascript si el 
{
 	 var request=null;
	 
  	if (window.ActiveXObject) 
	
    		request = new ActiveXObject("Microsoft.XMLHTTP"); //creamos la conexion usando el ActiveXObject
			
  			else 
   					 if (window.XMLHttpRequest) 
      					xmlHttp = new XMLHttpRequest(); //Creamos la conexion nativa de javscript
  						return request;
						
						
						 var ma=document.getElementById('matric').value;
  
                         var clav=document.getElementById('contra').value;
  
		request.open('GET','index.php?matric='+ma+'& contrac='+clav,true);
		request.send(null); 		 
		 
		
	 }
	 



	
 request.onreadystatechange=function CargarPagina(){
	
	var c=document.getElementById('al');
	
	 var s=document.getElementById('log');
	 
	if(request.readyState==200 && request.readyState==4){

		c.innerHTML=request.responseText;	
		
		}else{
			
			return false;
			
			}	
	   	
		 $("#errorMsg").hide();}**/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



function Hora($scope){
	
  var date= new Date();
   
  
  var hora=date.getHours();
  var mes=date.getMonth()+1;
  
  $scope.al=date.getDate()+'/'+ mes+'/'+date.getFullYear();
  $scope.hora=hora+':'+date.getMinutes();
  
 
	  //alert(date.getTimezoneOffset()); 
	
    if(hora>11){
		 
		 $scope.pm='pm';
		 
		 }else{
			 
			 $scope.pm='am';
			 }





}












 function Calendario($scope,$htpp){


//$scope.al=document.getElementById('matric').value;

//probar();
//---post----$http.get('http://localhost:81/Prueba/consultar.php?', { "matri" : matri}).

//$scope.ms=formLogin.matric.value;
$scope.url='http://localhost:81/Guardar/Calendario.php';

//$scope.enero='hola';

$http.get($scope.url).

success(function(data){
	
	        alert(data);
				
           $scope.enero = data;


             
        });
		
	
	


 }

 
 function Login()
 {
  var matri=$("#matric").val();
  var contra=$("#contra").val();
  
 
	if (matri=="")
	{
     alert("Es requerido la matircula");
	
	 return false;
	}	
	 else if(contra=="")
	{

      alert("Es requerido la clave");
	 
	 return false;
	} 
    
	   var parametros = {
				           
							"matri" : matri,
							"contra" : contra
							//"valores" :valores
						};

					$.ajax({
	                data:  parametros,
	                url:   'index.php',
	                type:  'post',
					dataType: "html",
					
	                beforeSend: function () {
						 
	                 alert("cargando....");
					
						var m=matri;
						
	                },
	                success:function(response) 
					{
							
								
				             $("#respuesta").val(response);
							  	
								var Hola=response;
								
								String(Hola);
								//var Jeiny=ltrim(Hola);
								
								var Prueba=Hola.substring(4,2);
								
								//alert(Prueba+" "+" alo");
						
								
								 
							 if(Prueba=="ok"){
						       
							   
					           window.location="Estudiantes.html"
							   
							  // cargar();
							      
							  
							  // $('#cuerpo').load('Estudiantes.html');
							   
							  }else{
								  
								  //alert(Prueba);
								 window.location="Vista.html";
								 
						  
								  }
						
	                }
	            });
  
}

//var matri=formLogin.matric.value; 



function probar($scope){

	
 $scope.al='dice';
 
var m=String($scope.al);
//$scope.al=document.getElementById('matric').value;
//alert($scope.al);
//
$scope.p=m;
	//$scope.p=formLogin.matric.value;
	
	}



	
	
/**
function cargar($scope){	

var al="algo";
//var matri=formLogin.matric.value;

$scope.todos=al;



/**function Todo($scope,$http){

var a="algo";

$scope.todos=5;
$http="234";



}*/
/**
alert("entro");
   
$http.get("localhost:81/Prueba/consultar.php?",



{matri:"matri"}).success(function(data){

alert(data);

$scope.todos=data; 
 
 });

   alert("paso por succes"); */
	//}

//ejemplos de tabla 

//http://atejada.blogspot.com/2013/05/angularjs-php-y-sap-hana.html

 //http://www.ite.educacion.es/formacion/materiales/182/cd/doce/campos_de_un_formulario.html
 


//var m=document.getElementById('matric').value;

//alert(document.getElementById('matric').value);

//var m=String(document.getElementById('matric').value); 

function ($scope,$http){
	
//$scope.al=document.getElementById('matric').value;

var a='09-mist-1-008';


// probar();
//---post----$http.get('http://localhost:81/Prueba/consultar.php?', { "matri" : matri}).

//$scope.ms=formLogin.matric.value;
$scope.url='http://localhost:81/Prueba/consultar.php?matri=';


$http.get($scope.url+a).

success(function(data){
	
	//sessionStorage.firstname=data	
            $scope.todos = data;
			
			//window.open("http://localhost:81/Prueba/Estudiantes.html?name="+$scope.todos);

			

             
        });
		
	
	
}
/**var matri=formLogin.matric.value;
		
alert("entro");
 //alert(formLogin.matric.value);

$scope.todo=function(){
	
$.ajax({    
 
type: "GET",

url: "consultar.php",

data: "recup="+matri,

success: function(msg){
	
	$scope.todo=msg;
	
		alert(msg);  
		
		//$scope.todos=msg;
	//alert(formLogin.matric.value);
	  	
	//$("#res").val(msg);

	  //var str = window.location="http://localhost:81/Prueba/Estudiantes.html?nombre="+msg;
    //  var obj = str.parseQuery();

  	//$('#nombre').val(obj.nombre);
	
 // alert ( "obj.section :  " + obj.nombre );
  	
	//alert(document.URL);

} 

  
});	
//alert("paso el success");
//$scope.todos='hi';	
//$scope.todos='hola';		
	//alert("Paso por el success");
	  
	   }
         }







/**

   $scope.gettable = function() {
                      $scope.url = 'tables.php';
        $http.post($scope.url, { "data" : $scope.table}).
        success(function(data, status) {
            $scope.status = status;
            $scope.data = data;
                              $scope.contents = data;
        })
*/





/**
var matri =formLogin.matric.value;

function Todo($scope,$http){



var a="algo";

var b=a;
//alert("Entro");
//$scope.todos=b;

$http.get("localhost:81/Prueba/consultar.php",



{matri:"matri"}).success(function(data){

alert("paso por get");

$scope.todos=data; 
 
 });





}









/**
function Recibir(){	

	
//var matri=formLogin.matric.value;

$http.get('http://localhost:81/Prueba/consultar.php?recup=09-mist-1-008').success(function(data){
	
$("#nombre").val(data);	
	//alert("no entra en get");
	alert(data);
	
    //$scope.todos=data;
});

//$scope.todos="hola";
	//$scope.todos="hola";
	//alert("salio");
	
	}	
	
	
	
	
	
/**
 function Login()
 {
  var matri=$("#matric").val();
  var contra=$("#contra").val();
  
 
	if (matri=="")
	{
     alert("Es requerido la matircula");
	
	 return false;
	}	
	 else if(contra=="")
	{

      alert("Es requerido la clave");
	 
	 return false;
	} 
    
	  
	  	 var parametros = {
				           
							"matri" : matri,
							"contra" : contra
							//"valores" :valores
						};

					$.ajax({
	                data:  parametros,
	                url:   'index.php',
	                type:  'post',
					dataType: "html",
	                beforeSend: function () {
						
	                 //alert("cargando....");
					   
					  	
					
	                },
	                success:function(response) 
					{
						
				             //$("#respuesta").val(response);
							  	
								//var Hola=response;
						       		
								//String(Hola);
								//var Jeiny=ltrim(Hola);
								
								//var Prueba=Hola.substring(4,2);
								
								//alert(Prueba+" "+" alo");
								alert(response)
						         //alert(status);
								// alert(algo);	
						         		 		
							if(response=="ok"){
						
					           window.location="Calendario.html"
							   //Recibir();
							 	 	
							  	
							  // $('#cuerpo').load('Estudiantes.html');
							   
							  }else if(response=="No"){
								  
								  //alert(Prueba);
								 window.location="Vista.html";
								 
						  
								  }
						
	                }
	            });
  
}*/











/**
function Todo($scope){
	
 //var matri=formLogin.matric.value;
 
  //alert("la matricula  form"+matri);	
 
 //alert("entro");

$scope.todos=4;

//alert("paso por el 4");

//$http.post("localhost:81/Prueba/consultar.php?",
  
//{recup:"matri"}).success(function(data){

//alert(data);

//$scope.todos=data; 
 //});
//alert("paso  por la url");
    
}


*/





/**
 function Login()
 {
 
  var matri=$("#matric").val();
  var contra=$("#contra").val();
  var p=$("#res").val();
  
 
	if (matri=="")
	{
     alert("Es requerido la matircula");
	
	 return false;
	}	
	 else if(contra=="")
	{

      alert("Es requerido la clave");
	 
	 return false;
	}
	  
    
	   var parametros = {
				           
							"matri" : matri,
							"contra" : contra
							//"valores" :valores
						};

					$.ajax({
						
	                data: parametros,
	                url:  'index.php',
	                type: 'post',
					dataType: "html",
	                beforeSend: function () {
						
					  //cargar();
	                },
	                success:function(response) 
					{
							 
				             $("#respuesta").val(response);
							 
						
								//var Hola=response;
								 
								//alert(response);
							
								
								//String(Hola);
								//var Jeiny=ltrim(Hola);
								
								//var Prueba=Hola.substring(0,15);
								
							      	//alert(Prueba);
							     //alert(Prueba); 
								//alert(Hola);
						  
								 //alert(msg);
								
								    //alert(response);
								
								if(response=='ok'){
							
							        window.location="Estudiantes.html";
										
							
							   
							}else if(response=='No'){
								  
								  //alert(Prueba);
								window.location="Vista.html";
								 
						  
								  }
					
						
	                }
					
					
	            });
  
}*/