     $(document).ready(function(){
 
      var date= new Date();
      var veint;
      
   a=[ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
   b=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
   
     var mes=date.getMonth()+1;
  
   var stringmes=a[date.getMonth()];
  var dia=b[date.getDay()-1];
   
           $('#fecha').html(dia+" "+date.getDate() +'  de '+ stringmes +' '+date.getFullYear());        
             
          
         
      
    if(date.getHours()>11){
    
      veint=date.getHours()-12;
	
		 //$scope.pm='pm';
		 zona='pm';
        
		 }else{
			 
			date.getHours();
             zona='am';			
            // $scope.pm='am';
         veint=date.getHours();
       
        }  
        
       $('#hora').html( veint+':'+date.getMinutes()+zona);  
             
               
 //  alert(veint);
   //$('#hora').html(veint+':'+date.getMinutes()+zona);
       //$('#hora').html(veint+':'+date.getMinutes()+zona);   
});
