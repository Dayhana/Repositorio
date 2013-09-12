 //carga las funciones en la ventana 
$(window).load(function(){
	

//Funcion del boton que recibe un evento de target o click
 $(function() {
//el boton
  $('#btnU').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
	 
      if (!file.type.match(imageType))
	  
	    alert('No se permite este tipo de archivo');
      
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
	
     }
  
     function fileOnload(e) {
     
	  var result=e.target.result;
	 
     sessionStorage.fotos=e.target.result;
	 
	//$('#imagen').attr("src",result);
	$("carga").show();
	
	 setTimeout(5000,$("carga").hide());
	  
	 $("#imagen").attr("src",sessionStorage.fotos); 
	 
	 
	 
	 
	 
	 if($("#imagen").attr("src",sessionStorage.fotos)){
		 
		  $("#mostrar").hide();
		 
		 }
	    
	  
     }
    });
  });
	 
	 
function foto($scope){
	
$scope.s=$("#imagen").attr("src",sessionStorage.fotos);	
	

	
	}
$(document).ready(function(e) {
  
  $("#imagen").click(function() {
    
		 $("#mostrar").show();


});
	


    
});


$(document).ready(function(e) {
    
    


});