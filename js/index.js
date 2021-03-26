/*
*
*   Efecto Paralax
*
*
*/
$(document).ready(function () {

    $(window).scroll(function () {
        var barra = $(window).scrollTop();
        var posicion = barra * 0.10;

        $('body').css({
            'background-position': '0 -'+ posicion + 'px'
        });
    });

});


/*
*
*   Efecto Maquina de Escribir
*
*
*
*/
var textMaquinaEscribir = document.getElementById('maq-escb');
var str = textMaquinaEscribir.innerHTML;

textMaquinaEscribir.innerHTML = "";

var speed = 100;
var i= 0;
//efecto de escritura
function typeWrite(){
    if(i < str.length){
        textMaquinaEscribir.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}

setTimeout(typeWrite, speed);

