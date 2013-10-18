var sonido = 1;

function change_sound(nuevo_sonido, id) {
    
    sonido = nuevo_sonido;
    
    $(".imagen_whip").attr("src", "img/icon_whip_off.png");
    $("#" + id).attr("src", "img/icon_whip_" + sonido + ".png");

}


function play_sound() {

	var sound = new Audio ("audio/whip_" + sonido + ".ogg");
    sound.play();

}

function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    if (x > 20  && y > 20) {
        play_sound();
    }
}

window.addEventListener("devicemotion", handleMotionEvent, true);
