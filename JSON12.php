<?php
include("JSON.php");

$_GET['jso'];

if($_GET['jso']=='recinto'){
   
   $xml.=array('recinto'=> 1);
   
 }else if($_GET['jso']==2){
 
  $xml=array('nombre'=> sofia);
 }
 $da="datos". "";
 
  echo "datos:".json_encode($xml);

































?>
