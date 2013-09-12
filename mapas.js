function mapa(){
      
         var ima='logo.gif';
		 
		 var latitud= new google.maps.LatLng(18.449545,-69.929162);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
        
		
		var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);


}