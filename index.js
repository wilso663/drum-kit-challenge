//Click listeners
document.querySelectorAll(".drum").forEach(item => {
  item.addEventListener('click', event => {
    var buttonInnerHTML = item.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});
//Keydown listeners
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch(key){
    case "w":
      let audioW = new Audio('./sounds/tom-1.mp3');
      audioW.play();
      break;
    case "a":
      let audioA = new Audio('./sounds/tom-2.mp3');
      audioA.play();
      break;
    case "s":
      let audioS = new Audio('./sounds/tom-3.mp3');
      audioS.play();
      break;
    case "d":
      let audioD = new Audio('./sounds/tom-4.mp3');
      audioD.play();
      break;
    case "j":
      let audioJ = new Audio('./sounds/snare.mp3');
      audioJ.play();
      break;
    case "k":
      let audioK = new Audio('./sounds/crash.mp3');
      audioK.play();
      break;
    case "l":
      let audioL = new Audio('./sounds/kick-bass.mp3');
      audioL.play();
      break;
    default:
      //do nothing
      break;
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}