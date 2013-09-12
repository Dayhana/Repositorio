Direcciones de la Universidad
SEDE PRINCIPAL

Ave. Independencia #200, Santo Domingo, República Dominicana
Tel. (809) 533-7733
Fax 535-0084-mail: info@udoym.edu.do

EXTENSION DE SANTO DOMINGO ESTE

Av. San Vicente de Paul Esq. Av. Mella, Plaza Megacentro, Santo Domingo, República Dominicana
Tel. (809) 788-7692
E-mail: labreu@udoym.edu.do

EXTENSION DE OCOA

Av. Canada # 136, San José de Ocoa, República Dominicana.
Tel. (809) 558-3227
E-mail: rbaez@udoym.net

EXTENSION DE LA ROMANA

Calle Santa Rosa #73, La Romana, República Dominicana
Tel. (809) 556-4457
E-mail: amendez@udoym.edu.do

EXTENSION DE MOCA

Av. Ramón Cáceres, Moca, República Dominicana
Tel. (809) 578-3222
E-mail: mmolina@udoym.edu.do

EXTENSION DE PUERTO PLATA

Calle Isabel de Torres 57A, Puerto Plata, República Dominicana.
Tel. (809) 586-4554 / 586-2712
Fax (809) 970-2285
E-mail: lpolanco@udoym.edu.do

EXTENSION DE SANTIAGO

Av. Bartolome Colon # 53, Santiago, República Dominicana
Tel. (809) 583-4504
E-mail: yfranco@udoym.edu.do











 
 
  function initializeRecinto(){
  

  

         var ima='icono_correcto.png';
		 
		 var latitud= new google.maps.LatLng(ms+ma);
        
   		var mapOptions = {
        
          center: latitud,
		  
          zoom: 18,
          
          mapTypeId: google.maps.MapTypeId.ROADMAD
          
         };
        
		
		var map = new google.maps.Map(document.getElementById("recintos"),
            mapOptions);

			
        var mar = new google.maps.Marker({
       
	     
         tittle: 'Universidad Dominicana O&M',
         position: latitud,
		 icon:ima
	   
	   });
      
			mar.setMap(map);
			
			
		});	
	
}



------------------------------------------------------------------------------------------------


<button  data- role="button" width"50" height"50" onclick="SedeCentral()">SEDE PRINCIPAL</button>

<button  data- role="button" width"50" height"50" onclick=" RecintoSEste()"> EXT.SANTO DOMINGO ESTE</button>

<button  data- role="button" width"50" height"50" onclick=" RecintoOcoa()">EXT. MOCA</button>

<button  data- role="button" width"50" height"50" onclick="RecintoSanjOcoa()">EXT. DE OCOA </button>

<button  data- role="button" width"50" height"50" onclick="RecintoRomana()">EXT.  LA ROMANA </button>

<button  data- role="button" width"50" height"50" onclick="  RecintoPplata()">EXT. PUERTO PLATA</button>

<button  data- role="button" width"50" height"50" onclick="RecintoSantiago()">EXT. SANTIAGO </button>

  