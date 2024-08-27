let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //el usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorcaja = document.querySelector('#ValorUsuario');
    valorcaja.value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', ` escoge un numero entre el 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    // generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // deshabilitar boton nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // inicializar el numero de intentos 
    intentos = 1;
}
condicionesIniciales();
