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
})