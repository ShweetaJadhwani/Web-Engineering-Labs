function ColorPlatte(){
    
   const ball= document.createElement("div");
   ball.className="ball";
   const Contain= document.getElementById("Content");
   ball.style.backgroundColor=getRandomHexColor();
   Contain.appendChild(ball)
  
   


}

plus.onclick = ColorPlatte;

function generateColor(){
    const add= document.getElementsByClassName("ball")
    Array.from(add).forEach(element => {
        element.style.backgroundColor=getRandomHexColor();
        
    });
}

Generate.onclick = generateColor;

function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    // Pad the string with zeros if necessary to ensure it is exactly 6 characters long
    while (randomColor.length < 6) {
      randomColor = "0" + randomColor;
    }
  
    // Return the random hex color preceded by a hash symbol
    return "#" + randomColor;
  }