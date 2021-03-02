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
    $(".cool-2-child-1").find("img").attr({"src": "./images/free.png"});
    $(".cool-2-child-1").find("h2").html(TITULOCHILD1).attr({"class": "t-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-2",
        "class": "cool-2-child-2",
        html: "<img><h2/><p/>"
    });
    $(".cool-2-child-2").find("img").attr({"src": "./images/calendar.png"});
    $(".cool-2-child-2").find("h2").html(TITULOCHILD2).attr({"class": "t-child-cool"});
    $("<div/>", {
        "appendTo": ".container-cool-2",
        "class": "cool-2-child-3",
        html: "<img><h2/><p/>"
    });
    $(".cool-2-child-3").find("img").attr({"src": "./images/neighbors.png"});
    $(".cool-2-child-3").find("h2").html(TITULOCHILD3).attr({"class": "t-child-cool"});
})