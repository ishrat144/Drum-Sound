var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberofdrumbuttons; i++) {


document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  this.style.color="red";
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);

});
}
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  
});
function makeSound(key) {
  switch (key) {

    case "W":
    var drum1 = new Audio("sounds/tom1.mp3");
    drum1.play();

      break;
      case "A":
    var drum2 = new Audio("sounds/tom2.mp3");
      drum2.play();

        break;
        case "S":
        var drum3 = new Audio("sounds/tom3.mp3");
        drum3.play();

          break;
          case "D":
          var drum4 = new Audio("sounds/tom4.mp3");
          drum4.play();

            break;
            case "J":
            var drum5 = new Audio("sounds/tom5.mp3");
            drum5.play();

              break;
              case "K":
              var drum6 = new Audio("sounds/tom6.mp3");
              drum6.play();

                break;
                case "L":
            var drum7 = new Audio("sounds/tom7.mp3");
                drum7.play();
                  break;
    default: console.log(buttonInnerHTML);

  }
}
