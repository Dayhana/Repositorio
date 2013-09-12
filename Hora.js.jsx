      $(document).ready(function(){
          
         var date= new Date();
  
      
   a=[ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
   b=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  
   var dat=date.toLocaleString();
    var zona;
   
   var hora2=dat.substring(9);
	 
 
  var hora=date.getHours();
  
  var mes=date.getMonth()+1;
  
   var stringmes=a[date.getMonth()];
  var dia=b[date.getDay()-1];
  
 
$("#Hora").html(dia+" "+date.getDate() +'  de '+ stringmes +' '+date.getFullYear());
// $("#div").html("Hello motor");
$("#dia").html("Hello");

$("#div").html(date.getHours()+':'+date.getMinutes());
//$("#Hora").html("Hi");

 //date.getDate() +'  de '+ stringmes +' '+date.getFullYear();
  
  
 //date.getDate() +'  de '+ stringmes +' '+date.getFullYear();
  



    if(hora>11){
    
      hora=hora-12;
		 
		 //$scope.pm='pm';
		 zona='pm';
		 }else{
			 
			 hora=0;
             zona='am';			
            // $scope.pm='am';
			 }

$("#div").html(date.getHours()+':'+date.getMinutes()+ zona);

});



     $(document).ready(function(){
         
     // $("#Hora").html("jdjdjd");
  
       $("#principal").click(function(){
           
                $("#perfil").hide();
                $("#perfil").hide(); 
               // alert("click");           
           });
      
      });
//**********************************************************************************************************************************


     $(document).ready(function(){
       
      $("#principal").click(function(){
    
           $("#perfil").hide();
  
    //});
       });
   					
     // $("#Hora").html("jdjdjd");
  
     //  $("#principal").click(function(){
 
               // $("#perfil").hide(); 
             //    alert("click");           
         //  });
      
      });

