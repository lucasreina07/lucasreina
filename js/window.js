if (screen.width < 1024) {
    console.log('pequeña');
} else if (screen.width < 1280) {
    document.write('Mediana');
} else {
    console.log('grande');
}

$(window).resize(function () {
    var widthBrowser = $(window).width();
    var heightBrowser = $(window).height();
    console.log("Tamaño de la pantalla del navegador: width=" + widthBrowser + " height=" + heightBrowser);
    if (widthBrowser < '500' ) {
        $("#computer").click(function () {
            $("#drag").fadeIn(10);
        });
    };
});