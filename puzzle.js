let arreglo = new Array();
function moverpieza() {
    for (i = 0; i < arreglo.length; i++) {
        document.getElementById('bt'+i).addEventListener('onclick', moverpieza());
    }
}

function crearpuzzle() {
    let posicion;
    let contador;
    let nrorandom = (Math.floor(Math.random() * 15)) + 1;
    for (contador = 0; contador < 15; contador++) {
        while (posicion <= arreglo.length) {
            if (arreglo[posicion] == nrorandom) {
                nrorandom = (Math.floor(Math.random() * 15)) + 1;
                posicion = 0;    
            }
            else {
                posicion++;
            }
        }
     arreglo.push(nrorandom);
     posicion = 0;
    }
    arreglo.push('');
}

function armarpuzzle() {
    crearpuzzle();
    refrescarpuzzle();
}

function gano() {
    let i = 0;
    let numerosbien = 0;
    while(numerosbien != 15 && i <= arreglo.length) {
        if (arreglo[i] == i + 1) {
            numerosbien++;
            i++;
        }
        else {
            i++;
        }
    }
    if (numerosbien == 15) {
        alert('GANOOOOO!!!');
    }
}

function refrescarpuzzle() {
    let contador;
    gano();
    document.getElementById('juego').innerHTML = '';
    for (contador = 0; contador < arreglo.length; contador++) {
        let fichas = document.createElement('button');
        const texto = document.createTextNode(arreglo[contador]);
        let divTexto = document.createElement('div');
        divTexto.setAttribute('class', 'juego');
        fichas.appendChild(texto);
        fichas.setAttribute('value', texto);
        fichas.setAttribute('class', 'BtJuego');
        fichas.setAttribute('name', contador);

        fichas.onclick = (i) => {
            const j = (arreglo.findIndex((element) => element == ''));
            const movimiento = event.currentTarget.name;
            if ((movimiento == (j + 1) ) || (movimiento == (j - 1) ) || (movimiento == (j + 4) ) || (movimiento == (j - 4) )) {
            const valor = arreglo[movimiento];
            arreglo[event.currentTarget.name] = arreglo[j];
            arreglo[j] = valor;
            refrescarpuzzle();
            }
            else {
                alert('no se puede hacer ese movimiento');
            }
        };
        divTexto.appendChild(fichas);
        document.getElementById('juego').appendChild(divTexto);
    }
}
