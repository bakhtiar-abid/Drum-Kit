// here's detecting while clicking on button 

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i =0; i<numberofDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);

addingAnimation(buttonInnerHTML);
 
});

// here's detecting while clicking on Keyboard press

  document.addEventListener("keypress", function (event) {
     makeSound(event.key);
     addingAnimation(event.key);
  });

function makeSound(key){
   switch (key) {
      case "w":
         var tom1 = new Audio("/sounds/tom-1.mp3");
         tom1.play();
         break;

      case "a":
         var tom2 = new Audio("/sounds/tom-2.mp3");
         tom2.play();

      case "s":
         var tom3 = new Audio("/sounds/tom-3.mp3");
         tom3.play();

      case "d":
         var tom4 = new Audio("/sounds/tom-4.mp3");
         tom4.play();

      case "j":
         var snare = new Audio("/sounds/snare.mp3");
         snare.play();

      case "k":
         var crash = new Audio("/sounds/crash.mp3");
         crash.play();

      case "l":
         var kickBass = new Audio("/sounds/kick-bass.mp3");
         kickBass.play();

      default:
         
         break;
   }
}
 function addingAnimation (currentKey){
var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){
   activeButton.classList.remove("pressed");
}, 100);
 }
}

// var audio = new Audio("/sounds/tom-1.mp3");
// audio.play();
