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
    $("<ol/>", { "appendTo": ".design-info-java", "class": "idit01", html: "<h2/><h3/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/>"});
        $(".idit01").find("h2").eq(0).html("{{A1}}");
        $(".idit01").find("h3").eq(0).html("{{A2}}");
        $(".idit01").find("li").eq(0).html("{{A3}}");
        $(".idit01").find("li").eq(1).html("{{A4}}");
        $(".idit01").find("li").eq(2).html("{{A5}}");
        $(".idit01").find("li").eq(3).html("{{A6}}");
        $(".idit01").find("li").eq(4).html("{{A7}}");
        $(".idit01").find("li").eq(5).html("{{A8}}");
        $(".idit01").find("li").eq(6).html("{{A9}}");
        $(".idit01").find("li").eq(7).html("{{A10}}");
        $(".idit01").find("li").eq(8).html("{{A11}}");
        $(".idit01").find("li").eq(9).html("{{A12}}");
    $("<ol/>", { "appendTo": ".design-info-java", "class": "idit02", html: "<h2/><h3/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/><li/>"});
    $(".idit02").find("h2").eq(0).html("{{IC21}}");
    $(".idit02").find("h3").eq(0).html("{{IC1}}");
    $(".idit02").find("li").eq(0).html("{{IC2}}");
    $(".idit02").find("li").eq(1).html("{{IC3}}");
    $(".idit02").find("li").eq(2).html("{{IC4}}");
    $(".idit02").find("li").eq(3).html("{{IC5}}");
    $(".idit02").find("li").eq(4).html("{{IC6}}");
    $(".idit02").find("li").eq(5).html("{{IC7}}");
    $(".idit02").find("li").eq(6).html("{{IC8}}");
    $(".idit02").find("li").eq(7).html("{{IC9}}");
    $(".idit02").find("li").eq(8).html("{{IC10}}");
    $(".idit02").find("li").eq(9).html("{{IC11}}");
    $(".idit02").find("li").eq(10).html("{{IC12}}");
    $(".idit02").find("li").eq(11).html("{{IC13}}");
    $(".idit02").find("li").eq(12).html("{{IC14}}");
    $(".idit02").find("li").eq(13).html("{{IC15}}");
    $(".idit02").find("li").eq(14).html("{{IC16}}");
    $(".idit02").find("li").eq(15).html("{{IC17}}");
    $(".idit02").find("li").eq(16).html("{{IC18}}");
    $(".idit02").find("li").eq(17).html("{{IC19}}");
    $(".idit02").find("li").eq(18).html("{{IC20}}");
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
    var chapter1 = ["1. Introducción", "Aprende a crear programas utilizando el lenguaje de programación JAVA, utilizando Visual Studio Code, eclipse o Netbeans."];
    var chapter2 = ["2. Programación Elemental", "Para poder entender temas complejos una buena base sobre que es la programación será de bastante ayuda."];
    var chapter3 = ["3. Selecciones", "Implementa metodos para hacer controles de selección, usando expresiones boleanas, if-else y metodos switch."];
    var chapter4 = ["4. Funciones Matemáticas", "Resuelve problemas matemáticos, aprende sobre los carácteres ASCII y sus códigos únicos y el método String."];
        //CONTENIDO PARA EL CAPITULO 1 -- OBJETIVOS.
    var capitulo1Objetivos = ["Introducción a la computación, programación y Java",
        "Objetivos:",
        "Entiende sobre lo básico de informática, programas y de sistemas operativos;",
        "Describe las relaciones entre Java y la World Wide Web;",
        "Entiende el significado del lenguaje Java y sus especificaciones, API, JDK e IDE;",
        "Escribe un programa simple usando Java;",
        "Aprende a usar la consola y a compilar programas Java;",
        "Explica la sintaxis básice de un programa basado en lenguaje de programación Java;",
        "Crea, compila y ejecuta programas Java;",
        "Usa los estilos de programación Java y documenta adecuadamente los programas;",
        "Explica las diferencias entre los errores de sintaxis, errores de tiempo de ejecución y errores lógicos;",
        "Desarrolla programas Java usando NetBeans, eclipse o Visual Studio Code."];
        //CONTENIDO PARA EL CAPITULO 2 -- OBJETIVOS.
    var chapter2Text = ["Objetivos:","Escribe programas Java para el desarrollo de calculos simples.",
        "Aprende a obtener información desde la consola usando la clase Scanner.",
        "Aprender a usar identificadores para nombrar variables, constantes, métodos y clases.",
        "Usa variables para alojar datos.",
        "Programa declaraciones de asignación y expresiones de asignación.",
        "Usa constantes para alojar datos permanentemente.",
        "Aprende a nombrar clases, métodos, variables y constantes siguiendo sus convenciones de nomenclatura.",
        "Explora los tipos de datos numericos primitivos de Java: byte, short, int, long, float, y double.",
        "Aprender a leer datos byte, short, int, long, float o double y sus valores desde el teclado.",
        "Desarrolla operaciones usando los operadores +, -, *, /, y %.",
        "Desarrolla operaciones exponenciales usando la función: Math.pow(a,b);",
        "Aprende a escribir literales enteros, literales de punto flotante, y literales en notación científica;",
        "Escribe y evalua expresiones numéricas;",
        "Obtiene el tiempo actual usando: System.currentTimeMillis();",
        "Utiliza operadores de asignación aumentada;",
        "Aprende a distinguir entre postincrementos - preincrementos y entre postdecrementos - predecrementos;",
        "Aprende a describir el proceso de desarrollo de un software y aplicalo al desarrollo de un programa de pago de préstamos;",
        "Escribe un programa que convierta una gran cantidad de dinero a una cantidad menor;",
        "Aprende a evita errores comunes y trampas que son cometidos al programar.",
        "Programación elemental"];
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

            A1: capitulo1Objetivos[0],
            A2: capitulo1Objetivos[1],
            A3: capitulo1Objetivos[2],
            A4: capitulo1Objetivos[3],
            A5: capitulo1Objetivos[4],
            A6: capitulo1Objetivos[5],
            A7: capitulo1Objetivos[6],
            A8: capitulo1Objetivos[7],
            A9: capitulo1Objetivos[8],
            A10: capitulo1Objetivos[9],
            A11: capitulo1Objetivos[10],
            A12: capitulo1Objetivos[11],

            IC1: chapter2Text[0],
            IC2: chapter2Text[1],
            IC3: chapter2Text[2],
            IC4: chapter2Text[3],
            IC5: chapter2Text[4],
            IC6: chapter2Text[5],
            IC7: chapter2Text[6],
            IC8: chapter2Text[7],
            IC9: chapter2Text[8],
            IC10: chapter2Text[9],
            IC11: chapter2Text[10],
            IC12: chapter2Text[11],
            IC13: chapter2Text[12],
            IC14: chapter2Text[13],
            IC15: chapter2Text[14],
            IC16: chapter2Text[15],
            IC17: chapter2Text[16],
            IC18: chapter2Text[17],
            IC19: chapter2Text[18],
            IC20: chapter2Text[19],
            IC21: chapter2Text[20]
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