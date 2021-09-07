"use strict";
var mess1 = 'En este primer capítulo te enseñaremos las importancias de aprender el lenguaje de programación Java';
var messA1 = 'si ya tienes conocimientos sobre este, puedes saltarte el capítulo e ir directo al #2 y si no aprende con nosotros lo básico';
var messA2 = 'Luego de que aprendas Java, de seguro podrás aprender cualquier lenguaje de orientación a objetos en este mundo';

const Welcome = {
    data() {
        return {
            message: 'Bienvenido',
            message1: `${mess1}, ${messA1}. ${messA2}.`
        }
    }
}
Vue.createApp(Welcome).mount('#card');