$(document).ready(function() {
    const TITLE = "JAVA";
    $("<div/>", {
        "appendTo": ".divide-center",
        "class": "container-divided",
        html: "<div/><div/>"
    });
    $(".container-divided").find("div").eq(0).html(" ").attr({
        "class": "cd1"
    });
    $(".container-divided").find("div").eq(1).html(" ").attr({
        "class": "cd2"
    });
    //APPENDT TO CD1 FOR INTRODUCTION
    $("<div/>", {
        "appendTo": ".cd1",
        "class": "info-java",
        html: "<div/>"
    });
    //INSIDE OF THIS ONE, WILL BE ALL THE INFORMATION
    $(".info-java").find("div").eq(0).attr({
        "class": "design-info-java"
    });
    $("<h1>", { "appendTo": ".design-info-java", "class": "title", html: TITLE})
    //CHAPTERS
    $("<div/>", {
        "appendTo": ".cd2",
        "class": "chapters-java",
        html: "<div/><div/>"
    });
    $(".chapters-java").find("div").eq(0).attr({
        "class": "chap1 id99"
    });
    $("<img>", { "appendTo": ".id99", src: "images/flame-delete-confirmation.png"});
    $("<h3/>", { "appendTo": ".id99", html: "{{CP1}}" });
    $("<p/>", { "appendTo": ".id99", html: "{{CPT1}}" });
    $(".chapters-java").find("div").eq(1).attr({ 
        "class": "chap1 id98"
    });
    $("<img>", { "appendTo": ".id98", src: "images/flame-space-adventures.png"});
    $("<h3/>", { "appendTo": ".id98", html: "{{CP2}}" });
    $("<p/>", { "appendTo": ".id98", html: "{{CPT2}}" });
    //VARIABLES
    var imageTest1 = ["images/flame-delete-confirmation.png", "images/flame-space-adventures.png"];
    var chapter1 = ["Introduccion", "Aprende a crear programas utilizando el lenguaje de programacion JAVA, el poder de la mente es increible."];
    var chapter2 = ["Programacion Elemental", "Para poder entender temas complejos una buena base sobre que es la programacion sera de bastante ayuda."];
    new Vue({
        el: ".chapters-java",
        data: {
            IT1: imageTest1[0],
            IT2: imageTest1[1],
            CP1: chapter1[0],
            CPT1: chapter1[1],
            CP2: chapter2[0],
            CPT2: chapter2[1]
        }
    });
    console.log(chapter1[1].length);
    console.log(chapter2[1].length);
});