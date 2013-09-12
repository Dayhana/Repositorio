// JavaScript Document


$(document).ready(function(e) {
   
  $("#btnE").click(function(e) {
    
   if(formPass.matri.value==""){
	  
	 alert('Es requerida la matricula'); 
	 
	   return false;
	  
	  }else	
  	       if(formPass.contra1.value=="" || formPass.contra.value==""){
			   
			   
			    alert("No debe dejar campos vacios");
				
			     return false;
			   } else
        
		
		
		if(formPass.contra.value !=formPass.contra1.value){
	  
	 alert('No coinciden');
	 
	  return false; 
	  
	  }else
	   
	  if(formPass.codg.value==""){
		  
		  alert('Es requerida el codigo'); 
	 
		  
		  }
	  parametros={
	
		  
		"mat":formPass.matri.value,   
		 "cod": formPass.codg.value,
		  "cl" :formPass.contra.value
		  };

	$.ajax({    
 
type: "POST",

url: "VerificaelCodigo.php",

data: parametros,

success: function(msg){
	
if(msg=="OK"){
	
    
  setTimeout($("#car").show(),5000);
  
    window.location='ChangeP.html';  
 
  
}else{
	
	alert(msg);	
	   
	  
	}		

} 

  
});	

  });
  
  
  
 });	

//***********************************************************************

function Cargar(){

 if(formPass.mail.value==""){
	  
	 alert('Es requerido un correo'); 
	 
	   return false;
	  
	  }else	
  	       if(formPass.mat.value=="" || formPass.ced.value==""){
			   
			   
			    alert("No debe dejar campos vacios");
				
			     return false;
			   }  
			   
			 var parametros = {
				           
							"matri" : formPass.mat.value,
							"cor" : formPass.mail.value,
							"ced" : formPass.ced.value
							//"valores" :valores
						};	                    //

	          $.ajax({    
	

 
type: "POST",

url: "Passworld.php",

data: parametros,

success: function(msg){

//alert(msg);

if(msg=="Se envio satifactoriamente"){
	
    
  setTimeout(cargarI(),8000);
  
  setTimeout(1000);
   
    window.location='Enviado.html';  
 
  
}else{
	
	  window.location='Error.html';	
	   
	  
	}	

} 

  
});	

}
		   

 
 
function cargarI(){
	
setTimeout($("#car").show(),1000);	
	
	
	}
 
 
 
 
    
//});