<?php
$nombre=$_POST['name'];
$apellido=$_POST['surname'];
$codigo=$_POST['id'];
$edad=$_POST['edad'];
$modo=$_POST['mode'];
$disciplina=$_POST['discipline'];
$evento=$_POST['event'];
$puesto=$_POST['position'];

////////////////////////////////////////
$datico = $_POST['code'];

/**
 * ==========================================
 * Escribir Json desde PHP
 * ==========================================
 */
$array=array("id"=>$codigo,"name"=>$nombre,"surname"=>$apellido,"edad"=>$edad,
    "discipline"=>$disciplina,"mode"=>$modo,"event"=>$evento,"position"=>$puesto);
if(file_exists('js\Estudiantes.json')){
    $contenido = file_get_contents('js\Estudiantes.json');
    $data =json_decode($contenido);
    array_push($data,$array);
    file_put_contents('js\Estudiantes.json',json_encode($data));
}
/**
 * ==============================================
 * Eliminar un Participante
 * ==============================================
 */

$this->db = json_decode(file_get_contents('js\Estudiantes.json'), true);
$index_num = 0;
$aux=$this->db;//$aux innecesario
foreach($aux as $key => $url) {
    if($url['id'] == $this->$datico) {
        unset($this->db[$key]);
    }

    $index_num++;//innecesario,
}
unset($aux);
?>