var contCorrectas = [0, 0, 0, 0, 0]; //[Am,Eu,Af,As,Oc]

function crearAleArray(tamano) {
    var Ale = new Array(tamano);
    for (i = 0; i < tamano; i++) {
        Ale[i] = i;
    }
    Ale = Ale.sort(function () {
        return Math.random() - .5;
    });
    
    return Ale;
}

var AleAm = crearAleArray(TestAmerica.length);
var AleEu = crearAleArray(TestEuropa.length);
var AleAf = crearAleArray(TestAfrica.length);
var AleAs = crearAleArray(TestAsia.length);
var AleOc = crearAleArray(TestOceania.length);


function generaContenido(tot, totNombre, color, posicionContCorrectas, AleArray, AleArrayNom) {
    if (contCorrectas[posicionContCorrectas] < 10) {
        document.getElementById("preguntas").innerHTML = "";
        document.getElementById("respuesta1").innerHTML = "";
        document.getElementById("respuesta1").style.backgroundColor = "#fff";
        document.getElementById("respuesta2").innerHTML = "";
        document.getElementById("respuesta2").style.backgroundColor = "#fff";
        document.getElementById("respuesta3").innerHTML = "";
        document.getElementById("respuesta3").style.backgroundColor = "#fff";
        document.getElementById("respuesta4").innerHTML = "";
        document.getElementById("respuesta4").style.backgroundColor = "#fff";

        var pregAleatoria = AleArray.shift();

        nombreJson = tot[pregAleatoria];
        varCont = tot;
        varAleArray = AleArray;

        var h2Preguntas = document.createElement('h2');
        h2Preguntas.innerHTML = nombreJson.pregunta;

        var h3Resp1 = document.createElement('h3');
        h3Resp1.innerHTML = nombreJson.resposta1;
        h3Resp1.id = "rh1";
        h3Resp1.setAttribute("onclick", "comprovar(nombreJson.resposta1,nombreJson.correcte," + posicionContCorrectas + ",'" + totNombre + "','" + color + "', '1','" + AleArrayNom + "')"); //"+xxx+"= no palabra sino valor

        var h3Resp2 = document.createElement('h3');
        h3Resp2.innerHTML = nombreJson.resposta2;
        h3Resp2.id = "rh2";
        h3Resp2.setAttribute("onclick", "comprovar(nombreJson.resposta2,nombreJson.correcte," + posicionContCorrectas + ",'" + totNombre + "','" + color + "', '2','" + AleArrayNom + "')");

        document.getElementById("preguntas").appendChild(h2Preguntas);
        document.getElementById("respuesta1").appendChild(h3Resp1);
        document.getElementById("respuesta2").appendChild(h3Resp2);

        document.getElementById("pag6").style.backgroundColor = color;
        document.getElementById("pag9").style.backgroundColor = color;

        if (nombreJson.resposta3 !== undefined) {

            document.getElementById("respuesta3").style.display = "flex";
            document.getElementById("respuesta4").style.display = "flex";

            var h3Resp3 = document.createElement('h3');
            h3Resp3.innerHTML = nombreJson.resposta3;
            h3Resp3.id = "rh3";

            var h3Resp4 = document.createElement('h3');
            h3Resp4.innerHTML = nombreJson.resposta4;
            h3Resp4.id = "rh4";

            document.getElementById("respuesta3").appendChild(h3Resp3);
            h3Resp3.setAttribute("onclick", "comprovar(nombreJson.resposta3,nombreJson.correcte," + posicionContCorrectas + ",'" + totNombre + "','" + color + "', '3','" + AleArrayNom + "')");

            document.getElementById("respuesta4").appendChild(h3Resp4);
            h3Resp4.setAttribute("onclick", "comprovar(nombreJson.resposta4,nombreJson.correcte," + posicionContCorrectas + ",'" + totNombre + "','" + color + "', '4','" + AleArrayNom + "')");
        } else {
            document.getElementById("respuesta3").style.display = "none";
            document.getElementById("respuesta4").style.display = "none";
        }
    } else {
        Time('pag6', 'pag7_' + (posicionContCorrectas + 1), 1000);
    }
}

function comprovar(respuesta, correcta, posicionCont, totNombre, color, idRespuesta, AleArrayNom) {
    if (respuesta == correcta) {
        contCorrectas[posicionCont] = contCorrectas[posicionCont] + 1;
        document.getElementById("blancoM" + posicionCont).style.height = (100 - contCorrectas[posicionCont] * 10) + "%";
        document.getElementById("blanco" + posicionCont).style.height = (100 - contCorrectas[posicionCont] * 10) + "%";
        document.getElementById("respuesta" + idRespuesta).style.backgroundColor = "#fff";
        generaContenido(varCont, totNombre, color, posicionCont, varAleArray, AleArrayNom);
    } else {
        document.getElementById("respuesta" + idRespuesta).style.backgroundColor = "red";
        document.getElementById("rh" + idRespuesta).style.color = "#fff";
        document.getElementById("rh" + idRespuesta).innerHTML = "Aquesta no és";
    }
}


function outro(pagina, numero, time) {
    if (contCorrectas[0] == 10 && contCorrectas[1] == 10 && contCorrectas[2] == 10 && contCorrectas[3] == 10 && contCorrectas[4] == 10) {
        Time(pagina, 'pag8', time);
        document.getElementById("blancoM" + numero).style.height = "100%";
        document.getElementById("blanco" + numero).style.height = "100%";
        contCorrectas[0]=0;
        contCorrectas[1]=0;
        contCorrectas[2]=0;
        contCorrectas[3]=0;
        contCorrectas[4]=0;
    } else {
        Time(pagina, 'pag4', time);
    }
}
