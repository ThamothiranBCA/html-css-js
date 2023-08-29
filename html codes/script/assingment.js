document.onclick = changeBackgroundColor;

function changeBackgroundColor() {
  // Your code to change the background color goes here
  // For example, you can change the background color to a random color
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 12)];
  }
  return color;
}
