$(document).ready(function() {
    const TITLE = "JAVA";
    var infoForJava = "This is a test, after will be more information dddddd";
    $("<div/>", {
        "appendTo": ".divide-center",
        "class": "container-divided",
        "html": "<div/><div/>"
    });
    $(".container-divided").find("div").eq(0).html("cd1").attr({
        "class": "cd1"
    });
    $(".container-divided").find("div").eq(1).html("cd2").attr({
        "class": "cd2"
    });
    //APPENDT TO CD1 FOR INTRODUCTION
    $("<div/>", {
        "appendTo": ".cd1",
        "class": "info-java",
        "html": "<div/>"
    });
    //INSIDE OF THIS ONE, WILL BE ALL THE INFORMATION
    $(".info-java").find("div").eq(0).html(TITLE + "\n" + infoForJava).attr({
        "class": "design-info-java"
    })
});