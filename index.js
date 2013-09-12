//*****************************************************************************************************************************************************************

//--------------------------LOGIN---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Login()

{

var matri=$("#matric").val();

  var contra=$("#contra").val();
  
 
	if (matri==""){
        
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
							
						};

					$.ajax({
	                data:  parametros,
	                url:   'index.php',
	                type:  'post',
					dataType: "html",
					
	                beforeSend: function () {
					
					   $("#magen").show();
					   
					Enviar();
					
	                },
	                success:function(response) 
					{
							
						$("#magen").hide();
								
				             $("#respuesta").val(response);
							  	
								var Hola=response;
								
								String(Hola);
								
						
								
								var Prueba=Hola.substring(4,2);
								
								
                                   var p=response;
								   
								  var sub1=p.substring(4);	
								  
							
                                 
								     localStorage.setItem('estudiante',sub1); 
								
							    if(Prueba=="ok"){
						        
                              
							 setTimeout(1000);
						
					           window.location="Estudiantes.html"
							    
						
							   
							  }else{
								  
				
								 window.location="Vista.html";
								 
						  
								  }
						
	                }
	            });
  }
  
  
  //**********************************************************************************************************************
  
  
  
  //--------------------Enviar a la vista-------------------------------------------------------------
  
  
  
  
  function Enviar(){

var matri=formLogin.matric.value;	

 $.getJSON('DosT.php',{matri: matri}, function(json){
 
  
   localStorage.setItem('nombre',json.nombre+" "+json.apellido);
   
    localStorage.setItem('recinto',json.recinto);
 
        localStorage.setItem('carrera',json.carrera); 
      
                 localStorage.setItem('matri',json.matri); 
                     
                     localStorage.setItem('direccion',json.direccion); 
                     
          
		$("#recinto").html(json.recinto);							  
           $("#matri").html(json.matri); 
           $("#carrera").html(json.carrera);
            $("#direccion").html(json.direccion);
             
 //alert(sessionStorage.direccion);
 
  
     });  
     
	   }
//----------------------------------------------------Va  a la vista mediante  Framework Angular-------------------------------------------------------------------------------------------



function Mostrar($scope){
	
	$scope.p=localStorage.getItem('nombre');
	$recinto=localStorage.getItem('recinto');
    $matri=localStorage.getItem('matri');
    $carrera=localStorage.getItem('carrera');
    
  }	   
	   
//***********************************************************************************************************************************************************************



//***********************************************************************************************************************
$(document).ready(function() {
    
$("#cont").click(function(){

  window.location='Va.html';	

    
});
//*************************************************************************Borra y redirecciona al la pagina principal----------------------------------------------------------------------
$("#cerrarS").click(function() {

  
localStorage.removeItem('nombre');  
  
        localStorage.removeItem('recinto');
  
              localStorage.removeItem('carrera'); 
      
                    localStorage.removeItem('matri'); 
                     
                         //  localStorage.removeItem('direccion'); 
                           
                            localStorage.removeItem('estudiante');
    
                  	 window.location='Login.html';
                     
                    


   
});

   
        });	
	
	
//***************************************************************************************************************************************************************************************************************************



$(document).ready(function(e) {
   
   	 $("#nivel").html(localStorage.getItem('estudiante'));
		$("#recinto").html(localStorage.getItem('recinto'));							  
           $("#matri").html(localStorage.getItem('matri')); 
           $("#carrera").html(localStorage.getItem('carrera'));
            $("#direccion").html(localStorage.getItem('direccion'));
           
             $("#Rincipal").click(function(){ 
           $("menu").hide();           
 
    });
});

//*************************************************************************************************************************************************************************************************************************

