/**HERE WILL BE ALL SCRIPTS FOR THE NAV IN JAVA */
$(document).ready(function() {
    $("<div/>", {
        "appendTo": "#nav-java",
        "class": "navbar",
        "html": "<div/><div/><div/><div/><div/><div/>"
    });
    $('.navbar').find('div').eq(0).html('{{title1}}').attr({
        "class": "sub-btn"
    });
    $('.navbar').find('div').eq(1).html("{{title2}}").attr({
        "class": "sub-btn"
    });
    $('.navbar').find('div').eq(2).html("{{title3}}").attr({
        "class": "sub-btn"
    });
    $('.navbar').find('div').eq(3).html("{{title4}}").attr({
        "class": "sub-btn"
    });
    $('.navbar').find('div').eq(4).html("{{title5}}").attr({
        "class": "sub-btn"
    });
    $('.navbar').find('div').eq(5).html("{{title6}}").attr({
        "class": "sub-btn"
    });
    /*VARIABLES FOR VUE*/
    const TITLES = ["Coder Dojo Guatemala", "Reglas", "Sobre el Dojo", "Acerca de", "Donar", "ToggleButton"];
    var yourFear = ["subDiv"];
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
            cls1: yourFear[0]
        }
    });

});