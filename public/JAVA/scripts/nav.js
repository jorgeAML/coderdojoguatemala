/**HERE WILL BE ALL SCRIPTS FOR THE NAV IN JAVA */
$(document).ready(function() {
    $("<div/>", {
        "appendTo": "#nav-java",
        "class": "navbar",
        "html": "<div/><div/><div/><div/><div/><div/>"
    });
    $('.navbar').find('div').eq(0).html("<a class='links-design' href='/'>{{title1}}</a>").attr({
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
    $(".navbar").find("div").eq(4).html("<a href='https://www.paypal.com/donate?hosted_button_id=APSP4Q3XNSVN6'>{{title5}}</a>").attr({
        "class": "sub-btn slide"
    });
    /*VARIABLES FOR VUE*/
    var TITLES = ["Coder Dojo Guatemala", "Reglas", "Sobre el Dojo", "Acerca de", "Donar", "ToggleButton"];
    var links = ["arweave.org", "./donate.html", "https://www.paypal.com/donate?hosted_button_id=APSP4Q3XNSVN6"];
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
            YF0: YOURFEAR[0]
        }
    });
    new Vue({
        el: ".navbar",
        data: {
            link1: links[0],
            link2: links[1],
            link3: links[2]
        }
    });

    $(".toggle").click(function() {
        $('.slide').slideToggle(800);
    })
    $('.navbar').click(function() {
        console.log('slide toogle');
    });
});