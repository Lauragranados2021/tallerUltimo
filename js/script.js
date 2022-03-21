var prod2;

/*
* funcion de inicio del metodo
* */
function begin() {
    const xhr = new XMLHttpRequest();
    //activamos el modo de asincrono con true
    xhr.open('GET', './js/loadStudent.php', true);
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
participants.addEventListener('change', function () {
    var selectedOption = this.options[participants.selectedIndex];
    //ordena segun el nombre
    const Orderparti = prod2.sort((participant1, participant2) => participant1.name.localeCompare(participant2.name))
    Orderparti.forEach((participant) => {
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
    var div = document.getElementById("tablita ");
    //creando etiqueta para agregar filas (row)
    var row = document.createElement('tr')
    // creando etiquetas para agregar columnas (col)
    var col = document.createElement('td')
    //agregando la primera columna del indice de filas
    col.appendChild(document.createTextNode(name))
    //agregamos columna a la fila
    row.appendChild(col)

    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(surname))
    //agregamos columna  a la fila
    row.appendChild(col)

    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(id))
    //agregamos columna  a la fila
    row.appendChild(col)


    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(discipline))
    //agregamos columna  a la fila
    row.appendChild(col)


    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(mode))
    //agregamos columna  a la fila
    row.appendChild(col)


    //creamos un nuevo espacio de columna
    col = document.createElement('td')
//en con esta el numero primo
    col.appendChild(document.createTextNode(event))
//agregamos columna  a la fila
    row.appendChild(col)


//creamos un nuevo espacio de columna
    col = document.createElement('td')
//en con esta el numero primo
    col.appendChild(document.createTextNode(position))
//agregamos columna  a la fila
    row.appendChild(col)

    body.appendChild(row)
}

/*function coincide() {

}*/


function inicio() {
    const xhr3 = new XMLHttpRequest();
    xhr3.open('get', './js/event.json', true);
    xhr3.onreadystatechange = () => {
        if (xhr3.readyState === 4 && xhr3.status === 200) {
            const data1 = JSON.parse(xhr3.responseText)
            console.log(data1);
            data1.forEach(event => document.getElementById('inputEvent').add(new Option(event.event, event.id)))
        }

    }
    xhr3.send(null)
}

begin();


inicio();
document.getElementById('crear').addEventListener('click', () => {


    var data = {
        code: document.getElementById('inputEmail4').value,
        nombre: document.getElementById('inputPassword4').value,
        apellido: document.getElementById('inputAddress').value,
        edad: document.getElementById('inputAddress2').value,
        modo: document.getElementById('inputModo').value,
        disciplina: document.getElementById('inputDiscipline').value,
        evento: document.getElementById('inputEvent'),
        posicion: document.getElementById('inputposicion').value,
    }

    var num = document.getElementById('inputEmail4').value;
    alert(num);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `loadData.php?data=${num}`, true)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('inputCity').length = 0
            const towns = JSON.parse(xhr.responseText)
            //towns.forEach( town =>  document.getElementById('inputCity').add(new Option(town.name,town.code)))
        }

    }
    //const hola=JSON.stringify(data);
    // alert(hola);
    xhr.send(null);
})