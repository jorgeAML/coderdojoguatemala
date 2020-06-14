$(document).ready( function () {
    var a = document.getElementsByClassName('nav');
    /*INSERT YOUR CLASSES HERE*/
    var classes = ['navbar', 'navbar_items', 'navbar_link'];
    var linkClasses = ['link1'];
    var urlLinks = ['#', '#', '#', '#', '#'];
    var text = ['Coder Dojo Guatemala', 'Proyectos', 'Tutoriales', 'Blog', 'Donaciones'];

    var aTag = $("<a>{{t0}}</a>").attr({
        href: urlLinks[0],
        class: linkClasses[0]
    });
    var bTag = $("<a>{{t1}}</a>").attr({
        href: urlLinks[1],
        class: linkClasses[0]
    });

    
    /*MANIPULATION BEGIN*/
    $("<div/>",{
        "appendTo": a,
        "class": classes[0],
        html: "<div/><div/><nav><div/><div/><div/><div/><div/>"
    });
    $(".navbar").find("nav").eq(0).addClass(classes[1]);
    $(".navbar").find("div").eq(0).addClass(classes[2]).html(aTag);
    $(".navbar").find("div").eq(2).addClass(classes[2]).html(bTag);
        //textA.appendTo(aTag);
    //space
    new Vue({
        el: ".nav",
        data: {
            t0: text[0],
            t1: text[1],
            k0: linkClasses[0]
        }
    });
});
