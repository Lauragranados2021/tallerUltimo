<?php
$option=$_GET['option'];
if($option==1){
$jsondata=$_GET['data'];
echo json_encode($jsondata);
}