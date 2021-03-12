$(document).ready(function() {
    //SECTION COOL
    $("<div/>", {
        "appendTo": ".container-cool",
        "class": "container-cool-column"
    });
    $("<div/>",{
        "appendTo": ".container-cool-column",
        "class": "container-cool-1",
        html: "<h1/><p/>"
    });
    const TITULOCOOL1 = "¿Qué es lo más genial en CoderDojo?";
    const PARRAFOCOOL1 = "En Coder Dojo Guatemala los niños de 7 a 18 años pueden aprender a programar." + 
    " Un Dojo es totalmente gratuito y organizado por voluntarios.";
    const TITULOCHILD1 = "Gratis y abierto para todos";
    const TITULOCHILD2 = "Eventos regulares";
    const TITULOCHILD3 = "En tu comunidad";
    const PARRAFOCHILD1 = "Coder Dojo es gratuito ya que es organizado por voluntarios, nuestro Dojo está abierto para todo aquel que este entre 7 a 18 años.";
    const PARRAFOCHILD2 = "El Dojo tiene como objetivo organizar eventos una vez al mes, en algunos casos en particular se realizarán eventos regularmente.";
    const PARRAFOCHILD3 = "Coder Dojo es organizado mundialmente y también en tu comunidad. ¿No encuentras un Dojo cerca? ¡Crea uno tu mismo! ";
    $(".container-cool-1").find("h1").html(TITULOCOOL1).attr({"class": "t-cool"});
    $(".container-cool-1").find("p").html(PARRAFOCOOL1).attr({"class": "p-cool"});
    $("<div/>",{
        "appendTo": ".container-cool-column",
        "class": "container-cool-2"
    });
    $("<div/>", {
        "appendTo": ".container-cool-2",
        "class": "cool-2-child-1",
        html: "<img><h2/><p/>"
    });
    $(".cool-2-child-1").find("img").attr({"src": "./images/free500.jpg"});
    $(".cool-2-child-1").find("h2").html(TITULOCHILD1).attr({"class": "t-child-cool"});
    $(".cool-2-child-1").find("p").html(PARRAFOCHILD1).attr({"class": "p-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-2",
        "class": "cool-2-child-2",
        html: "<img><h2/><p/>"
    });
    $(".cool-2-child-2").find("img").attr({"src": "./images/calendar1.jpg"});
    $(".cool-2-child-2").find("h2").html(TITULOCHILD2).attr({"class": "t-child-cool"});
    $(".cool-2-child-2").find("p").html(PARRAFOCHILD2).attr({"class":"p-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-2",
        "class": "cool-2-child-3",
        html: "<img><h2/><p/>"
    });
    $(".cool-2-child-3").find("img").attr({"src": "./images/comunidad.jpg"});
    $(".cool-2-child-3").find("h2").html(TITULOCHILD3).attr({"class": "t-child-cool"});
    $(".cool-2-child-3").find("p").html(PARRAFOCHILD3).attr({"class":"p-child-cool"});

    //Mas informacion sobre el dojo
    const TITULOCHILD3_1 = "Conoce personas espectaculares";
    const PARRAFOCHILD3_1 = "La atmosfera en CoderDojo es muy abierta asi que facilmente puedes conocer personas con intereses similares.";
    const TITULOCHILD3_2 = "Programa";
    const PARRAFOCHILD3_2 = "En Coder Dojo puedes aprender de todo sobre programación. Algo asi como sitios web, juegos, apps o incluso robots. Aprende con Arduino para crear tus propios dispositivos.";
    const TITULOCHILD3_3 = "Creatividad";
    const PARRAFOCHILD3_3 = "¿Estas en busca en expandir tu imaginación e ideas únicas? ¡Unete a Coder Dojo y expresa tu creatividad en proyectos geniales de programación!";
    $("<div/>", {
        "appendTo": ".container-cool-column",
        "class": "container-cool-3"
    });
    $("<div/>", {
        "appendTo": ".container-cool-3",
        "class": "cool-3-child-1",
        html: "<img><h2/><p/>"
    });
    $(".cool-3-child-1").find("img").attr({"src": "./icons/iron-man.png"});
    $(".cool-3-child-1").find("h2").html(TITULOCHILD3_1).attr({"class": "t-child-cool"});
    $(".cool-3-child-1").find("p").html(PARRAFOCHILD3_1).attr({"class": "p-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-3",
        "class": "cool-3-child-2",
        html: "<img><h2/><p/>"
    });
    $(".cool-3-child-2").find("img").attr({"src": "./icons/controller.png"});
    $(".cool-3-child-2").find("h2").html(TITULOCHILD3_2).attr({"class": "t-child-cool"});
    $(".cool-3-child-2").find("p").html(PARRAFOCHILD3_2).attr({"class": "p-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-3",
        "class": "cool-3-child-3",
        html: "<img><h2/><p/>"
    });
    $(".cool-3-child-3").find("img").attr({"src": "./icons/edge-constraint.png"});
    $(".cool-3-child-3").find("h2").html(TITULOCHILD3_3).attr({"class": "t-child-cool"});
    $(".cool-3-child-3").find("p").html(PARRAFOCHILD3_3).attr({"class": "p-child-cool"});
    //Mas informacion sobre el dojo 
    const TITULOCHILD4_1 = "Demuestra y explica lo que sabes";
    const TITULOCHILD4_2 = "¿Trabado en algún proyecto?";
    const TITULOCHILD4_3 = "¡Recuerda ser buena onda!";
    const PARRAFOCHILD4_1 = "Presenta tu proyecto a tu compañero luego de una sesión del Dojo para que juntos puedan aprender.";
    const PARRAFOCHILD4_2 = "¿Estás trabajando en algún proyecto y te quedaste trabado? Ven a Coder Dojo y de seguro encontrarás personas que quieran ayudarte.";
    const PARRAFOCHILD4_3 = "La única regla de Coder Dojo es, asegurarse que la experiencia en aprender a programar juntos sea increíblemente fantástica fenomenal.";
    $("<div/>", {
        "appendTo": ".container-cool-column",
        "class": "container-cool-4"
    });
    $("<div/>", {
        "appendTo": ".container-cool-4",
        "class": "cool-4-child-1",
        html: "<img><h2/><p/>"
    });
    $(".cool-4-child-1").find("img").attr({"src": "./icons/hardworking--v1.png"});
    $(".cool-4-child-1").find("h2").html(TITULOCHILD4_1).attr({"class": "t-child-cool"});
    $(".cool-4-child-1").find("p").html(PARRAFOCHILD4_1).attr({"class": "p-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-4",
        "class": "cool-4-child-2",
        html: "<img><h2/><p/>"
    });
    $(".cool-4-child-2").find("img").attr({"src": "./icons/likes-folder.png"});
    $(".cool-4-child-2").find("h2").html(TITULOCHILD4_2).attr({"class": "t-child-cool"});
    $(".cool-4-child-2").find("p").html(PARRAFOCHILD4_2).attr({"class": "p-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-4",
        "class": "cool-4-child-3",
        html: "<img><h2/><p/>"
    });
    $(".cool-4-child-3").find("img").attr({"src": "./icons/affectionate--v2.png"});
    $(".cool-4-child-3").find("h2").html(TITULOCHILD4_3).attr({"class": "t-child-cool"});
    $(".cool-4-child-3").find("p").html(PARRAFOCHILD4_3).attr({"class": "p-child-cool"});
    /*TWITTER API
     @AmlLabs PARA TWITTER
     <a class="twitter-timeline" href="https://twitter.com/AmlLabs?ref_src=twsrc%5Etfw">Tweets by AmlLabs</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     <a class="twitter-timeline" href="https://twitter.com/JorgeAml11?ref_src=twsrc%5Etfw">Tweets by JorgeAml11</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     <a href="https://twitter.com/AmlLabs?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @AmlLabs</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    */
     $("<div/>", {
        "appendTo": ".container-cool-column",
        "class": "container-cool-twitter"
    });
    $("<div/>", {
        "appendTo": ".container-cool-twitter",
        "class": "cool-twitter-child-1",
        html: "<a><a>"
    });
    $(".cool-twitter-child-1").find("a").eq(0).html("Siguenos como AmlLabs").attr({
        "class": "twitter-follow-button",
        "href": "https://twitter.com/AmlLabs?ref_src=twsrc%5Etfw"
    });
    $(".cool-twitter-child-1").find("a").eq(1).html("Tweets by AmlLabs").attr({
        "class": "twitter-timeline",
        "href": "https://twitter.com/AmlLabs?ref_src=twsrc%5Etfw",
        "data-tweet-limit": 1,
        "data-height": 500,
        "data-chrome": "nofooter noheader"
    });

})