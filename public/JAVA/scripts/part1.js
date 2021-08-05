var titles = ["Java"];
var info = "Aprende a programar desde interfaces, aplicaciones o incluso juegos como Minecraft que fue desarrollado usando el lenguaje de programación Java.";

var linksDescripciones = [
    {boton1: "Descargar SE SDK"},
    {boton2: "Ver tutoriales"}
];
var cardCapitulos = [
    {botones: "Ver capítulo"},
    {capitulo1: "Capítulo 1"},
    {capitulo2: "Capítulo 2"},
    {capitulo3: "Capítulo 3"},  
];
var cardTitulos = [
    {titulo1: "Introducción"},
    {titulo2: "Programación elemental"},
    {titulo3: "Condicionales"},
];
var cardInfo = [
    {info1: "Aprende sobre la relación entre JAVA y la web, a usar la consola y crear tus propios programas."},
    {info2: "Haz tus primeras calculadoras de conversión, aprende sobre variables, constantes y datos primitivos."},
    {info3: "Usa condicionales para crear programas más lógicos y aprende técnicas para debugear tu código."}
]
new Vue({
    el: ".bText",
    data: {
         titleA: titles[0],
         infoA: info,
    }
});
new Vue({
    el: ".bButtons",
    data: {
        boton1: linksDescripciones[0].boton1,
        boton2: linksDescripciones[1].boton2,
    }
});
new Vue({
    el: ".A",
    data: {
        cap1A: cardCapitulos[1].capitulo1,
        cap1B: cardTitulos[0].titulo1,
        cap1C: cardInfo[0].info1,
        cap1D: cardCapitulos[0].botones
    }
});
new Vue({
    el: ".B",
    data: {
        cap2A: cardCapitulos[2].capitulo2,
        cap2B: cardTitulos[1].titulo2,
        cap2C: cardInfo[1].info2,
        cap2D: cardCapitulos[0].botones
    }
});
new Vue({
    el: ".C",
    data: {
        cap3A: cardCapitulos[2].capitulo3,
        cap3B: cardTitulos[2].titulo3,
        cap3C: cardInfo[2].info3,
        cap3D: cardCapitulos[0].botones
    }
});

