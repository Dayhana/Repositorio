// Cargar Calificaciones


//********************************************************************

$(document).ready(function(e) {
    
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


});




