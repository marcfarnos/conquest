function animar() {
    Time('pag0', 'pag1', 1500);

    Time('pag1', 'pag2', 6000);
}

function Time(pagA, pagB, tiempo) {
    setTimeout(desaparecer, tiempo, pagA);
    setTimeout(aparecer, tiempo + 1500, pagB);
}

function desaparecer(despag) {
    document.getElementById(despag).style.opacity = "0";
    document.getElementById(despag).style.pointerEvents = "none";
}

function aparecer(repag) {
    document.getElementById(repag).style.opacity = "1";
    document.getElementById(repag).style.pointerEvents = "auto";
    document.getElementById(repag).style.zIndex = "1";
}

function tierra() {
    document.getElementById('flecha').style.opacity = "1";
    document.getElementById('txt').style.opacity = "1";
    document.getElementById('tierra').src = "IMG/tierra%20BN.png";
    document.getElementById('tierra').style.pointerEvents = "none";
    document.getElementsByTagName('body')[0].style.backgroundColor = "#232323";

}

var leftActual = 0;

function slider(valor) {
    leftActual = leftActual + valor;

    if (leftActual <= -400)
        leftActual = -400;

    if (leftActual >= 0)
        leftActual = 0;

    document.getElementById('slider').style.left = leftActual + 'vw';
}
