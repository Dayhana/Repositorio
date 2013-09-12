// JavaScript Document


$(document).ready(function(){ 
   alert("piss");
      $("#face").click(function() {
	
      $("#mostrar").dialog("open");
  });
 
   var cancel = function(){
     $("#mostrar").dialog("close");
    }
 
   $("#mostrar").dialog({
      autoOpen:false,
      width: 250,   
      height: 250,
      modal:true,
      zIndex: 3999,
      position: [150,150],
      buttons: {
          "Aceptar": cancel
      }
   });
        });