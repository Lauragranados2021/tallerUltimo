<?php
$option=$_GET['option'];
if($option==1){
$jsondata=$_GET['data'];
$codigos=json_encode($jsondata);
}