
  $('#pageLoand').load('pageshow',function(){
       
              // alert(localStorage.getItem('direccion'));
           
                     $('#pageLoand').gmap({ 'center':'18.449545,-69.929162', 'zoom':18}); 
                    
             

     });
   //***********************************************************************************************
   
   //--------1------------
  function SedeCentral(){
      
         var ima='logo.gif';
		 
		 var latitud= new google.maps.LatLng(18.449545,-69.929162);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
        
		
		var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);

		
//}
}
  //**********************************************************************************************************************************************
  
  
  
  
  
  function RecintoSEste(){

	//2	 
		 var latitud= new google.maps.LatLng(18.507931,-69.856005);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
        	var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);
	
}
  
//****************************************************************************************************************************************************



  function RecintoOcoa(){
  //3

		 
		 var latitud= new google.maps.LatLng(19.387631,-70.530127);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
         	var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);
	
}
  
     
 //**************************************************************************************************************************************************************** 
   function RecintoPplata(){
  
 
		 //4
		 var latitud= new google.maps.LatLng( 19.789167,-70.691766);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
        
       	var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);
	
}
  
 
 //****************************************************************************************************************************************************************
 
 
 
 function RecintoRomana(){
  
//5
		 
		 var latitud= new google.maps.LatLng(  18.422718,-68.99217);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
     
      	var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);
	
}
       
     
  //*******************************************************************************************************************************************************************
  
  
  
function RecintoSanjOcoa(){
  
//6
		 
		 var latitud= new google.maps.LatLng( 18.541944,-70.507541);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
     
           	var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);
	
}
  
    //******************************************************************************************************************************************************************
    
    
    
function RecintoSantiago(){
  
  //7
		 
		 var latitud= new google.maps.LatLng( 19.467811,-70.689512);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
           	var map = new google.maps.Map(document.getElementById("pageLoand"),
            mapOptions);
	
}
  
        