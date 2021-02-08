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

    var social = ['Facebook', 'Discord', 'Twitter', 'Youtube', 'ARweave'];
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

    //EVENTS

    
    //IMAGES FOR FOOTER
    var f4 = document.getElementsByClassName('ordenf1');
    $(f4).find('img').eq(0).addClass('footer-img').attr({
        src: "https://s550sas.storage.yandex.net/rdisk/206f7de2ad499d3cfdc695c5901f87f501147dd649bf908a00e5b0448ec7edad/6020f821/MENMWvNs6buenabbExQjB3vyCvdcoLWXoYthAqjB7YWFZrd1YIG9Oo51z2pHif5CkowGiSRgoAuNli7cTgAQ8w==?uid=0&filename=logo_coderDojo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=35089&hid=27c8433a9f41142bfbf693205e0c3451&media_type=image&tknv=v2&etag=2067d6ac1e6dc13367ca5f57b3482717&rtoken=0UhDuoOBcs9u&force_default=no&ycrid=na-910c191e3f4a1915483a85a8b201a878-downloader19f&ts=5bacf12258a40&s=4ea63005c0496ab2458021e9966bfb4c897c0c5ed2d31c67b8020e634226203c&pb=U2FsdGVkX1_IgwRUkdarfPyvTNtZ9xqFwfinn0MZNZWAJM4OH-a4rhLHkgQBYOTRHDMsKw1bn778Z1jM2WSrCsFpOGwa-84Q7iC7dc_QSL0",
        alt: "logo of Coder Dojo Guatemala"
    });

    //THE LAST PART OF THE FOOTER
    var hr = document.getElementsByClassName("footer-container");
    var createHr = $("<hr></hr>");
    var pieDePagina = $("<p>Copyright &#169 2020 Coder Dojo Guatemala por AML Productions</p>")

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
