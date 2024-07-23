function changeColor() {
    var colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.querySelector(".color").innerHTML = randomColor;
    document.querySelector(".color").style.backgroundColor = randomColor;
  
  }