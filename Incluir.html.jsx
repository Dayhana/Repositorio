<html ng-app>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <title></title>
  
 
  
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js "></script>
    
 	<script src="prototype.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
    
    <script src="angular.min.js"></script>
  <!-- Extra Codiqa features -->
  <link rel="stylesheet" href="codiqa.ext.css">
  
  <!-- jQuery and jQuery Mobile -->
  <script src="https://d10ajoocuyu32n.cloudfront.net/jquery-1.9.1.min.js"></script>
  
  <script src="https://d10ajoocuyu32n.cloudfront.net/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>
  <!-- Extra Codiqa features -->
  
  <script src="https://d10ajoocuyu32n.cloudfront.net/codiqa.ext.js"></script>



<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript" src="jquery.ui.map.js"></script>



<script>

 
 $(document).ready(function(){




            $('#map_canvas').gmap({ 'center': '18.507931,-69.856005', 'zoom':18}); 
         
               //$('#map').gmap({ 'zoom':125});
               
                 $('map_canvas').gmap({'icon':'logo.gif'});
                 
                 //$('map').gmap({'mapTypeId': 'MapTypeId.ROADMAD'});
                 
                //$('map').gmap('addMarker',{'position': '18.507931,-69.856005'});
               



	 });



</script>
</head>
<body>


              

 <div id="map"></div>
      
 
    
</body>
</html>