/*
*
*   Efecto Draggable
*
*
*
*/

/*const { Transform } = require("stream");*/
/*
$(document).ready(function () {
    $('#drag').draggable({
        containment: 'document',
        cursor: 'grabbing',
        delay: 100,
        cancel: '.content-drag-docs, .col-drag, .content-drag, .border-drag, .btn-window-show',
        stack: '.cnt-drag',
        distance: 0
    });
    $('#drag1').draggable({
        containment: 'document',
        cursor: 'grabbing',
        delay: 100,
        cancel: '.content-drag-docs, .col-drag, .content-drag, .border-drag, .btn-window-show',
        stack: '.cnt-drag',
        distance: 0
    });
    $('#drag2').draggable({
        containment: 'document',
        cursor: 'grabbing',
        delay: 100,
        cancel: '.content-drag-docs, .col-drag, .content-drag, .border-drag, .btn-window-show',
        stack: '.cnt-drag',
        distance: 0
    });
    $('#drag3').draggable({
        containment: 'document',
        cursor: 'grabbing',
        delay: 100,
        cancel: '.content-drag-docs, .col-drag, .content-drag, .border-drag, .btn-window-show',
        stack: '.cnt-drag',
        distance: 0
    });
});

*/


/*
$(document).ready(function () {
    $(".btn-x").dblclick(function () {
        $("#drag").hide();
    });
    $("#computer").click(function () {
        $("#drag").show();
    });
});
*/

$(document).ready(function () {
    //Open Draggable
    var widthBrowser = $(window).width();
    var heightBrowser = $(window).height();
    $("#computer").click(function () {
        $("#drag").fadeIn(10);
    });
    $("#skills").click(function () {
        $("#drag1").fadeIn(10);
    });
    $("#proyectos").click(function () {
        $("#drag2").fadeIn(10);
    });
    $("#contactar").click(function () {
        $("#drag3").fadeIn(10);
    });
    //Close Draggable
    $("#x").click(function () {
        $("#drag").fadeOut(10);
    });
    $("#x1").click(function () {
        $("#drag1").fadeOut(10);
    });
    $("#x2").click(function () {
        $("#drag2").fadeOut(10);
    });
    $("#x3").click(function () {
        $("#drag3").fadeOut(10);
    });
});


/*
*
*   ADD CLASS
*
*/
$(document).ready(function () {
    $("#computer").click(function () {
        $(".anclar1").addClass('anclar-style');
        $('.anclar1').css("background-image", "url('../img/computer-5.png')");
        $('.anclar1').css('display', 'flex');
    });
    $("#skills").click(function () {
        $(".anclar2").addClass('anclar-style');
        $('.anclar2').css('background-image', 'url("../img/cd_drive.png")');
        $('.anclar2').css('display', 'block');
    });
    $("#proyectos").click(function () {
        $(".anclar3").addClass('anclar-style');
        $('.anclar3').css('background-image', 'url("../img/directory_closed.png")');
        $('.anclar3').css('display', 'block');
    });
    $("#contactar").click(function () {
        $(".anclar4").addClass('anclar-style');
        $('.anclar4').css('background-image', 'url("../img/outlook_express-5.png")');
        $('.anclar4').css('display', 'block');
    });
    $("#x").click(function () {
        $(".anclar1").css('display', 'none')
    });
    $("#x1").click(function () {
        $(".anclar2").css('display', 'none')
    });
    $("#x2").click(function () {
        $(".anclar3").css('display', 'none')
    });
    $("#x3").click(function () {
        $(".anclar4").css('display', 'none')
    });
    $("#drag").click(function () {
        $('.anclar1').css('z-index', '3');
    });
});


