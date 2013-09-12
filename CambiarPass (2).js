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
	  
	
	
	
	$.ajax({    
 
type: "POST",

url: "prueba.php",

data: "matri="+formPass.matri.value,

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

  });
  
  
  
 });	

 $(document).ready(function(e) {
   
   
   $("#btnS").click(function(e) {
   
   
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
	

 
type: "GET",

url: "Passworld.php",

data: parametros,

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

			   
		        
});
    
}); 