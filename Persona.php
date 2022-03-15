<?php

class Persona
{
private $nombre;
private $apellido;
private $codigo;
private $disciplina;
private $grupos;
private $competencia;
private $puesto;

    /**
     * @param $nombre
     * @param $apellido
     * @param $codigo
     * @param $disciplina
     * @param $grupos
     * @param $competencia
     * @param $puesto
     */
    public function __construct($nombre, $apellido, $codigo, $disciplina, $grupos, $competencia, $puesto)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->codigo = $codigo;
        $this->disciplina = $disciplina;
        $this->grupos = $grupos;
        $this->competencia = $competencia;
        $this->puesto = $puesto;
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
    public function getGrupos()
    {
        return $this->grupos;
    }

    /**
     * @param mixed $grupos
     */
    public function setGrupos($grupos)
    {
        $this->grupos = $grupos;
    }

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

}