
$(document).ready(function(){
   
   

   $.getJSON('https://graph.facebook.com/Jdayhana',function(json){
       
         alert(json.name);
     
       
      });    
    
    
    });


$(document).ready(function(){
    
  $("#twetter").oneFBLike({
      
  appID:'155392544656734'      
      
      });
     
           });   