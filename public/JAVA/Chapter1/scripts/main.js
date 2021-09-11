"use strict";
var mess1 = 'En este primer capítulo te enseñaremos las importancias de aprender el lenguaje de programación Java';
var messA1 = 'si ya tienes conocimientos sobre este, puedes saltarte el capítulo e ir directo al #2 y si no aprende con nosotros lo básico';
var messA2 = 'Luego de que aprendas Java, de seguro podrás aprender cualquier lenguaje de orientación a objetos en este mundo';
var titulo2 = '¿Pero qué es Java?';
let mensaje3 = 'Notas importantes por la cual Java es tan único:';

const TITULOSCARD = [
    { titulo3: '¿Qué es programación orientada a objetos?' },
    { titulo4: '¿Qué es JDK'},
]
const LISTCARD = [
    { list2A: 'La programación orientada a objetos u OOP es cuando trabajamos con clases, objetos, métodos y variables (Esto lo explicaremos en los siguientes capítulos).'},
    { list2B: 'Los conceptos más importantes de OOP son: Encapsulación, polimorfismo e instancias.'},
    { list3A: 'JDK es considerado un kit esencial para el desarrollo de Java, el cual es necesario para codificar y ejecutar Java.'},
    { list3B: 'JDK incluye JVM y JRE'},
    { list1A: 'Java es un lenguaje de programación orientado a objetos.'},
    { list1B: 'Java es una plataforma independiente con el significado que pueda funcionar en cualquier máquina que contenga JVM.'},
    { list1C: 'En orden para ejecutar y crear programas Java, es necesario JDK.'},
]

const Welcome = {
    data() {
        return {
            message: 'Bienvenido',
            message1: `${mess1}, ${messA1}. ${messA2}.`,
            titulo2: `${titulo2}`,
            mensaje3: `${mensaje3}`,
            list1A: `${LISTCARD[4].list1A}`,
            list1B: `${LISTCARD[5].list1B}`,
            list1C: `${LISTCARD[6].list1C}`,
            titulo3: `${TITULOSCARD[0].titulo3}`,
            list2A: `${LISTCARD[0].list2A}`,
            list2B: `${LISTCARD[1].list2B}`,
            titulo4: TITULOSCARD[1].titulo4,
            list3A: LISTCARD[2].list3A,
            list3B: LISTCARD[3].list3B,

        }
    }
}
Vue.createApp(Welcome).mount('#card');

