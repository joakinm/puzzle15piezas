var arreglo = new Array();
function moverpieza()
{
    for (i=0;i<arreglo.length;i++)
    {
        document.getElementById("bt"+i).addEventListener("onclick",moverpieza());
    }
}

function crearpuzzle()
{
    var repite = false;
    var i;
    var j;
    var nrorandom = (Math.floor(Math.random() * 15))+1;
    for (j=0;j<15;j++)
    {
        while(repite == false && i<=arreglo.length)
        {
            if (arreglo[i] == nrorandom)
            {
                nrorandom = (Math.floor(Math.random() * 15))+1;
                i=0;    
            }
            else
            {
                i++;
            }
        }
     arreglo.push( nrorandom);
     i = 0;
    }
    arreglo.push("");
}

function armarpuzzle ()
{
    crearpuzzle();
    refrescarpuzzle();
}

function gano () 
{
    var i;
    var numerosbien;
    numerosbien = 0;
    i=0;
    while(numerosbien != 15 && i<=arreglo.length)
    {
        if (arreglo[i] == i+1)
        {
            numerosbien++;
            i++;
        }
        else
        {
            i++;
        }
    }
    if (numerosbien == 15)
    {
        alert('GANOOOOO!!!');
    }
}

function refrescarpuzzle()
{
    var i;
    gano ();
    document.getElementById("juego").innerHTML = "";
    for (i=0;i<arreglo.length;i++)
    {
        var Fichas = document.createElement('button');
        var texto = document.createTextNode(arreglo[i]);
        var divTexto = document.createElement('div');
        divTexto.setAttribute('class','juego');
        Fichas.appendChild(texto);
        Fichas.setAttribute("value",texto);
        Fichas.setAttribute("class","BtJuego");
        Fichas.setAttribute("name",i);
        Fichas.onclick = function(i)
        {
            var j= (arreglo.findIndex((element) => element == ""));
            var movimiento = event.currentTarget.name;
            if ((movimiento == (j+1) ) || (movimiento ==(j-1) ) || (movimiento == (j+4) ) || (movimiento == (j-4) ))
            {
            var valor = arreglo[movimiento];
            arreglo[event.currentTarget.name] = arreglo[j];
            arreglo[j] = valor;
            refrescarpuzzle ();
            }
            else{alert('no se puede hacer ese movimiento')}
        };
        divTexto.appendChild(Fichas);
        document.getElementById("juego").appendChild(divTexto);
    }
}
