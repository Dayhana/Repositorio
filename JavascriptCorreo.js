//Enviar A la base de datos CrearCorreo

function CrearCorreos(){
	

	   var parametros = {
				           
							"mat" : formCorreo.matri1.value,
							"cl" : formCorreo.pass.value,
							"nom": formCorreo.nom.value,
							"ap" : formCorreo.ap.value,
							"tel" :formCorreo.tel.value,
							"cel" : formCorreo.cel.value,
							"clC" : formCorreo.pass1.value,
							"recinto":formCorreo.selection.value,
							"mail" : formCorreo.mail.value
							//"valores" :valores
						};

					$.ajax({
	                data:  parametros,
	                url:   'index.php',
	                type:  'post',
					dataType: "html",
					
	                beforeSend: function () {
						 
	                // alert("cargando....");
					   $("#magen").show();
					   
			
						
	                },
	                success:function(response) 
					{
							
						$("#magen").hide();
								
				             $("#respuesta").val(response);
							  	
							
								 
							 if(Prueba=="ok"){
						       
							 setTimeout(1000);
							  // if(s>1250){
								   
								   //document.
								   //}
					         
							    
							  // cargar();
							      
							  
							  // $('#cuerpo').load('Estudiantes.html');
							   
							  }else{
								  
								  //alert(Prueba);
								
						  
								  }
						
	                }
	            });	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
