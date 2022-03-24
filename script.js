var prod2, data3;

begin();
/*
* funcion de inicio del metodo
* */
function begin() {
    const xhr = new XMLHttpRequest();
    //activamos el modo de asincrono con true
    xhr.open('GET', './loadStudent.php', true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            prod2 = JSON.parse(xhr.responseText);
            prod2.forEach(prods => document.getElementById("participants").add(new Option(prods.name, prods.id)))
        }
    };
    xhr.send(null);
}

/*
participants variable que toma lo del select
* Orderparti : variable participantes ordenada
* **/
const participants = document.getElementById("participants");
participants.addEventListener('change', function ListData () {
    var selectedOption = this.options[participants.selectedIndex];
    //ordena segun el nombre
    //const Orderparti = prod2.sort((participant1, participant2) => participant1.name.localeCompare(participant2.name))
    prod2.forEach((participant) => {
        if (participant.name == selectedOption.text) {
            if (participant.event == 1) {
                evento = "intercursos"
            }
            if (participant.event == 2) {
                evento = "intercolegiados"
            }
            if (participant.event == 3) {
                evento = "nacionales"
            }
            if (participant.event == 4) {
                evento = "departametales"
            }
            funtionData(participant.id, participant.name, participant.surname, participant.position, participant.discipline, participant.mode, evento);
        }
    });
});

function funtionData(id, name, surname, position, discipline, mode, event) {
    var div = document.getElementById("listTable");
    //creando etiqueta para agregar filas (row)
    var row = document.createElement('tr')
    // creando etiquetas para agregar columnas (col)
    var col2 = document.createElement('td')
    //agregando la primera columna del indice de filas
    col2.appendChild(document.createTextNode(name))
    //agregamos columna a la fila
    row.appendChild(col2)

    //creamos un nuevo espacio de columna
    col2 = document.createElement('td')
    //en con esta el numero primo
    col2.appendChild(document.createTextNode(surname))
    //agregamos columna  a la fila
    row.appendChild(col2)

    //creamos un nuevo espacio de columna
    col2 = document.createElement('td')
    //en con esta el numero primo
    col2.appendChild(document.createTextNode(id))
    //agregamos columna  a la fila
    row.appendChild(col2)


    //creamos un nuevo espacio de columna
    col2 = document.createElement('td')
    //en con esta el numero primo
    col2.appendChild(document.createTextNode(discipline))
    //agregamos columna  a la fila
    row.appendChild(col2)


    //creamos un nuevo espacio de columna
    col2 = document.createElement('td')
    //en con esta el numero primo
    col2.appendChild(document.createTextNode(mode))
    //agregamos columna  a la fila
    row.appendChild(col2)


    //creamos un nuevo espacio de columna
    col2 = document.createElement('td')
//en con esta el numero primo
    col2.appendChild(document.createTextNode(event))
//agregamos columna  a la fila
    row.appendChild(col2)


//creamos un nuevo espacio de columna
    col2 = document.createElement('td')
//en con esta el numero primo
    col2.appendChild(document.createTextNode(position))
//agregamos columna  a la fila
    row.appendChild(col2)

    div.appendChild(row)
}

/**
 * obtener valor codigo de la seleccion
 */






/*
*========================================================================
* funciones para crear participante
* ======================================================================
* */

function inicio() {
    const xhr3 = new XMLHttpRequest();

    xhr3.open('GET', 'loadEvent.php', true);
    xhr3.onreadystatechange = () => {
        if (xhr3.readyState === 4 && xhr3.status === 200) {
            const data1 = JSON.parse(xhr3.responseText);
            data1.forEach(event => document.getElementById("inputEvent").add(new Option(event.event, event.id)))
        }
    };
    xhr3.send(null)
}

/**
 * Metodos para cuando de click envie la informaciona al php;
 */

inicio();

$('#Crear').click(function (){
    var code =document.getElementById('inputEmail4').value;
    var nombre=document.getElementById('inputPassword4').value;
    var apellido=document.getElementById('inputAddress').value;
    var edad=document.getElementById('inputAddress2').value;
    var modo=document.getElementById('inputModo').value;
    var disciplina=document.getElementById('inputDiscipline').value;
    var evento=document.getElementById('inputEvent').value;
    var posicion=document.getElementById('inputposicion').value;


        if (code != "" && nombre != "" && apellido != "" && edad != "" && modo != "" && disciplina != "" && evento != "" && posicion != ""){
            var ruta="id="+code+"&name="+nombre+"&surname="+apellido+"&edad="
                +edad+"&discipline="+disciplina+"&mode="+modo+"&event="+evento+"&position="+posicion;
            $.ajax({
                url: 'loadData.php',
                type: 'POST',
                data: ruta
            })
            alert("Elemento Agregado")

        }else{
            alert("por favor llene todos los espacios");
        }



})

/**
 * ===================================================
 * Funciones para Elminar perticipante
 * ===================================================
 */

var arrayNombres;
var codObten;


const xhr5 = new XMLHttpRequest();

xhr5.open('GET', 'loadStudent.php', true);
xhr5.onreadystatechange = () => {
    if (xhr5.readyState === 4 && xhr5.status === 200) {
        arrayNombres = JSON.parse(xhr5.responseText);
        //alert(arrayNombres)
    }
};
xhr5.send(null)


document.getElementById('deleteButton').addEventListener('click',function () {
    //obtener valor del selector
    //cargamos variable con el archivo
    const sel = document.getElementById('participants')
    //debo obtener el codigo del que deseo eliminar
    var selectedOption = sel.options[sel.selectedIndex];
    var envio = selectedOption.text
    arrayNombres.forEach((names)=>{
        if (names.name === envio){
            codObten = names.id

        }
    })
    var send = "code="+codObten;
    $.ajax({
     url: 'loadEliminar.php',
     type: 'POST',
     data: send
 })
    //alert(codObten)
    document.getElementById("form2").reset()

begin();

})

/**
 * ================================================
 * Funciones de validaciones
 * ================================================
 */

function validate(){
    var arrayStudent;
    var codeCom =document.getElementById('inputEmail4').value;

    const xhr6 = new XMLHttpRequest();
    //activamos el modo de asincrono con true
    xhr6.open('GET', './loadStudent.php', true);
    xhr6.onreadystatechange = () => {
        if (xhr6.readyState === 4 && xhr6.status === 200) {
            arrayStudent = JSON.parse(xhr6.responseText);
        }
    };
    xhr6.send(null);
    arrayStudent.forEach((cod) =>{
        if(cod.id === codeCom){
            return false;
        }if(cod.id !== codeCom){
            return true;
        }


    })

}













