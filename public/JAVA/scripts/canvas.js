window.onload = function() {
    var canvas = document.getElementById("rec1");
    var context = canvas.getContext("2d");

    context.fillStyle = '#e1bee7';
    context.fillRect(0, 0, 15, 5);
    anime({
        targets: canvas,
        translateX: 150,
        duration:3000
    });
};
