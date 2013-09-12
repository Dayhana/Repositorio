
$(document).ready(function(){
    
 var myMarkers = {"markers": [
     
   {"latitude": " 18.507931,-69.856005", "longitude":"-70.530127", "icon": "logo.gif", "baloon_text": 'This is <strong>Texas</strong>'}
    
  ]
};
    
            $('#map').gmap({ 'center': '18.507931,-69.856005', 'zoom':18}); 
         
               //$('#map').gmap({ 'zoom':125});
               
                 $('map').gmap({'icon':'logo.gif'});
                 
                 //$('map').gmap({'mapTypeId': 'MapTypeId.ROADMAD'});
                 
                //$('map').gmap('addMarker',{'position': '18.507931,-69.856005'});
               



	 });
 
 
 
 function Subir(){

  alert("desde el metodo"); 
$('#map_canvas').gmap('addMarker', {'position': '57.7973333,12.0502107', 'bounds': true}).click(function() {
	$('#map_canvas').gmap('openInfoWindow', {'content': 'Hello World!'}, this);
         
     // alert("desde el metodo"); 
});   
     
     
     

       
      /* $('#map_canvas').gmap({ 'center': '18.507931,-69.856005', 'zoom':18}); 
         
            
               //$('#map').gmap({ 'zoom':125});
               
                 $('map_canvas').gmap({'icon':'logo.gif'});
                 
                 $('map_canvas').gmap({'mapTypeId': 'MapTypeId.ROADMAD'});
                 
                //$('map').gmap('addMarker',{'position': '18.507931,-69.856005'});
               

     
     
    
     
//**************************************************


     /*    var ima='logo.gif';
		 
		 var latitud= new google.maps.LatLng(18.449545,-69.929162);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
        
		
		var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
*/
  if(map==null){
      
            
                 alert("no tengo nada");
                                    
                 
     }else{
            
        alert("Tengo algo");      
         }
     }   
         
       $(document).ready(function(){  
     
      $('map').mapmarker({
    
       zoom:  18,
       center: 'Dominican Republic',
       markers: mark
    
    });
	 });
  
  //var latitud= new google.maps.LatLng(18.449545,-69.929162);
         
    // ("#map").Gmap({'center':latitud})
    
 // var  yourStartLatLng = new google.maps.LatLng (18.449545,-69.929162);
 // $(document).on('pageshow', '#main', function() {  
              //alert("Hello");	
                 
           
			         

                 

    
       //  });
 