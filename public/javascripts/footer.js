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
    $(f2).find("a").eq(3).html(catalogo[3]).addClass("af9").attr({
        href: "#",
        rel: urlDefault
    });
    $(f2).find("a").eq(4).html(catalogo[4]).addClass("af10").attr({
        href: "#",
        rel: urlDefault
    });
    $(f2).find("a").eq(5).html(catalogo[5]).addClass("af11").attr({
        href: "#",
        rel: urlDefault
    });
    $(f2).find("a").eq(6).html(catalogo[6]).addClass("af12").attr({
        href: "#",
        rel: urlDefault
    });

    var social = ['Facebook', 'Discord', 'Twitter', 'Youtube', 'Airweave'];
    var f3 = document.getElementsByClassName('footer-a3');

    $(f3).find("a").eq(0).html(social[0]).addClass("af13").attr({
        href: "#",
        rel: urlDefault
    });
    $(f3).find("a").eq(1).html(social[1]).addClass("af14").attr({
        href: "#",
        rel: urlDefault
    });
    $(f3).find("a").eq(2).html(social[2]).addClass("af15").attr({
        href: "#",
        rel: urlDefault
    });
    $(f3).find("a").eq(3).html(social[3]).addClass("af16").attr({
        href: "#",
        rel: urlDefault
    });
    $(f3).find("a").eq(4).html(social[4]).addClass("af17").attr({
        href: "#",
        rel: urlDefault
    });
    
});
