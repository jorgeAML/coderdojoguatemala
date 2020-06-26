//THE BANNER
$(document).ready( function (){
    var ban = document.getElementsByClassName("banner");
    var id = [{ classOne:"banner-id", classTwo:"banner-prefix", classThree:"banner-labels"},
                 {imageOne:"./images/javaScriptbanner001.jpg"}, 
                    {three:"L7B-#eI;10}=X8ayoMJ804$%}r9"
                }];
    var img = $("<img>").addClass("img-banner");

    function bannerPrefix () {
        var prefix = $("<div/><div/><div/>");
        return prefix;
    };

    /*THIS FUNCTION WILL ADD YOUR TITLES*/
    function addTitle (a) {
        
        var titles = ["Usando...", "JavaScript", "Para calcular el tanto por ciento."];
            if (a == 0) {
                return titles[0];
            } else if (a == 1) {
                return titles[1];
            } else if (a == 2) {
                return titles[2];
            } else {
                console.log(false);
            };      
    };

    function addLabels () {
        var labels = $("<div/><div/><div/><div/>");
            return labels;
    }

    $("<div/>", {
        appendTo: ban,
        class: id[0].classOne,
        html: img
    });
    $(".banner-id").find("img").eq(0).attr({
        src: id[1].imageOne,
        alt: "Banner"
    });

    /*container for titles*/

    $("<div/>", {
        appendTo: ban,
        class: id[0].classTwo,
        html: bannerPrefix()
    });
    $(".banner-prefix").find("div").eq(0).html(addTitle(0));
    $(".banner-prefix").find("div").eq(1).html(addTitle(1));
    $(".banner-prefix").find("div").eq(2).html(addTitle(2));
    
    $("<div/>", {
        appendTo: ban,
        class: id[0].classThree,
        html: addLabels()
    });
        $(".banner-labels").find("div").eq(0).html("funciones");
        $(".banner-labels").find("div").eq(1).html("Objetos");
        $(".banner-labels").find("div").eq(2).html("Variables");
        $(".banner-labels").find("div").eq(3).html("Operadores");
});
