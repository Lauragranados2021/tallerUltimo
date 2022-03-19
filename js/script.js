var xhr, xhr2;
var elementos;
var prod2;

function begin() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', './files/Estudiantes.json', true);
    elementos = document.getElementById("prod");
    xhr.onreadystatechange = sends;
    xhr.send(null);
}

function sends() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        prod2 = JSON.parse(xhr.responseText);
        prod2.sort((a, b) => a.ID.localeCompare(b.ID)).forEach(prods => elementos.add(new Option(prods.name, prods.ID)))
    }
}

const towns2 = document.getElementById("prod");
towns2.addEventListener('change', function ()  {
    var selectedOption = this.options[towns2.selectedIndex];
    const townsDpto = prod2.sort((town1, town2) => town1.name.localeCompare(town2.name))
    townsDpto.forEach((town) => {
        if (town.name == selectedOption.text) {
            funtionData(town.ID, town.name, town.surname, town.edad, town.discipline, town.mode, town.event);
        }
    });
});

function funtionData(name, description, type, price, stock, stockMin, dueDate) {
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
    col.appendChild(document.createTextNode(description))
    //agregamos columna  a la fila
    row.appendChild(col)

    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(type))
    //agregamos columna  a la fila
    row.appendChild(col)


    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(price))
    //agregamos columna  a la fila
    row.appendChild(col)


    //creamos un nuevo espacio de columna
    col = document.createElement('td')
    //en con esta el numero primo
    col.appendChild(document.createTextNode(stock))
    //agregamos columna  a la fila
    row.appendChild(col)



    //creamos un nuevo espacio de columna
    col = document.createElement('td')
//en con esta el numero primo
    col.appendChild(document.createTextNode(stockMin))
//agregamos columna  a la fila
    row.appendChild(col)


//creamos un nuevo espacio de columna
    col = document.createElement('td')
//en con esta el numero primo
    col.appendChild(document.createTextNode(dueDate))
//agregamos columna  a la fila
    row.appendChild(col)

    body.appendChild(row)
}

/*function coincide() {

}*/


begin();