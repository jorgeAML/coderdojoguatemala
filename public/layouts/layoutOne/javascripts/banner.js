//THE BANNER
$(document).ready( function (){
    var ban = document.getElementsByClassName("banner");
    var id = [{ one:"banner-id"},
                 {two:"./images/ross.jpg"}, 
                    {three:"L7B-#eI;10}=X8ayoMJ804$%}r9"
                }];
    var img = $("<img>").addClass("img-banner");

    $("<div/>", {
        appendTo: ban,
        class: id[0].one,
        html: img
    });
    $(".banner-id").find("img").eq(0).attr({
        src: id[1].two,
        alt: "Banner"
    })
});
