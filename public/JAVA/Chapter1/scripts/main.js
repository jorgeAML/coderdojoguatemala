"use strict";
var mess1 = 'En este primer capítulo te enseñaremos las importancias de aprender el lenguaje de programación Java';
var messA1 = 'si ya tienes conocimientos sobre este, puedes saltarte el capítulo e ir directo al #2 y si no aprende con nosotros lo básico';
var messA2 = 'Luego de que aprendas Java, de seguro podrás aprender cualquier lenguaje de orientación a objetos en este mundo';
var titulo2 = '¿Pero qué es Java?';
let mensaje3 = 'Notas importantes por la cual Java es tan único:';
let list1A = 'Java es un lenguaje de programación orientado a objetos.';
let list2A = 'Java es una plataforma independiente con el significado que pueda funcionar en cualquier máquina que contenga JVM.';
let list3A = 'En orden para ejecutar y crear programas Java, es necesario JDK.';

const Welcome = {
    data() {
        return {
            message: 'Bienvenido',
            message1: `${mess1}, ${messA1}. ${messA2}.`,
            titulo2: `${titulo2}`,
            mensaje3: `${mensaje3}`,
            list1A: `${list1A}`,
            list2A: `${list2A}`,
            list3A: `${list3A}`
        }
    }
}
Vue.createApp(Welcome).mount('#card');

