var titles = ["Java"];
var info = "Aprende a programar desde interfaces, aplicaciones o incluso juegos como Minecraft que fue desarrollado usando el lenguaje de programación Java.";

var linksDescripciones = [
    {boton1: "Descargar SE SDK"},
    {boton2: "Ver tutoriales"}
];
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
})

