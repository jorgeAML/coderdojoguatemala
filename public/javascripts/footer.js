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

    var catalogo = ['Neo4j', 'Redis', 'Alexa', 'JavaScript', 'Making a Website', 'CSS', 'Nodes'];
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

    var social = ['Facebook', 'Discord', 'Twitter', 'Youtube', 'ARweave', 'Twitch'];
    var f3 = document.getElementsByClassName('footer-a3');

    $(f3).find("a").eq(0).html(social[0]).addClass("af13").attr({
        href: "https://www.facebook.com/coderdojomixcoguatemala",
        rel: urlDefault
    });
    $(f3).find("a").eq(1).html(social[1]).addClass("af14").attr({
        href: "https://discord.gg/bF4HhJaT2Q",
        rel: urlDefault
    });
    $(f3).find("a").eq(2).html(social[2]).addClass("af15").attr({
        href: "https://twitter.com/AmlLabs",
        rel: urlDefault
    });
    $(f3).find("a").eq(3).html(social[3]).addClass("af16").attr({
        href: "https://www.youtube.com/channel/UCBVKNC8fVQQcTOTi-kq1wYw",
        rel: urlDefault
    });
    $(f3).find("a").eq(4).html(social[4]).addClass("af17").attr({
        href: "https://www.arweave.org/",
        rel: urlDefault
    });
    $(f3).find("a").eq(5).html(social[5]).addClass("af17").attr({
        href: "https://www.twitch.tv/jorgeaml1",
        rel: urlDefault
    });

    //EVENTS

    
    //IMAGES FOR FOOTER
    var f4 = document.getElementsByClassName('ordenf1');
    $(f4).find('img').eq(0).addClass('footer-img').attr({
        src: "./images/logoSample.png",
        alt: "logo of Coder Dojo Guatemala"
    });

    //THE LAST PART OF THE FOOTER
    var hr = document.getElementsByClassName("footer-container");
    var createHr = $("<hr></hr>");
    var pieDePagina = $("<p>2021 &#169 Coder Dojo Guatemala por AML Productions</p>")

    createHr.appendTo(hr);
    pieDePagina.appendTo(hr);
    pieDePagina.insertAfter(createHr);

    $(createHr).addClass('hr-footer').css({
        color: '#576675',
        border: '1px dashed #576675',
        marginLeft: '20%',
        marginRight: '20%'
    });
    $(pieDePagina).addClass('piePagina-footer');
});
