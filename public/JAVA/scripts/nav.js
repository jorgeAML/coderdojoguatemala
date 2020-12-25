/**HERE WILL BE ALL SCRIPTS FOR THE NAV IN JAVA */
$(document).ready(function() {
    var links = [
        { ref0: '#'}
    ];

    $("<div/>", {
        "appendTo": "#nav-java",
        "class": "navbar",
        "html": "<div/><div/><div/><div/><div/><div/>"
    });
   
    $('.navbar').find('div').eq(0).html("<a class='links-design' href='#'>{{title1}}</a>").attr({
        "class": "sub-btn"
    });
    $('.navbar').find('div').eq(5).html("<i class='material-icons'>&#xE5D2;</i>").attr({
        "class": "toggle"
    });
    //NAVBAR-ITEMS
    $('.navbar').find('div').eq(1).html("<a href='#'>{{title2}}</a>").attr({
        "class": "sub-btn slide"
    });
    $('.navbar').find('div').eq(2).html("<a href='#'>{{title3}}</a>").attr({
        "class": "sub-btn slide"
    });
    $('.navbar').find('div').eq(3).html("<a href='#'>{{title4}}</a>").attr({
        "class": "sub-btn slide"
    });
    $('.navbar').find('div').eq(4).html("<a href='#'>{{title5}}</a>").attr({
        "class": "sub-btn slide"
    });
   
    /*VARIABLES FOR VUE*/
    var TITLES = ["Coder Dojo Guatemala", "Reglas", "Sobre el Dojo", "Acerca de", "Donar", "ToggleButton"];
    
    var YOURFEAR = ["links-design"];
    /**VUE IN ACTIONS */
    new Vue ({
        el: "#nav-java",
        data: {
            title1: TITLES[0],
            title2: TITLES[1],
            title3: TITLES[2],
            title4: TITLES[3],
            title5: TITLES[4],
            title6: TITLES[5],
            YF0: YOURFEAR[0],
        }
    });

    $(".toggle").click(function() {
        $('.slide').slideToggle(800);
    })
    $('.navbar').click(function() {
        console.log('slide toogle');
    });
});