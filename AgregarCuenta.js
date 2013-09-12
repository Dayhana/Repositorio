//Crear cuenta
function AgregarC(){

if(formPass.nom.value=="" || formPass.ap.value=="" || formPass.ced.value=="" ||  formPass.tel.value=="" || formPass.mail.value==""   || formPass.fn.value=="" ){
	  
	 alert('No debe dejar campos vacios!'); 
	 
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
	  
  //setTimeout(ChangePas(),5000);
  
    $("#div").html("Validando Matricula..");
 
  setTimeout('probar()',2000); 
	 
 
  
}else{
	
   $("#div").html("Problema al Validar Matricula..");
   	
	  setTimeout('probar()',2000); 
	 
	}	

} 

  
});	

	}
	

function Correo(){


	
if(formCorreo.nom.value==""  || formCorreo.ap.value=="" || formCorreo.ced.value=="" ||  formCorreo.tel.value=="" || formCorreo.mail.value==""  

 || formCorreo.tel.value==""){
	 
	 
	  
alert('No debe dejar campos vacios!'); 
	 
   return false;}
   
   
  if(formCorreo.selection.value=="Recintos"){
	
	alert('Debe elegir un recinto');
	 
	 return false;
	}	
		 
   
   
	}


function Press(){
	
	if(formCorreo.tel.value.length==3){
		$("#tel").val("("+formCorreo.tel.value+")");
	  	 return false;
		}
}

/**function Pres(){
		
 if(formCorreo.tel.value.length==4){
	$("#tel").val(formCorreo.tel.value+"-");
	  	return false;
		}
	}
	
	*/
$(document).ready(function(e) {

$("#btnE").click(function(e) {
  
if(formCorreo.nom.value!=""  || formCorreo.ap.value!="" || formCorreo.cel.value!="" ||  formCorreo.tel.value!="" || formCorreo.mail.value!="" || formCorreo.matri1.value!=""  || formCorreo.pass1.value!="" || formCorreo.pass.value!=""){
	 
	$("#nom").val(""); 
       $("#ap").val("");
	     $("#cel").val("");
	       $("#tel").val("");
	         $("#mail").val("");
	            $("#matri1").val("");
	 			  $("#pass1").val("");
	               $("#pass").val("");
	 
	 
	 }
  
    ValidarCorreo();
});	

    
	});	

 $(document).ready(function(e) { 	

	$("#email").keypress(function (){
		
	
 		var a=formCorreo.email.value;


			var s=a.indexOf("@");
          
		  		var subs=a.substring(s);
	      
	        			 		
		    
if(subs=='@'){
	 
var subs1=a.substring(0,s);

//alert(subs1);
//$("#nom").val(subs1);
//Me guarda la parte dinamica para comparar el correo electronico en la base de datos.

	$("#email").val(formCorreo.email.value+"oym.edu.do");
	
	 return false;
	 
	 
	 }
	 

if(formCorreo.pass1.value.length!=formCorreo.pass.value.length || formCorreo.pass1.value!=formCorreo.pass.value){
	
	alert('No coinciden');
	}
	
$.ajax({    
 
type: "GET",

url: "prueba.php",

data: "matri="+formCorreo.matri1.value,

success: function(msg){


if(msg=="ok"){
	
    
  setTimeout(ChangePas(),5000);
  
    $("#div").html("Validando Correo..");
 
  setTimeout('probar()',2000); 

}else{
	
   $("#div").html("Problema al Validar Correo..");
   	
	  setTimeout('probar()',2000); 
	  //window.location='CrearCorreo.html';
	  
	}	

} 

  
});	






	
	
 /*if(event.keyCode==64){
	
	
	 alert("Solo uno solo arroba");
	 //$("#mail").val("");
	 }
       }
 /**if(subs1=='oym.edu.do'){
	 
	 alert(subs1);
	 
	alert("No se escribe nada!");
	
$("#mail").val("");
	

	 }*/
	 
	 /*if(str=='oym.edu.do'){
	
		 $("#mail").val("");
		  return false;
		 
		 }*/
	 
/** if($("#mail").keypress()=='@'){
		 
		  $("#mail").val("");
		  } 
         */
});

	});		
		
$(document).ready(function() { 



$("#tel").limitkeypress({ rexp: /^[0-9]*$/}); 

$("#cel").limitkeypress({ rexp: /^[0-9]*$/});
 
$("#nom").limitkeypress({ rexp: /^[a-z A-Z]*$/}); 

$("#ap").limitkeypress({ rexp: /^[a-z A-Z]*$/});

$("#mail").limitkeypress({ rexp: /^[a-z A-Z . _ 0-9 @]*$/});

});
	 
	 

 //var matri=formLogin.matric.value;	
function ValidarCorreo(){
	
$.ajax({    
 
type: "GET",

url: "http://localhost:81/Prueba/ScriptPHP/MysqlCorreoE.php",

data: "matri="+formCorreo.email.value,

success: function(msg){
	
if(msg=="Usuario disponible"){
	
	setTimeout(1000,$("#mage").show());
	

} else{
	
	setTimeout(1000, $("#imagen").attr("src",'x.jpg'));
	}

}


  });	
		
		
}
  


	