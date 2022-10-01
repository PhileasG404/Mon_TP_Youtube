var form = document.querySelector("form");
var log = document.querySelector("#log");
let images = document.querySelectorAll("#logo_YT");

form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
      output = entry[0] + " = " + entry[1] + "\r";
    };
    if (output == "couleur = Noir") {
        image.src= image.src.replace('_2.jpg', '.jpg');
    } else {
        
    }
    event.preventDefault();
  }, false);