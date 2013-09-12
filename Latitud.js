
function Cargando(){

//alert(document.ElementById('direccion').innerHTML);

var matri=document.ElementById('direccion').innerHTML;

 $.getJSON('mapa.php',{rec:matri},function(json){
  
  alert(json.latitud);
  
  alert(sessionStorage.latitud=json.latitud);

  });

}  


//$(document).ready(function(){
    
     ('#perfil').click(function(){
         
         alert("Click");
         
         });
    
    
    //});


function Cargar(){

 alert("Hi motors");

}  