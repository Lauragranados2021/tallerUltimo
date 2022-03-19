var xhr, xhr2;
var elementos, ww;
var prod2, evento;

/*
* funcion de inicio del metodo
* */
function begin() {
    xhr = new XMLHttpRequest();
    //activamos el modo de asincrono con true
    xhr.open('GET', './files/Estudiantes.json', true);
    elementos = document.getElementById("participants");
    xhr.onreadystatechange = sends;
    xhr.send(null);
}
/*
* funcion para enviat los al select los espacios de memoria
* este metodo se efectua cada ve que cambie el readyChangue
* */
function sends() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        prod2 = JSON.parse(xhr.responseText);
        prod2.sort((a, b) => a.id.localeCompare(b.id)).forEach(prods => elementos.add(new Option(prods.name, prods.id)))
    }
}
/*
participants variable que toma lo del select
* Orderparti : variable participantes ordenada
* **/
const participants = document.getElementById("participants");
participants.addEventListener('change', function ()  {
    /*xhr2 = new XMLHttpRequest();
    xhr2.open('GET','./files/event.json',true)
    xhr2.onreadystatechange = ()=>{
        if (xhr2.readyState == 4 && xhr2.status == 200){
            ww = JSON.parse(xhr2.responseText);
       }
    }
    xhr2.send()
    console.log(ww)
    const code = document.getElementById('participants').value
    if (ww.sort((a,b)=> a.code.localeCompare(b.code)).filter(s => s.code == code)){
        evento = ww.event
    }*/


    var selectedOption = this.options[participants.selectedIndex];
    //ordena segun el nombre
    const Orderparti = prod2.sort((participant1, participant2) => participant1.name.localeCompare(participant2.name))
    Orderparti.forEach((participant) => {
        if (participant.name == selectedOption.text) {
            if (participant.event == 1){
                evento = "intercursos"
            }if (participant.event == 2){
                evento = "intercolegiados"
            }if (participant.event == 3){
                evento = "nacionales"
            }if (participant.event == 4){
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
begin();

/**
 * ===================================================================================
 * */
document.getElementById('crear').addEventListener('click',()=>{
    const code = document.getElementById('inputEmail4').value
    const nombre=document.getElementById('inputPassword4').value
    const apellido=document.getElementById('inputAddress').value
    const edad=document.getElementById('inputAddress2').value
    const modo=document.getElementById('inputModo').value
    const disciplina=document.getElementById('inputDiscipline').value;
    const evento=document.getElementById('inputEvent');
    const posicion=document.getElementById('inputposicion').value;



    const xhr = new XMLHttpRequest();
    xhr.open('get',`loadData.php?option=1&code=${code}&nombre=${nombre}&apellido=${apellido}
    &edad=${edad} &modo=${modo} &disciplina=${disciplina} &evento=${evento}  &posicion=${posicion}`,true)

    xhr.onreadystatechange = ()=>{
        if( xhr.readyState === 4 && xhr.status === 200 ){
            document.getElementById('inputCity').length = 0
            const towns = JSON.parse( xhr.responseText )
            towns.forEach( town =>  document.getElementById('inputCity').add(new Option(town.name,town.code)))
        }

    }
    xhr.send(null)
})
