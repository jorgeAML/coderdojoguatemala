//Este sera el footer para la seccion java
$(document).ready(function () {
    //VARIABLES FOR THE NAV.JADE
    const TITULO1 = "Navegación";
    const TITULO2 = "Catálogo";
    const TITULO3 = "Redes Sociales";
    const NAVEGACION = ['Blog', 'Tutoriales', 'Contacto', 'Privacidad', 'Terminos & condiciones'];
    const CATALOGO = ['Neo4j', 'Redis', 'Alexa', 'JavaScript', 'Making a Website', 'CSS', 'Nodes'];
    const SOCIAL = ['Facebook', 'Discord', 'Twitter', 'Youtube', 'Arweave', 'Twitch'];
    const urlDefault = "Update this text when you set the new URL";
    const LOGODESC = "Coder dojo Guatemala es un club de programacion para la educacion y desarrollo de Guatemala de los creadores de MedicinaResources.";
    var f1 = document.getElementsByClassName("footer-a1");
    //Recursos
    $("<div/>", {
        "appendTo": ".footer0",
        "class": "footer-container-1"
    });
    //CHILD1
    $("<div/>", {
        "appendTo": ".footer-container-1",
        "class": "footer-child-1",
        html: "<img><p/>"
    });
    $(".footer-child-1").find("img").attr({ "src": "../images/logo_coderDojo.png"});
    $(".footer-child-1").find("p").html(LOGODESC);
    //CHILD2
    $("<div/>", {
        "appendTo": ".footer-container-1",
        "class": "footer-child-2",
        html: "<h2/><ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li></ul>"
    });
    $(".footer-child-2").find("h2").html(TITULO1);
    $(".footer-child-2").find("a").eq(0).html(NAVEGACION[0]).attr({"href": "#top"});
    $(".footer-child-2").find("a").eq(1).html(NAVEGACION[1]).attr({"href": "#top"});
    $(".footer-child-2").find("a").eq(2).html(NAVEGACION[2]).attr({"href": "#top"});
    $(".footer-child-2").find("a").eq(3).html(NAVEGACION[3]).attr({"href": "#top"});
    $(".footer-child-2").find("a").eq(4).html(NAVEGACION[4]).attr({"href": "#top"});
    //CHILD3
    $("<div/>", {
        "appendTo": ".footer-container-1",
        "class": "footer-child-3",
        html: "<h2/><ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li></ul>"
    });
    $(".footer-child-3").find("h2").html(TITULO2);
    $(".footer-child-3").find("a").eq(0).html(CATALOGO[0]).attr({"href": "#top"});
    $(".footer-child-3").find("a").eq(1).html(CATALOGO[1]).attr({"href": "#top"});
    $(".footer-child-3").find("a").eq(2).html(CATALOGO[2]).attr({"href": "#top"});
    $(".footer-child-3").find("a").eq(3).html(CATALOGO[3]).attr({"href": "#top"});
    $(".footer-child-3").find("a").eq(4).html(CATALOGO[4]).attr({"href": "#top"});
    $(".footer-child-3").find("a").eq(5).html(CATALOGO[5]).attr({"href": "#top"});
    $(".footer-child-3").find("a").eq(6).html(CATALOGO[6]).attr({"href": "#top"});
    //CHILD4
    $("<div/>", {
        "appendTo": ".footer-container-1",
        "class": "footer-child-4",
        html: "<h2/><ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li></ul>"
    });
    $(".footer-child-4").find("h2").html(TITULO3);
    $(".footer-child-4").find("a").eq(0).html(SOCIAL[0]).attr({"target": "_blank", "href": "https://www.facebook.com/coderdojomixcoguatemala"});
    $(".footer-child-4").find("a").eq(1).html(SOCIAL[1]).attr({"target": "_blank", "href": "https://discord.gg/bF4HhJaT2Q"});
    $(".footer-child-4").find("a").eq(2).html(SOCIAL[2]).attr({"target": "_blank", "href": "https://twitter.com/AmlLabs"});
    $(".footer-child-4").find("a").eq(3).html(SOCIAL[3]).attr({"target": "_blank", "href": "https://www.youtube.com/channel/UCBVKNC8fVQQcTOTi-kq1wYw"});
    $(".footer-child-4").find("a").eq(4).html(SOCIAL[4]).attr({"target": "_blank", "href": "https://www.arweave.org/"});
    $(".footer-child-4").find("a").eq(5).html(SOCIAL[5]).attr({"target": "_blank", "href": "https://www.twitch.tv/jorgeaml1"});
    //pie de pagina
    const PIEDEPAGINA = "2021 &#169 Coder Dojo Guatemala creado por AML Productions";
    $("<div/>", {
        "appendTo": ".footer0",
        "class": "footer-container-2"
    });
    $("<div/>", {
        "appendTo": ".footer-container-2",
        "class": "footer-child-5",
        html: "<hr/><p/>"
    });
    $(".footer-child-5").find("p").html(PIEDEPAGINA);
});
