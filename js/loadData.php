<?php
require_once './Persona.php';
$nombre=$_REQUEST['nombre'];
$apellido=$_REQUEST['apellido'];
$codigo=$_REQUEST['codigo'];
$edad=$_REQUEST['edad'];
$modo=$_REQUEST['modo'];
$disciplina=$_REQUEST['disciplina'];
$evento=$_REQUEST['evento'];
$puesto=$_REQUEST['posicion'];




$persona= new Persona($nombre,$apellido,$codigo,$edad,$disciplina,$modo,$evento,$puesto);
$out= new stdClass();
$out->nombre=$persona->getNombre();
$out->apellido=$persona->getApellido();
$out->edad=$persona->getEdad();
$out->codigo=$persona->getCodigo();
$out->modo=$persona->getModo();
$out->disciplina=$persona->getDisciplina();
$out->evento=$persona->getCompetencia();
$out->puesto=$persona->getPuesto();

echo json_encode($persona->enviar());

?>



