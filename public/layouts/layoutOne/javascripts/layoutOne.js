$(document).ready( function () {
    var a = document.getElementsByClassName('nav');
    /*INSERT YOUR CLASSES HERE*/
    var classes = ['navbar', 'navbar_items', 'navbar_link'];
    var linkClasses = ['link1', 'material-icons md-18 md-light', 'font_bungee link1', 'font_baloo link2'];
    var urlLinks = ['#', '#', '#', '#', '#'];
    var text = ['Coder Dojo Guatemala', 'Proyectos', 'Tutoriales', 'Blog', 'Donaciones'];

    /*links their classes and references*/
    var aTag = $("<a>{{t0}}</a>").attr({
        href: urlLinks[0],
        class: linkClasses[2]
    });
    var bTag = $("<a>{{t1}}</a>").attr({
        href: urlLinks[1],
        class: linkClasses[3]
    });
    var cTag = $("<a>{{t2}}</a>").attr({
        href: urlLinks[2],  
        class: linkClasses[3]
    });
    var dTag = $("<a>{{t3}}</a>").attr({
        href: urlLinks[3],
        class: linkClasses[3]
    });
    var eTag = $("<a>{{t4}}</a>").attr({
        href: urlLinks[4],
        class: linkClasses[3]
    });
    
    var fTag = $("<i>more_vert</i>").attr({
        class: linkClasses[1]
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
        //update
    $(".navbar").find("div").eq(3).addClass(classes[2]).html(cTag);
    $(".navbar").find("div").eq(4).addClass(classes[2]).html(dTag);
    $(".navbar").find("div").eq(5).addClass(classes[2]).html(eTag);
    $(".navbar").find("div").eq(6).addClass(classes[2]).html(fTag);
        //textA.appendTo(aTag);
    //space
    new Vue({
        el: ".nav",
        data: {
            t0: text[0],
            t1: text[1],
            t2: text[2],
            t3: text[3],
            t4: text[4],
            k0: linkClasses[0]
        }
    });
});
