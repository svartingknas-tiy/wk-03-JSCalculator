alert("welcome to calculator");

function AddDigit(value) {
  document.getElementById("Display").value += value;
}

function result(){
  document.getElementById("Display").value = eval(document.getElementById("Display").value);
}

function reset(){
  document.getElementById("Display").value = " ";
}
