<?php

class Persona
{
private $nombre;
private $apellido;
private $codigo;
private $disciplina;
private $modo;
private $competencia;
private $puesto;
private $edad;

    /**
     * @param $nombre
     * @param $apellido
     * @param $codigo
     * @param $disciplina
     * @param $grupos
     * @param $competencia
     * @param $puesto
     */
    public function __construct($nombre, $apellido, $codigo,$edad, $disciplina, $modo, $competencia, $puesto)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->codigo = $codigo;
        $this->edad=$edad;
        $this->disciplina = $disciplina;
        $this->modo = $modo;
        $this->competencia = $competencia;
        $this->puesto = $puesto;
    }

    /**
     * @return mixed
     */
    public function getModo()
    {
        return $this->modo;
    }

    /**
     * @param mixed $modo
     */
    public function setModo($modo)
    {
        $this->modo = $modo;
    }

    /**
     * @return mixed
     */
    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * @param mixed $edad
     */
    public function setEdad($edad)
    {
        $this->edad = $edad;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /**
     * @return mixed
     */
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * @param mixed $apellido
     */
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    /**
     * @return mixed
     */
    public function getCodigo()
    {
        return $this->codigo;
    }

    /**
     * @param mixed $codigo
     */
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
    }

    /**
     * @return mixed
     */
    public function getDisciplina()
    {
        return $this->disciplina;
    }

    /**
     * @param mixed $disciplina
     */
    public function setDisciplina($disciplina)
    {
        $this->disciplina = $disciplina;
    }

    /**
     * @return mixed
     */


    /**
     * @return mixed
     */
    public function getCompetencia()
    {
        return $this->competencia;
    }

    /**
     * @param mixed $competencia
     */
    public function setCompetencia($competencia)
    {
        $this->competencia = $competencia;
    }

    /**
     * @return mixed
     */
    public function getPuesto()
    {
        return $this->puesto;
    }

    /**
     * @param mixed $puesto
     */
    public function setPuesto($puesto)
    {
        $this->puesto = $puesto;
    }
    public function enviar()
    {

        $nombre_archivo =  './dd.json';


// Primero vamos a asegurarnos de que el archivo existe y es escribible.

        if (is_writable($nombre_archivo)) {

            // En nuestro ejemplo estamos abriendo $nombre_archivo en modo de adición.
            // El puntero al archivo está al final del archivo
            // donde irá $contenido cuando usemos fwrite() sobre él.
            if (!$gestor = fopen($nombre_archivo, 'a')) {
                echo "No se puede abrir el archivo ($nombre_archivo)";
                exit;
            }

            // Escribir $contenido a nuestro archivo abierto.
            if (fwrite($gestor, $this->nombre) === FALSE) {
                echo "No se puede escribir en el archivo ($nombre_archivo)";
                exit;
            }

            echo "Éxito, se escribió ($this->nombre) en el archivo ($nombre_archivo)";

            fclose($gestor);

        } else {
            echo "El archivo $nombre_archivo no es escribible";
        }
    }

}