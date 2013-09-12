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
	                url:   'http://10.0.0.206:81/Prueba/index.php',
	                type:  'post',
					dataType: "html",
					
	                beforeSend: function () {
					
					   $("#magen").show();
					   
					Enviar();
					//CargarNota();
					
	                },
	                success:function(response) 
					{
					//	$.mobile.showPageLoadingMsg(); 	
						
						//$("#magen").hide();
								
				             $("#respuesta").val(response);
							  
							  
							  	
								var Hola=response;
								
								String(Hola);
					
								var Prueba=Hola.substring(4,2);
								
						
                                   var p=response;
								   
								  var sub1=p.substring(4);	
								  
							
                                 
								     localStorage.setItem('estudiante',sub1); 
								
							    if(Prueba=="ok"){
						        
                   
							 setTimeout(1000);
							 
					           window.location="Estudiantes.html"
							   
			
							  }else{
								  
							
								 window.location="Vista.html";
								 
						  
								  }
						
	                }
	            });
  }
  
  
function Enviar(){

var matri=formLogin.matric.value;	


 $.getJSON('http://10.0.0.206:81/Prueba/DosT.php',{matri: matri}, function(json){
 
 
   localStorage.setItem('nombre',json.nombre+" "+json.apellido);
   
    localStorage.setItem('recinto',json.recinto);
 
        localStorage.setItem('carrera',json.carrera); 
      
                 localStorage.setItem('matri',json.matri); 
                     
                     localStorage.setItem('direccion',json.direccion); 
					
                     
        $(document).ready(function(){  
		 
		$("#recinto").html(json.recinto);							  
           $("#matri").html(json.matri); 
           $("#carrera").html(json.carrera);
            $("#direccion").html(json.direccion);
            $("#nivel").html(localStorage.getItem('estudiante'));
			 
				 
				 });
				       });
				 
//***********************************************************************************************

//-+---------------------------Carga Las Calificaciones------------------------------------------
$(document).ready(function(e) {
  

 $.ajax({    
 
type: "GET",

url: "http://10.0.0.206:81/Prueba/ArchivosServidor/CargarCalificaciones.php",

data: "matri="+matri,

success: function(msg){

 //alert(msg);
 
localStorage.setItem('Notas',msg);
 
  $('#notas').html(localStorage.getItem('Notas'));
    


} 

  
   });	
      
           });
             






/*$(document).ready(function(e) {
	

$.ajax({
	  data: matri,
	   url:'CargarCalificaciones.php',
	   type:'get',
	   dataType: "html",
	   
    success:function(response) {
		
	 alert(response); 
	  
	  $('#notas').html(response);
	  
	  }



});
	 

      
     });


*/




				 
				 
                 
  /*  $(document).ready(function(){  
      
 if(json.direccion=="Av. Independencia #200, Centro de los Heroes"){
    
           $('#p').load('init',function(){
            
       
      //var info=gooogle.maps.InfoWindow({
      //content: 'Helllo motor'})    
    // alert(localStorage.getItem('direccion'));

          $('#p').gmap({ 'center':'18.449545,-69.929162', 'zoom':17});
                     
                     $('#pageLoand').gmap('addMarker',{'position':'18.449545,-69.929162'}).click(function(){                     
     
                         $('#pageLoand').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                }); $('#pageLoand').gmap('addMarker',{'position':'18.449922,-69.928843','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
           
                                           $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #1'},this)
                    
                                             });  $('#pageLoand').gmap('addMarker',{'position':'18.44984,-69.929269','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                  
                                                            $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #2'},this)
                    
                                                                        }); $('#pageLoand').gmap('addMarker',{'position':'18.449461,-69.928896 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                
                                                                        $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #3'},this)
 
                                                                            }); $('#pageLoand').gmap('addMarker',{'position':'18.449197,-69.929645 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #4'},this)

                                                                                            });$('#pageLoand').gmap('addMarker',{'position':'18.449504,-69.929741 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                
                                                                                                $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #10'},this)

                                                                                                    });$('#pageLoand').gmap('addMarker',{'position':'18.44925,-69.931946 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #9'},this)

                                                                                                });$('#pageLoand').gmap('addMarker',{'position':'18.449736,-69.931463','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #6'},this)

                                                                                                        }); $('#pageLoand').gmap('addMarker',{'position':'18.449614,-69.931367','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                        $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #5'},this)

                                                                                                            });$('#pageLoand').gmap('addMarker',{'position':'18.449051,-69.931908','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                                $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #9'},this)
                   });
              }); 
        
     }    

  }); */ 
 	  
 
                 
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
$(document).ready(function(e) {
	
 $('#PRincipal').click(function(e) {
    
	  //alert("entra con su click");
	  
	   $("#n").html(localStorage.getItem('nombre'));
	     
	
		});
    
				});

//***********************************************************************************************************************
$(document).ready(function() {
    
$("#cont").click(function(){

  window.location='Va.html';	

    
});

$("#cerrarS").click(function() {

                      
localStorage.removeItem('nombre');  
  
        localStorage.removeItem('recinto');
  
              localStorage.removeItem('carrera'); 
      
                    localStorage.removeItem('matri'); 
                     
                         localStorage.removeItem('direccion'); 
                           
                            localStorage.removeItem('estudiante');
							
							 localStorage.removeItem('Notas');
    
                  	 window.location='Login.html';
                     
                    


   
});

   
        });	
	
	



//***************************************************************************************************************************************************************************************************************************

$(document).ready(function(e) {
   
   	 $("#nivel").html(localStorage.getItem('estudiante'));
		$("#recinto").html(localStorage.getItem('recinto'));							  
           $("#matri").html(localStorage.getItem('matri')); 
           $("#carrera").html(localStorage.getItem('carrera'));
            $("#direccion").html(localStorage.getItem('direccion'));
           
      
       $("#matric").keypress(function(){
         
        this.value=formLogin.matric.value.toUpperCase();
         
      
             
         });  
      
});

//*************************************************************************************************************************************************************************************************************************




 // $('#pageLoand').load('pageshow',function(){
       
              // alert(localStorage.getItem('direccion'));
           
    //                 $('#pageLoand').gmap({ 'center':'18.449545,-69.929162', 'zoom':18}); 
                    
             

     //});


//$(document).ready(function(){
    
    
     //$("#matric").keypress(function(){
         
       // this.value=formLogin.matric.value.toUpperCase();
         
          // alert(formLogin.matric.value);
             
       //  });
    
    
    //});
//********************************************************************************************************************************************************************************************************************************


    //function SedeCentral(){

  //$('#pageLoand').load('pageshow',function(){
       
 // alert(localStorage.removeItem('direccion'));        
 //switch(){           
                    
  //   $('#pageLoand').gmap({ 'center':'18.449545,-69.929162', 'zoom':18}); 
                
             

 //}
       
       //    });
    
   
    
 //***************************************************************************************

    
 //$(document).ready(function(){

 //if( localStorage.getItem('direccion')=="Av. Independencia #200, Centro de los Heroes"){
           
           $('#pageLoand').load('init',function(){
            
       
      //var info=gooogle.maps.InfoWindow({
      //content: 'Helllo motor'})    
    // alert(localStorage.getItem('direccion'));

          $('#pageLoand').gmap({ 'center':'18.449545,-69.929162', 'zoom':17});
                     
                     $('#pageLoand').gmap('addMarker',{'position':'18.449545,-69.929162'}).click(function(){                     
     
                         $('#pageLoand').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                }); $('#pageLoand').gmap('addMarker',{'position':'18.449922,-69.928843','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
           
                                           $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #1'},this)
                    
                                             });  $('#pageLoand').gmap('addMarker',{'position':'18.44984,-69.929269','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                  
                                                            $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #2'},this)
                    
                                                                        }); $('#pageLoand').gmap('addMarker',{'position':'18.449461,-69.928896 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                
                                                                        $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #3'},this)
 
                                                                            }); $('#pageLoand').gmap('addMarker',{'position':'18.449197,-69.929645 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #4'},this)

                                                                                            });$('#pageLoand').gmap('addMarker',{'position':'18.449504,-69.929741 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                
                                                                                                $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #10'},this)

                                                                                                    });$('#pageLoand').gmap('addMarker',{'position':'18.44925,-69.931946 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #9'},this)

                                                                                                });$('#pageLoand').gmap('addMarker',{'position':'18.449736,-69.931463','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #6'},this)

                                                                                                        }); $('#pageLoand').gmap('addMarker',{'position':'18.449614,-69.931367','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                        $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #5'},this)

                                                                                                            });$('#pageLoand').gmap('addMarker',{'position':'18.449051,-69.931908','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                                $('#pageLoand').gmap('openInfoWindow',{'content': 'Edifcion #9'},this)
                   });
              }); 
       
 

 
 //} //else if()
          
// });
  
//********************************************************************************************************************

$('#Este').load('init',function(){
  
      $('#Este').gmap({ 'center':'18.507931,-69.856005', 'zoom':18});

        $('#Este').gmap('addMarker',{'position':'18.507931,-69.856005'}).click(function(){                     
     
        $('#Este').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                });
                               
                   });





//********************************************************************************************************************************************************
$('#Puerto').load('init',function(){
  
      $('#Puerto').gmap({ 'center':'19.789167,-70.691766', 'zoom':17});

        $('#Puerto').gmap('addMarker',{'position':'19.789167,-70.691766'}).click(function(){                     
     
        $('#Puerto').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                });
                               
                   });

//*********************************************************************************************************************************************************************

$('#Romana').load('init',function(){
  
      $('#Romana').gmap({ 'center':'18.422718,-68.99217', 'zoom':17});

        $('#Romana').gmap('addMarker',{'position':'18.422718,-68.99217'}).click(function(){                     
     
        $('#Romana').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                });
                               
                   });
                   
 //************************************************************************************************************************************************************************
 
 

 
 
$('#ocoa').load('init',function(){
  
      $('#ocoa').gmap({ 'center':'18.541944,-70.507541', 'zoom':17});

        $('#ocoa').gmap('addMarker',{'position':'18.541944,-70.507541'}).click(function(){                     
     
        $('#ocoa').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img      src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                });
                               
                   });
                   
                   
 //********************************************************************************************************************************************************************************
 
 
$('#santiago').load('init',function(){
  
      $('#santiago').gmap({ 'center':'19.467811,-70.689512', 'zoom':17});

        $('#santiago').gmap('addMarker',{'position':'19.467811,-70.689512'}).click(function(){                     
     
        $('#santiago').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                });
                               
                   });
                   
                   
                   
//*************************************************************************************************************************************************************************************                   
                   
 
   $('#moca').load('init',function(){
  
      $('#moca').gmap({ 'center':'   19.387647,-70.530028', 'zoom':17});

        $('#moca').gmap('addMarker',{'position':'   19.387647,-70.530028'}).click(function(){                     
     
        $('#moca').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                });
                               
                   });                  
             

//*****************************************************************************************************************************



                   
 //*************************************************************************************                  
/*$(document).ready(function(e) {
   
   if(  localStorage.getItem('nombre')){
	   
	   
	   }
	
	
	
	
	
});*/

//***********************************************************************************************************


$(document).ready(function(e) {
   
if(localStorage.getItem('direccion')=="Av. Independencia #200, Centro de los Heroes"){
	
 $('#por').load('pageshow',function(){
            
   

          $('#por').gmap({ 'center':'18.449545,-69.929162', 'zoom':17});
		   
                     $('#por').gmap('addMarker',{'position':'18.449545,-69.929162'}).click(function(){                     
     
                         $('#por').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this)
                                
                                }); $('#por').gmap('addMarker',{'position':'18.449922,-69.928843','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
           
                                           $('#por').gmap('openInfoWindow',{'content': 'Edifcion #1'},this)
                    
                                             });  $('#por').gmap('addMarker',{'position':'18.44984,-69.929269','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                  
                                                            $('#por').gmap('openInfoWindow',{'content': 'Edifcion #2'},this)
                    
                                                                        }); $('#pageLoand').gmap('addMarker',{'position':'18.449461,-69.928896 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                
                                                                        $('#por').gmap('openInfoWindow',{'content': 'Edifcion #3'},this)
 
                                                                            }); $('#por').gmap('addMarker',{'position':'18.449197,-69.929645 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                    $('#por').gmap('openInfoWindow',{'content': 'Edifcion #4'},this)

                                                                                            });$('#por').gmap('addMarker',{'position':'18.449504,-69.929741 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     
                
                                                                                                $('#por').gmap('openInfoWindow',{'content': 'Edifcion #10'},this)

                                                                                                    });$('#por').gmap('addMarker',{'position':'18.44925,-69.931946 ','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                    $('#por').gmap('openInfoWindow',{'content': 'Edifcion #9'},this)

                                                                                                });$('#por').gmap('addMarker',{'position':'18.449736,-69.931463','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                    $('#por').gmap('openInfoWindow',{'content': 'Edifcion #6'},this)

                                                                                                        }); $('#por').gmap('addMarker',{'position':'18.449614,-69.931367','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                        $('#por').gmap('openInfoWindow',{'content': 'Edifcion #5'},this)

                                                                                                            });$('#por').gmap('addMarker',{'position':'18.449051,-69.931908','icon':'http://www.publispain.com/iconos/edificios/Temple_02.gif'}).click(function(){                     

                                                                                                                $('#por').gmap('openInfoWindow',{'content': 'Edifcion #9'},this)
                   });
              }); 
       
        


}

});


//*************************************************************************************************

$(document).ready(function(e) {
   
   $('#notas').html(localStorage.getItem('Notas'));
    
});



function CargarNota(){
	
var matri=formLogin.matric.value;	

	
$.ajax({    
 
type: "GET",

url: "CargarCalificaciones.php",

data: "matri="+matri,

success: function(msg){

 alert(msg);

} 

  
});	



} 
