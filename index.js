for(var i=0;i<document.querySelectorAll("button").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makesound(this.innerHTML);
        buttonAnimaton(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makesound(event.key);
    buttonAnimaton(event.key);
})

function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;
   }
}

function buttonAnimaton(key){
    var activeButton  = document.querySelector("."+key).classList;
    activeButton.add("pressed");

    setTimeout(function(){
        activeButton.remove("pressed");
    }, 150);
}