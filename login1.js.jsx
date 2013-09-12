//*****************************************************************************************************************************************************************

//--------------------------LOGIN---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Login()

{

var matri=$("#matric").val();

  var contra=$("#contra").val();
  
 
	if (matri==""){
        
     alert("Es requerido la matircula");
	 
	 return false;
	}	
	 else if(contra=="")
	{

      alert("Es requerido la clave");
	 
	 return false;
	} 
    

	   var parametros = {
				           
							"matri" : matri,
							"contra" : contra
							
						};

					$.ajax({
	                data:  parametros,
	                url:   'index.php',
	                type:  'post',
					dataType: "html",
					
	                beforeSend: function () {
					
					   $("#magen").show();
					   
					Enviar();
					
	                },
	                success:function(response) 
					{
							
						$("#magen").hide();
								
				             $("#respuesta").val(response);
							  	
								var Hola=response;
								
								String(Hola);
								
								//var Jeiny=ltrim(Hola);
								
								var Prueba=Hola.substring(4,2);
								
								//alert(Prueba+" "+" alo");
                                   var p=response;
								   
								  var sub1=p.substring(4);	
								  
								   //alert("pasa por aqui");					
							       
								  // alert(sub1);
								   
								   //$("#nivel").html(sub1);
								 //  sessionStorage.estudiante=sub1;
                                 
								     localStorage.setItem('estudiante',sub1); 
								
							    if(Prueba=="ok"){
						        
                                 // $("#perfil").show();
                                  //$("#menu").hide();
							 setTimeout(1000);
							  // if(s>1250){
								   
								   //document.
								   //}
							  // cargar();
					           window.location="Estudiantes.html"
							    
							      
							  
							  // $('#cuerpo').load('Estudiantes.html');
							   
							  }else{
								  
								  //alert(Prueba);
								 window.location="Vista.html";
								 
						  
								  }
						
	                }
	            });
  }
  
  
  
  
//*********************************************************************************************************
  
  //Hora de la vista con angular js
  
  
  
  function Hora($scope){
	
  var date= new Date();
  
   //var a=Array();
   
   a=[ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
   b=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  // alert(a[date.getMonth()]);
  // alert(date.toLocaleString());
   
   var dat=date.toLocaleString();

   
   var hora2=dat.substring(9);
	 
 
  var hora=date.getHours();
  
  var mes=date.getMonth()+1;
  
   var stringmes=a[date.getMonth()];
   
  //var strindia=b[date.Day()];
  
  //alert(strindia);
  // alert(date.toDateString());
   //for(index=0;index<=12; index++){
	   
	  // if(mes==a[]){
		   
		 // var rep=replace(mes,'Enero');
		  // alert(rep);
         
		  // }
		 //var rep=replace(mes,a[index]); 
		   	 
	
	   //} 
  
  
  $scope.al=date.getDate() +'  de '+ stringmes +' '+date.getFullYear();
  
  $scope.hora=date.getHours()+':'+date.getMinutes();
  
    //alert(a[mes]);
 
	  //alert(date.getTimezoneOffset()); 
	
    if(hora>11){
    
      hora=hora-12;
		 
		 $scope.pm='pm';
		 
		 }else{
			 
			 hora=0;
			 $scope.pm='am';
			 }



}



//*****************************************************************************************************

//Enviar Matricula para guardarla en el localStorage para que cada vez que inicie sesion salga el usuario 


function Enviar(){

var matri=formLogin.matric.value;	

 $.getJSON('DosT.php',{matri: matri}, function(json){
 
 //alert(json.nombre);
// json.nombre+json.apellido
    
  //sessionStorage.firtsname=json.nombre+" "+json.apellido;
     
 // sessionStorage.recinto=json.recinto;
  
 // sessionStorage.carrera=json.carrera
  
 // sessionStorage.matri=json.matri;
  
  //sessionStorage.direccion=json.direccion;
 
  // $("#nivel").html(localStorage.getItem('nombre'));
   localStorage.setItem('nombre',json.nombre+" "+json.apellido);
   
    localStorage.setItem('recinto',json.recinto);
 
        localStorage.setItem('carrera',json.carrera); 
      
                 localStorage.setItem('matri',json.matri); 
                     
                     localStorage.setItem('direccion',json.direccion); 
                     
          
		$("#recinto").html(json.recinto);							  
           $("#matri").html(json.matri); 
           $("#carrera").html(json.carrera);
            $("#direccion").html(json.direccion);
             
 //alert(sessionStorage.direccion);
 
 //alert(json.direccion);    
	 //alert(json.recinto);   
             //  alert(json.direccion);         
           
           //alert(json[1]);
              //  alert(json['recinto']);
                //  alert(json);
        //$.each(json.recinto, function(i,item){
                  
           //  alert (item.recintos);            
            
           // $("#nivel").html(json.nombre+json.apellido);
            // $("#recinto").html(json.recinto);            
            
        //});
        
        
            
  //$(document).ready(function(){
  
  if(  json.direccion=="Av. Independencia #200, Centro de los Heroes"){
        
        RecintoOcoa();
  
  }
        switch(json.direccion){
      
        case    json.direccion:   "Av. Independencia #200, Centro de los Heroes"
                    initialize();
 
break;
      
        case   json.direccion: "Av. San Vicente de Paul Esq. Av. Mella, Plaza Megacentro"
      
           initializeRecinto();
            break;    
      
      
 
break;
      
        case   json.direccion: "Av. Bartolome Colon # 53"
        
                    RecintoSantiago();
            break;    
      
      
     

break;
      
        case   json.direccion: "Av. General Imbert Barrera # 57-A"
      
            break;    
      
      

break;
      
        case   json.direccion: "Av. Ramón Cáceres"
                   RecintoOcoa()
            break;    
      
      

      
        case   json.direccion: "Av. Canada # 136"
                  
                  RecintoSanjOcoa();
              break;    
            
            
      
       case   json.direccion: "Av. 27 Febrero # 589 Edificio Profesional O&M 2do. Nivel"
      
            break;    
      
      
      }
  /*
 if (json.direccion=="Av. Independencia #200, Centro de los Heroes"){
    
   initialize();

    } else if(json.direccion=="Av. San Vicente de Paul Esq. Av. Mella, Plaza Megacentro"){
        
        
        }*/
  
  //});
   
     });  
    
    //  alert(json.direccion);

/*$.ajax({    
 
type: "GET",

url: "consultar.php",

data: "matri="+matri,

success: function(msg){
	
//$("#div").append(msg['Array']['nombre']);

sessionStorage.firtsname=msg;	

} 

  
});	

	*/  
	   }
	   
	   
//*******************************************************************************************

//---------------------------------Pasar a la vista-----------------------------------------





function Mostrar($scope){
	
	$scope.p=localStorage.getItem('nombre');
	$recinto=localStorage.getItem('recinto');
    $matri=localStorage.getItem('matri');
    $carrera=localStorage.getItem('carrera');
    
    
	}	   
	   
         
//*********************************************************************************************************
 //cargar otra pagina


//***********************************************************************************************************************
$(document).ready(function() {
    
$("#cont").click(function(){

  window.location='Va.html';	

    
});

$("#cerrarS").click(function() {

                        $("#perfil").hide();
     
localStorage.removeItem('nombre');  
  
        localStorage.removeItem('recinto');
  
              localStorage.removeItem('carrera'); 
      
                    localStorage.removeItem('matri'); 
                     
                         //  localStorage.removeItem('direccion'); 
                           
                            localStorage.removeItem('estudiante');
    
                  	 window.location='Login.html';
                     
                    
           
 //if(localStorage.getItem('nombre')==" " || localStorage.getItem('recinto')==" " || localStorage.getItem('carrera')==" " || localStorage.getItem('matri')==" " || localStorage.getItem('direccion')==" "){
 
      //  if()
         
// }

   
});

   
        });	
	
	

$(document).ready(function(e) {
    
  $("#btnLogin").click(function(){
 
 
     var p=formLogin.matric.value;
	 var s='hola';
	 s.toUpperCase();
	//p.toUpperCase();
	var p2=p.substring(3,7);
	
	var mayus=p2.toUpperCase();
	// alert(p2);
	//alert(mayus);
	

   });	
	
});


//***************************************************************************************************************************************************************************************************************************



$(document).ready(function(e) {
   
   	 $("#nivel").html(localStorage.getItem('estudiante'));
		$("#recinto").html(localStorage.getItem('recinto'));							  
           $("#matri").html(localStorage.getItem('matri')); 
           $("#carrera").html(localStorage.getItem('carrera'));
            $("#direccion").html(localStorage.getItem('direccion'));
           
             $("#Rincipal").click(function(){ 
           $("menu").hide();           
 
    });
});

//*************************************************************************************************************************************************************************************************************************



