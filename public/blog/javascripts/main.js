//DOM with vue
const title = 'Coder Dojo Blog';
const subtitle = 'Un blog simple';
//variables for nav
var sectionA = 'Blog';
var sectionB = 'Archivos';
var sectionC = 'Información';
new Vue({
    el: '.blog-header',
    data: {
        title: title,
        subtitle: subtitle,
    }
});

new Vue({
    el: '#site-navigation',
    data: {
        //nav sections
        sectionA: sectionA,
        sectionB: sectionB,
        sectionC: sectionC
    }
})