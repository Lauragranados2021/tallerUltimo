<?php

//$file_json=__DIR__.'/files/Estudiantes.json';
$holis=file_get_contents(__DIR__ . '/Estudiantes.json');
var_dump($holis);
$codigos=json_decode($holis,true);