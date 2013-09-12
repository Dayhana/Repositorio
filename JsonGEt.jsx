
function Enviar(){
	
    
  $.ajax({    
 
type: "GET",

url: "DosT.php",

data: "matri="+"09-mist-1-008",

success: function(msg){


 $.each(msg.recinto, function(i,item){
    
          //$("#div").append('item.recinto');    
       alert (item.recinto);
    
    })




} 

  
});	