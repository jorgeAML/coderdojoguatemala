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
    //CHAPTERS 1 AND 2
    $("<div/>", {
        "appendTo": ".cd2",
        "class": "chapters-java id001",
        html: "<div/><div/>"
    });
    $(".id001").find("div").eq(0).attr({
        "class": "chap1 id99"
    });
    $("<img>", { "appendTo": ".id99", src: "images/flame-delete-confirmation.png"});
    $("<h3/>", { "appendTo": ".id99", html: "{{CP1}}" });
    $("<p/>", { "appendTo": ".id99", html: "{{CPT1}}" });
    $(".id001").find("div").eq(1).attr({ 
        "class": "chap1 id98"
    });
    $("<img>", { "appendTo": ".id98", src: "images/flame-space-adventures.png"});
    $("<h3/>", { "appendTo": ".id98", html: "{{CP2}}" });
    $("<p/>", { "appendTo": ".id98", html: "{{CPT2}}" });
    //CHAPTERS 3 AND 4
    $("<div/>", {
        "appendTo": ".cd2",
        "class": "chapters-java id002",
        html: "<div/><div/>"
    });
    $(".id002").find("div").eq(0).attr({
        "class": "chap1 id100"
    }); 
    $("<img>", { "appendTo": ".id100", src: "images/cherry-delete-confirmation-912.png"});
    $("<h3/>", { "appendTo": ".id100", html: "{{CP3}}"});
    $("<p/>", { "appendTo": ".id100", html: "{{CPT3}}" });
    $(".id002").find("div").eq(1).attr({
        "class": "chap1 id101"
    });
    $("<img>", { "appendTo": ".id101", src: "images/clip-student-thinking-about-mathematics-1.png"});
    $("<h3/>", { "appendTo": ".id101", html: "{{CP4}}"});
    $("<p/>", { "appendTo": ".id101", html: "{{CPT4}}" });
    //VARIABLES
    var imageTest1 = ["images/flame-delete-confirmation.png", "images/flame-space-adventures.png"];
    var chapter1 = ["Introducción", "Aprende a crear programas utilizando el lenguaje de programación JAVA, el poder de la mente es increíble."];
    var chapter2 = ["Programación Elemental", "Para poder entender temas complejos una buena base sobre que es la programación será de bastante ayuda."];
    var chapter3 = ["Selecciones", "Implementa metodos para hacer controles de selección, usando expresiones boleanas, if-else y metodos switch."];
    var chapter4 = ["Funciones Matemáticas", "Resuelve problemas matemáticos, aprende sobre los carácteres ASCII y sus códigos únicos y el método String."];
    new Vue({
        el: ".chapters-java",
        data: {
            IT1: imageTest1[0],
            IT2: imageTest1[1],
            CP1: chapter1[0],
            CPT1: chapter1[1],
            CP2: chapter2[0],
            CPT2: chapter2[1],       
        }
    });
    new Vue({
        el: ".id100",
        data: {
            CP3: chapter3[0],
            CPT3: chapter3[1]
        }
    });
    new Vue({
        el: ".id101",
        data: {
            CP4: chapter4[0],
            CPT4: chapter4[1]
        }
    });
    console.log(chapter1[1].length);
    console.log(chapter2[1].length);
    console.log(chapter3[1].length);console.log(chapter4[1].length);
});