<?php

/*
 * Espacio para cargar desde el json el php
 * */

$file = __DIR__."/event.json";
/**
 * fopen(filename, mode, include_path, context)
 * modos: https://www.w3schools.com/php/func_filesystem_fopen.asp
 */
$fp = fopen($file,"r");
/**
 * fread()
 * lee un archivo previamente abierto
 * archivo , tamaño
 */
$datos = fread($fp, filesize($file));
fclose($fp);

echo   $datos;