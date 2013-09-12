// Cambiar Pass

function ComprobarAEn(){
	
var matri=formPass.matri.value;

var valor=formPass.contra.value;
 
 var valor2=formPass.cls.value;
 


  if(formPass.matri.value==""){
	  
	 alert('Es requerido un correo!'); 
	 
	   return false;
	  }
	  
	  else	
  	       if(formPass.contra.value=="" || formPass.cls.value==""){
			   
			   
			    alert("No debe dejar campos vacios");
				
			     return false;
			   } else
        
		
		
		if(valor != valor2  || formPass.contra.value !=formPass.cls.value){
	  
	 alert('No coinciden');
	 
	  return false; 
	  }

	
$.ajax({    
 
type: "GET",

url: "prueba.php",

data: "matri="+matri,

success: function(msg){

	
//alert(msg);	

//alert("Validando Matricula...");


if(msg=="ok"){
	
    
  setTimeout(ChangePas(),5000);
  
    $("#div").html("Validando Matricula..");
 
  setTimeout('probar()',2000); 
	 

}else{
	
   $("#div").html("Problema al Validar Matricula..");
   	
	  setTimeout('probar()',2000); 
	  //window.location='CrearCorreo.html';
	  
	}	

} 

  
});	

	}
	
	
function ChangePas(){

	
var matri=formPass.matri.value;
var valor=formPass.contra.value;
 

      var parametros = {
				           
							"matri" :formPass.matri.value,
							"contra" : valor
							//"valores" :valores
						};

					$.ajax({
	                data:  parametros,
	                url:   'UpdateMysql.php',
	                type:  'post',
					dataType: "html",
					
 beforeSend: function () {	
            
			    // $("#magen").show();
				        
			}, success:function(response){
					
				
				$("#magen").hide();
				
				 if(response=="Actualizo los datos"){
				    
					setTimeout("alert('Actualizo los datos!')",2000);
					     

				  
				 } else{
					     alert("Hubo inconvenientes al actualizar los datos");
					 
					 }
				 
				 
				 
	                }
					
	            });
 		
		
		
		 }
  

function probar(){
	 
	  $("#div").html("");
 
	 
	 }

  function ShowDialog(){
	  
	  setTimeout(1000,window.showModalDialog('VentanaEmergente.html'));
	   
		  window.location='CrearCorreo.html';
		  
		  
	  
	  }
 