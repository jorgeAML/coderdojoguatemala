$(document).ready( function () {
    var mode = document.getElementsByClassName("light-mode");
    var divMode = $("<div></div>");
    var spanIcon = $("<i class='material-icons md-36 md-light adjust-icon active'>&#xe891</i>");

    var divMode2 = $("<div></div>");
    var buttonLight = $("<button></button>")

    //APPENDS
    divMode.appendTo(mode);
    spanIcon.appendTo(divMode);

    divMode2.appendTo(mode);
    divMode2.insertAfter(divMode);
    buttonLight.appendTo(divMode2);
    
    $(buttonLight).addClass("button-light").html("Invertir colores");
    $(divMode).addClass("icon");
    $('.icon').css({
        position: 'relative'
    })
    $(mode).css({
        position: 'relative',
        marginTop: '-17%'
    });
    $('.adjust-icon').css({
        marginLeft: '5%'
    });
    //light mpde

    $(".button-light").click(function(event){
      //body background
      $("body").toggleClass("light-content-change");
      //titulo de pagina
      $(".h1_sp").toggleClass("h1-sp-change");
      //titulo #2 de pagina
      $(".p_sp").toggleClass("p_sp_change");
      //contenedores
      $(".post_1tp").toggleClass("post-1tp-change");
      //titulo de contenedores
      $(".h2_tp").toggleClass("h2_tp_change");
      //parrafos de contendores
      $(".in_box").toggleClass("in_box_change");
      //hr
      $(".hr_tp").toggleClass("hr_tp_change");
      //button 
      $(".box_button").toggleClass("box_button_change");
      //hr footer
      $(".hr-footer").toggleClass("hr-footer-change");
      $(".footer-container").toggleClass("footer-container-change");
      //footer
      var afs1 = ['.af1', '.af2', '.af3', '.af4', '.af5'];
        for(var i = 0; i < afs1.length; i++) {
          $(afs1[i]).toggleClass("footer-a1-change");
        }
      
    });


});