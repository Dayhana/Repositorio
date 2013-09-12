//function carga(){  
 $(document).ready(function(){

//  if( localStorage.getItem('direccion')=="Av. Independencia #200, Centro de los Heroes"){
         
            
       //    $('#pageLoand').load('init',function(){
            
       
      //var info=gooogle.maps.InfoWindow({
      //content: 'Helllo motor'})    
    // alert(localStorage.getItem('direccion'));
      
                     $('#pageLoand').gmap({ 'center':'18.449545,-69.929162', 'zoom':18});
                      $('#pageLoand').gmap('addMarker',{'position':'18.449545,-69.929162'}).click(function(){                     
                    $('#pageLoand').gmap('openInfoWindow',{'content': 'Universidad Dominicana O&M <img src="https://lh5.googleusercontent.com/-tG6wdZWvo3k/Uc8DzWhwP3I/AAAAAAAAGq4/BGnl509WE3A/s90/2013-06-29"></img>'},this);
                   $.mobile.changePage('#pageLoand');                  
                  //})
                          
              }); 
       
 
      // }