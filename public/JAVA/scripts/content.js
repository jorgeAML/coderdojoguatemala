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
    $("<h1/>", { "appendTo": ".design-info-java", "class": "title", html: TITLE});
    $("<p/>", { "appendTo": ".design-info-java", "class": "idp01", html: "{{ph1}}. {{ph2}}. {{ph3}}. {{ph4}}. {{ph5}}. {{ph6}}. {{ph7}}. {{ph8}}"});
    $("<p/>", { "appendTo": ".design-info-java", "class": "idit01", html: "{{introT1}}. {{introT2}}"});
    $("<ol/>", { "appendTo": ".design-info-java", "class": "idit02", html: "<h3/><li/><li/>"});
    $(".idit02").find("h3").eq(0).html("{{IC1}}")
    $(".idit02").find("li").eq(0).html("{{IC2}}");
    $(".idit02").find("li").eq(1).html("{{IC3}}");
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
    var paragrap = ["Java es un lenguaje de programación basado orientación a objetos, basado a clases diseñado para tener poca implementación de dependencias como sea posible", 
            "Es un lenguaje de programación de proposito general para que los desarrolladores de aplicaciones lo escriban una vez, correrlo en donde sea (WORA)", 
            "Con el significado de que Java debe ser compilado para poder funcionar en todas las plataformas que soporten Java sin la necesidad de ser recompilado", 
        "Las aplicaciones Java son tipicamente compiladas a código-bit las cuales pueden funcionar en cualquier maquina virtual Java (JVM), independientement de la arquitectura subyacente de la maquina",
        "La sintaxis de Java es similar al lenguaje de programación C y C++ pero quizás a bajo nivel comparado con los dos mencionados", 
        "Las compilaciones en Java provee capabilidades dinámicas, que estás tipicamente no son habilitadas en los lenguajes de programación tradicionales", 
        "Así como en el 2019, Java fue uno de los lenguajes de programación más populares en base a las estadísticas de Github pero no ganandole la posición a JavaScript", 
        "Particularmente para servidores-cliente para sitios web, con un reporte de 9 millones de desarrolladores."];
    var chapter1 = ["Introducción", "Aprende a crear programas utilizando el lenguaje de programación JAVA, el poder de la mente es increíble."];
    var chapter2 = ["Programación Elemental", "Para poder entender temas complejos una buena base sobre que es la programación será de bastante ayuda."];
    var chapter3 = ["Selecciones", "Implementa metodos para hacer controles de selección, usando expresiones boleanas, if-else y metodos switch."];
    var chapter4 = ["Funciones Matemáticas", "Resuelve problemas matemáticos, aprende sobre los carácteres ASCII y sus códigos únicos y el método String."];
    var introText = ["Aprende sobre lo básico de Java y como funciona, describe las relaciones entre Java y la Web (World Wide Web), aprende sobre el significado de Java, API, JDK e IDE.",
        "Escribe un simple programa en Java, aprende a compilar desde la consola, explica lo básico en la sintaxis de un programa."];
    var chapter2Text = ["Objetivos:","Escribe programas Java para el desarrollo de calculos simples.",
        "Aprende a obtener información desde la consola usando la clase Scanner."];
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
    new Vue({
        el: ".design-info-java",
        data: {
            ph1: paragrap[0],
            ph2: paragrap[1],
            ph3: paragrap[2],
            ph4: paragrap[3],
            ph5: paragrap[4],
            ph6: paragrap[5],
            ph7: paragrap[6],
            ph8: paragrap[7],
            introT1: introText[0],
            introT2: introText[1],

            IC1: chapter2Text[0],
            IC2: chapter2Text[1],
            IC3: chapter2Text[2]
        }
    });
    //FUNCTION FOR CONTENT SHOW THE INTRODUCTION CHAPTER
    $(".id99").mouseover(function(event){
        $(".idp01, .idit02").fadeOut("slow");
        $(".idit01").delay(600).fadeIn("slow");
    });
    //FUNCTION RETURN THE CONTENT OF JAVA
    $(".design-info-java").mouseover(function(event){
        $(".idit01").fadeOut("slow");
        $(".idp01").delay(600).fadeIn("slow");
    });
    //Elemntary Programming
    $(".id98").mouseover(function(event){
        $(".idp01, .idit01").fadeOut("slow");
        $(".idit02").delay(600).fadeIn("slow");
    });
    //LEAVE ELEMENTARY PROGRAMMING
    $(".design-info-java").mouseover(function(event){
        $(".idit02").fadeOut("slow");
        $(".idp01").delay(600).fadeIn("slow");
    });

    console.log(chapter1[1].length);
    console.log(chapter2[1].length);
    console.log(chapter3[1].length);console.log(chapter4[1].length);
});