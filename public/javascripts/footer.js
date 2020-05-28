$(document).ready(function () {
    //VARIABLES FOR THE NAV.JADE
    var navegacion = ['Blog', 'Tutoriales', 'Contacto', 'Privacidad', 'Terminos & condiciones'];
    const urlDefault = "Update this text when you set the new URL";
    var f1 = document.getElementsByClassName("footer-a1");

    //MANIPULATING ELEMENTS
    $(f1).find("a").eq(0).html(navegacion[0]).addClass("af1").attr({
        href: '#',
        rel: urlDefault
    });
    $(f1).find("a").eq(1).html(navegacion[1]).addClass("af2").attr({
        href: "#",
        rel: urlDefault
    });
    $(f1).find("a").eq(2).html(navegacion[2]).addClass("af3").attr({
        href: "#",
        rel: urlDefault
    });
    $(f1).find("a").eq(3).html(navegacion[3]).addClass("af4").attr({
        href: "#",
        rel: urlDefault
    });
    $(f1).find("a").eq(4).html(navegacion[4]).addClass("af5").attr({
        href: "#",
        rel: urlDefault
    });

    var catalogo = ['Neo4j', 'Redis', 'Robotica', 'JavaScript', 'Making a Website', 'CSS', 'Nodes'];
    var f2 = document.getElementsByClassName("footer-a2");

    $(f2).find("a").eq(0).html(catalogo[0]).addClass("af6").attr({
        href: "#",
        rel: urlDefault
    });
    $(f2).find("a").eq(1).html(catalogo[1]).addClass("af7").attr({
        href: "#",
        rel: urlDefault
    });
    $(f2).find("a").eq(2).html(catalogo[2]).addClass("af8").attr({
        href: "#",
        rel: urlDefault
    });
});
